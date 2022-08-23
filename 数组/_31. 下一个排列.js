/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    //[4,5,2,6,3,1]我们以这个数组为例
    //1.首先我们要从右往左开始寻找，找到第一个nums[i]<nums[i+1]，这里就是2，此时nums在i+1~n区间是单调不递增的
    //2.之后我们再次从右往左寻找，找到第一个nums[j]>nums[i]，在这里就是3，我们将2和3进行交换，得到[4,5,3,6,2,1]
    //3.之后我们需要翻转nums的i+1~n区间元素，得到[4,5,3,1,2,6]，这样就得到了下一个排列
    //如果我们在第1步找不到i，说明整个nums数组都是单调不递增的，那么他的下一个排列就是整个nums的反转数组
    //也就是说我们跳过第2步，直接进行第3步
    //我们一开始设置左下标为-1，右下标为nums.length-1
    let left = -1
    let right = nums.length-1
    //寻找left下标
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            left = i
            break
        }
    }
    //第2步
    if(left !== -1){
        for(let i=nums.length-1;i>left;i--){
            if(nums[i] > nums[left]){
                right = i
                break
            }
        }
        swap(nums,left,right)
        left = left+1
        right = nums.length-1
    }else{
        //如果left下标为-1，说明整个nums单调不递增，跳过第二步，将left设置为0
        left = 0
    }
    //反转left~right区间的元素
    while(left<=right){
        swap(nums,left,right)
        left++
        right--
    }
};

function swap(nums,left,right){
    let tmp = nums[left]
    nums[left]=nums[right]
    nums[right]=tmp
}
