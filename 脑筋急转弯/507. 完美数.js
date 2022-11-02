/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  //枚举法，首先处理边界情况
  if (num === 1) {
    return false;
  }
  //初始化一个变量sum记录每个正因子的和
  let sum = 1
  //从2开始遍历，只需要遍历到i*i<=num即可，因为我们找到一个因数i的同时也找到了另一个因数num/i
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i
      //如果i*i<num，就需要累加上另一个因数num/i
      if (i * i < num) {
        sum += Math.floor(num / i)
      }
    }
  }
  return sum === num
};