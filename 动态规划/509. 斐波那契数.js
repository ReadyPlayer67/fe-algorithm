/**
 * 实现斐波那契数列
 * @param {number} n
 * @return {number}
 */
// const fib = function (n) {
//     if (n === 0) return 0
//     if (n === 1) return 1
//     //递归写法
//     // return fib(n-2) + fib(n-1)
//     //动态规划写法
//     let p1 = 0, p2 = 1
//     let ret = 0
//     for (let i = 2; i <= n; i++) {
//         //确定递推公式
//         ret = p1 + p2
//         p1 = p2
//         p2 = ret
//     }
//     return ret
// };
//用一个数组做备忘录，之后如果发现计算过就从数组中取值，避免重复的计算
let memo = [0,1]
const fib = function(n) {
    if(n<=1){
        return n
    }
    if(memo[n]){
        return memo[n]
    }
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
};
