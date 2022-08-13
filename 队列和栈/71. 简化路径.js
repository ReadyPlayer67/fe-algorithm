/**
 * 利用栈实现简化路径（给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。）
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
    //首先将字符串按/分割成数组
    let arr = path.split('/')
    //初始化一个栈，用来存放简化后的路径
    let stack = []
    //遍历数组，根据题目，/之间的路径名称现在有.. . 空字符串 其他字符 这四种情况
    for(let item of arr){
        //如果是.. 并且当前栈长度大于1，代表返回上一级，栈弹出一个元素
        if(item === '..'){
            if(stack.length){
                stack.pop()
            }
        //如果不是空字符串且不等于. ，代表一个目录名称，就往栈中push一个元素
        }else if(item && item !== '.'){
            stack.push(item)
        }
        //如果是. 或者空字符，就啥都不干
    }
    //最后拼接出简化的路径
    return '/' + stack.join('/')
};
