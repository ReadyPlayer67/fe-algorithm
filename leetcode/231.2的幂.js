/**
 * 判断n是不是2的整数次幂
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
    //边界情况，如果n不大于0就是false
    if (n <= 0) return false
    //循环将n除以2，知道不能被2整除
    while (n % 2 === 0) {
        n = n / 2
    }
    //如果n是2的整数次幂，那么n/2除到最后一定是1,
    return n === 1

};

//更巧妙的方法，利用位运算
//2的整数次幂在二进制里都是 10,100,1000...这样，首位是1，后面全是0
//所以我们只要判断n转换成二进制是这个形式即可
//观察到，如果n是100，n-1就是011，如果n是1000，n-1就是0111，也就是所有位数都相反
//而100 & 011 = 000，所以得出结论，如果 n & n - 1 = 0，n就是2的整数次幂
function isPowerOfTwo2(n) {
    return n > 0 && (n & (n - 1)) === 0
}
