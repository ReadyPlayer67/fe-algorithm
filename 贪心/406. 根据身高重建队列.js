/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    //首先将people数组按照身高从大到小进行排序，如果身高相等，k小的排在前面
    people.sort((a,b) => {
        if(b[0] !== a[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    let queue = []
    //之后我们遍历people，按照每个people的k作为下标插入到新数组中就可以得到结果了
    //比如people排完序后为[[7,0], [7,1], [6,1], [5,0], [5,2]，[4,4]]
    //第一个[7,0]此时可以放心地插入queue的第0位，因为不会有比7还高的人存在
    //...
    //第五个[5,2]此时直接插入到queue的第2位，因为比他高的人我们都已经插入好了，此时queue的第0，第1位一定就是比[5,2]高的两个人，确保插入没有问题
    for(let i=0;i<people.length;i++){
        let person = people[i]
        queue.splice(person[1],0,person)
    }
    return queue
};
