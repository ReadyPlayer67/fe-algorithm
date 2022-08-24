/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    //这题在归并排序的基础上加一行代码即可
    let ret = 0
    function dfs(nums){
        if(nums.length > 1){
            const mid = nums.length >> 1
            const left = dfs(nums.slice(0,mid))
            const right = dfs(nums.slice(mid))
            nums = merge(left,right)
        }
        return nums
    }
    function merge(left,right){
        let i = 0
        let j = 0
        let arr = []
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                arr.push(left[i])
                i++
            }else{
                //加的那一行在这里，我们在每次合并两个数组时，比如[2,3]和[1,4]
                //我们先将最小的元素1取出来放到arr中，因为归并排序时左右两个数组都是有序的
                //我们可以得知1比left数组[2,4]中的任何元素都小，也就是说left数组中的任意元素和1都能构成逆序对
                //所以我们将left数组中此时剩余的元素数，也就是left.length-i加到ret中即可
                //每一次归并时都累加上，最终就能得到整个数组的逆序对数量
                ret += left.length - i
                arr.push(right[j])
                j++
            }
        }
        if(i < left.length){
            return arr.concat(left.slice(i))
        }else{
            return arr.concat(right.slice(j))
        }
    }
    dfs(nums)
    return ret
};
