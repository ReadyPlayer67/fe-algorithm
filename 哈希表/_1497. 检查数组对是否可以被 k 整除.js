/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  //我们可以发现，和能够被k整除的两个数a,b需要满足(a%k+b%k)===0，也就是他们对k的余数之和能够被k整除
  //因此我们可以用一个哈希表（这里用了数组，一个道理），下标是余数，值是出现次数
  let mods = new Array(k).fill(0)
  for(let num of arr){
    const mod = (num % k + k) % k
    mods[mod]++
  }
  //统计完之后我们遍历二分之一个mods，观察i出现次数是否和k-i出现次数相等，不过有一对不相等就返回false
  for(let i=1;i+i<k;i++){
    if(mods[i] !== mods[k-i]){
      return false
    }
  }
  //最后还有余数为0的数，要求这些数出现的次数为偶数，因为他们需要两两配对
  return mods[0] % 2 ===0
};

console.log(canArrange([1,2,3,4,5,10,6,7,8,9],5))
