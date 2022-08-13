/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //hash表解法，如果一个数是快乐数，他getSum最后的结果一定是1
    //如果不是快乐数，他getSum的结果一定会出现重复的结果
    //我们用一个hash表来存储每次运算的结果，如果检测到有过这个解就返回false，否则会一直循环知道等于1
    let map = new Map()
    while(!map.has(n)){
        map.set(n,0)
        n = getSum(n)
        if(n === 1) return true
    }
    return false
};

//也可以用快慢指针的做法，类似环装链表那题
//如果不是快乐数得到的结果会是一个隐式的环装链表
function isHappy2(n){
    let slow = n
    let fast = n
    while(fast !== 1 && getSum(fast) !== 1){
        fast = getSum(getSum(fast))
        slow = getSum(slow)
        if(fast === slow){
            return false
        }
    }
    return true
}

function getSum(n){
    let sum = 0
    while(n){
        sum += (n%10) ** 2
        n = Math.floor(n/10)
    }
    return sum
}

console.log(isHappy2(19))
