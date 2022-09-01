/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    //这题规定了不能调用MountainArray.get超过100次，所以只能考虑二分
    //在一个升序/降序数组中找到target用二分很简单，所以首先我们用二分找到山脉数组的顶点位置
    //将山脉数组分成一个升序数组+降序数组，再用二分再这两个数组中找到target即可
    let left = 0
    let right = mountainArr.length()-1
    while(left < right){
        let mid  =(left+right)>>1
        //如果mountainArr.get(mid)<mountainArr.get(mid+1)，说明顶点在mid+1~right区间
        if(mountainArr.get(mid)<mountainArr.get(mid+1)){
            left = mid+1
        }else{
            //反之这说明顶点在0~mid区间
            right = mid
        }
    }
    //找到顶点后先在左侧的升序数组中利用二分找target
    let top = left
    right = top
    left = 0
    let ret = -1
    while(left <= right){
        let mid  =(left+right)>>1
        if(mountainArr.get(mid)<target){
            left = mid+1
        }else if(mountainArr.get(mid)>target){
            right = mid-1
        }else{
            ret = mid
            break
        }
    }
    //如果左侧数组没找到，去右侧数组上找，注意右侧是个降序数组
    if(ret === -1){
        left = top
        right = mountainArr.length()-1
        while(left <= right){
            let mid  =(left+right)>>1
            if(mountainArr.get(mid)<target){
                right = mid-1
            }else if(mountainArr.get(mid)>target){
                left = mid+1
            }else{
                ret = mid
                break
            }
        }
    }
    return ret
};
