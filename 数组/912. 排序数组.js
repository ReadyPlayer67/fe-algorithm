/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //归并排序
    if(nums.length > 1){
        const mid = nums.length >> 1
        const left = sortArray(nums.slice(0,mid))
        const right = sortArray(nums.slice(mid))
        nums = merge(left,right)
    }
    return nums
};

function merge(arr1,arr2){
    let i = 0
    let j = 0
    let arr = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        }else{
            arr.push(arr2[j])
            j++
        }
    }
    if(i < arr1.length){
        return arr.concat(arr1.slice(i))
    }else{
        return arr.concat(arr2.slice(j))
    }
}

console.log(sortArray([1,3,2,4]))
