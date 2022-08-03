/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    //贪心解法
    //先处理边界情况，nums长度小于2一定是摆动的，直接返回长度
    if(nums.length < 2){
        return nums.length
    }
    //存放摇摆子序列，每两项元素差值的数组
    let arr = []
    //从第1位索引开始遍历nums
    for(let i=1;i<nums.length;i++){
        //计算当前项与前一项的差值
        const diff = nums[i]-nums[i-1]
        //如果diff等于0，不会向arr中添加元素，摇摆子序列要求大于或小于0
        if(diff !== 0){
            //如果是前两项，直接push差值到arr中
            if(!arr.length){
                arr.push(diff)
            }else{
                //否则比较当前差值和arr最后一项的值，一个大于0一个小于0，此时才是摇摆的，将差值push到arr中
                if((diff>0 && arr[arr.length-1]<0) || (diff<0 && arr[arr.length-1]>0)){
                    arr.push(diff)
                }
            }
        }

    }
    //最终返回arr.length+1，因为arr存放的是nums两两的差值，实际元素数要多一个
    return arr.length+1
};
