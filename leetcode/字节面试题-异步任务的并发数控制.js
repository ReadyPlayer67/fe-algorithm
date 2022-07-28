/**
 * 实现一个异步任务的并发数控制方法
 * @param maxCount 传入一个参数 最大并发数
 * @returns {function(*): Promise<unknown>} 返回一个异步方法runner
 */
function limit(maxCount){
    //当前正在执行的异步任务数量
    let activeCount = 0
    //任务队列，里面放置的是等待执行的异步任务
    let queue = []
    //定义一个执行异步任务的run方法
    async function run(fn,resolve){
        //执行的时候首先将当前执行数+1
        activeCount++
        //执行异步任务，并拿到返回值result
        const result = await fn()
        //将result通过传进来的resolve传出去
        resolve(result)
        //执行next方法
        next()
    }
    //push方法接收异步任务fn和resolve作为参数
    async function push(fn,resolve){
        //用run方法把fn和resolve包起来（但不执行），将生成的run方法push到队列中
        queue.push(run.bind(null,fn,resolve))
        //再检查如果当前执行任务数量小于最大并发数，并且队列中还有任务
        if(activeCount < maxCount && queue.length > 0){
            //从队列头部弹出一个run并执行
            queue.shift()()
        }
    }
    //定义一个next方法，用于一个run方法执行完执行下一个
    function next(){
        //当前执行任务数-1
        activeCount--
        //此时执行任务数一定小于最大并发数，我们只需检查队列中是否还要任务，有的话就弹出一个执行就好了
        if(queue.length > 0){
            queue.shift()()
        }
    }
    //limit方法要返回一个异步的runner方法，该方法接收一个参数fn，即异步任务
    async function runner(fn){
        //runner方法返回一个promise对象
        return new Promise(resolve => {
            //执行runner方法时会先调用push方法
            push(fn,resolve)
        })
    }
    return runner
}
//定义一个sleep方法模拟异步任务
function sleep(time,name){
    return new Promise(resolve => {
        console.log(time,name,'start')
        setTimeout(() => {
            resolve(name)
            console.log(time,name,'end','-----------')
        },time*1000)
    })
}

//测试函数
async function start(){
    let runner = limit(3)
    let tasks = [
        ()=> sleep(1,'吃饭'),
        ()=> sleep(3,'睡觉'),
        ()=> sleep(5,'打游戏'),
        ()=> sleep(3.5,'学习算法'),
        ()=> sleep(4,'学习Vue和React'),
    ].map(runner)
    //tasks等于runner方法返回Promise对象组成的数组
    //我们调用Promise.all就能拿到异步任务全部执行完的结果（因为我们在run方法中用resolve(result)把结果都返回出来了）
    let result = await Promise.all(tasks)
    console.log(result,'end')
}
start()
