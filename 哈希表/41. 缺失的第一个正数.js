/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    //哈希表解法，时间空间复杂度都为O(n)
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],true)
    }
    let num = 1
    while(true){
        if(!map.has(num)){
            return num
        }
        num++
    }
};

//原地哈希解法，时间复杂度O(n)，空间复杂度O(1)
var firstMissingPositive2 = function(nums) {
    //我们可以得知要找的数一定在[1,len+1]范围内，因为就算nums里全是连续的正整数，也不会有比len+1大的数
    let len = nums.length
    //我们可以把原始数组当做哈希表来用，把数字nums[i]放置到数组的nums[i]-1位置
    //把1放到nums[0],把2放到nums[1]...然后我们再遍历一遍，发现第一个遇到的nums[i]!==i+1，此时i+1就是我们要找的数
    //现在我们要做的就是放置，我们用交换的方法
    for(let i=0;i<len;i++){
        //从0开始遍历nums，如果nums[0]介于1~len之间，说明它可以被放到nums正确的位置（否则nums就没他的位置了，没必要交换）
        //同时nums[i] !== nums[nums[i]-1]，代表他没有出现在正确的位置
        while(nums[i]>0 && nums[i] <= len && nums[i] !== nums[nums[i]-1]){
            //我们将nums[i]和nums[nums[i]-1]交换，这样nums[i]就放到了正确的位置
            //但是交换过来的数不一定应当放在i位置，那么我们要继续交换，直到放回来的数也满足或者超出1~len范围
            swap(nums,i,nums[i]-1)
        }
    }
    //再遍历一次，找到第一个不满足的条件的数，就是我们要找的数
    for(let i=0;i<len;i++){
        if(nums[i] !== i+1){
            return i+1
        }
    }
    return len+1
};

function swap(nums,index1,index2){
    let tmp = nums[index1]
    nums[index1]=nums[index2]
    nums[index2] = tmp
}
