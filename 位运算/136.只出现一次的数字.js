/**
 * 给定一个数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    //一般解法，利用一个哈希表，空间复杂度为O(n)
    let map = new Map()
    //遍历数组，如果map中不存在该元素，就set，如果存在，就delete
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.delete(nums[i])
        }else{
            map.set(nums[i],nums[i])
        }
    }
    //最终剩下的元素就是只出现了一次的数字
    return map.keys().next().value
};

//更好的方法，利用异或运算符，空间复杂度为O(1)，异或运算符满足以下三个定律
//1.任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0=a。
//2.任何数和其自身做异或运算，结果是0，即 a ^ a=0。
//3.异或运算满足交换律和结合律，即 a ^ b ^ a = b ^ a ^ a = b ^ (a ^ a) = b ^ 0 = b。
function singleNumber2(nums){
    let ret = 0
    //遍历数组，每一项和0进行异或运算，最终ret = 0^1^2^3^1^2
    //根据上述第一条定律，等于1^2^3^1^2
    //根据交换律等于1^1^2^2^3，根据结合律等于(1^1)^(2^2)^3
    //根据上述第二条定律等于0^0^3,，最终结果等于3，就是出现一次的元素
    nums.forEach(num => {
        ret ^= num
    })
    return ret
}
