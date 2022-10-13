/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //单指针，遍历两次的方法
    //定义遍历i表示当前头部的下标，从0开始
    let i = 0
    //第一次遍历，将数组中所有0交换到数组头部
    for(let j=0;j<nums.length;j++){
        if(nums[j] === 0){
            swap(nums,i,j)
            i++
        }
    }
    //第二次遍历，将数组中所有1交换到数组头部0之后的位置
    for(let j=i;j<nums.length;j++){
        if(nums[j] === 1){
            swap(nums,i,j)
            i++
        }
    }
    //在遍历结束之后，所有的1都被交换到「头部」的范围，并且都在0之后，此时2只出现在「头部」之外的位置，因此排序完成
};

//利用双指针遍历一次的方法
var sortColors2 = function(nums) {
    //定义两个指针，p0用来交换0，p0之前的位置都是0
    let p0 = 0
    //p1用来交换1，p1之前的位置都是1
    let p1 = 0
    for(let i=0;i<nums.length;i++){
        //遍历数组，如果nums[i]===2，什么都不用做
        //如果nums[i]===1，将nums[i]和nums[p1]交换，p1后移一位
        if(nums[i] === 1){
            swap(nums,i,p1)
            p1++
        }else if(nums[i] === 0){
            //如果nums[i]===0，不能简单地只交换nums[i]和nums[p0]
            //因为p0之前的位置都是0，p0所在位置可能是1，我们可能会把一个1交换出去
            swap(nums,i,p0)
            //当p0<p1时，说明我们已经将一些1放到了0后面，此时nums[p0]一定为1
            if(p0<p1){
                //所以我们此时要把nums[p1]和nums[i]交换，因为nums[p1]此时是2
                //我们把2和1进行一次交换，把1放到当前“头部”的末端
                swap(nums,i,p1)
            }
            //此时因为p0,p1位置都经过了一次交换，所以两个指针都要右移一位
            p0++
            p1++
        }
    }
};

function swap(nums,i,j){
    let tmp = nums[i]
    nums[i]=nums[j]
    nums[j]=tmp
}

