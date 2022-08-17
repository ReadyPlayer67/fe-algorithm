/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //用两次二分，以nums=[5,6,7,7,7,8,10],target=8为例
    let left = 0
    let right= nums.length-1
    let min,max
    //第一次二分，查找target出现的第一个位置
    while(left<=right){
        let mid = (left+right)>>1
        //当中间位置小于target时，说明target第一次出现的位置只可能在右区间
        if(nums[mid]<target){
            left = mid+1
        }else{
            //当中间位置小于等于target时，说明target第一次出现的位置只可能在左区间
            right = mid-1
        }
    }
    //最后left就是target出现的第一个位置
    min = left
    left = 0
    right= nums.length-1
    //第二次二分，查找target最后出现的位置
    while(left<=right){
        let mid = (left+right)>>1
        //当中间位置大于target时，说明target最后一次出现的位置只可能在左区间
        if(nums[mid]>target){
            right = mid-1
        }else{
            //反之则在右区间
            left = mid+1
        }
    }
    //right就是target出现的最后一个位置
    max = right
    //如果min>max代表不存在target，返回[-1,-1]
    if(min > max){
        return [-1,-1]
    }
    return [min,max]
};
console.log(searchRange([5,6,7,7,7,8,10],9))
