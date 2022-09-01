/**
 * Vue3 diff算法中的最长递增子序列
 * @param {number[]} nums
 * @return {number}
 */
//动态规划解法，时间复杂度O(n^2)
const lengthOfLIS = function(nums) {
    //边界情况
    if(nums.length === 0) return 0
    //初始化一个dp数组，长度等于nums，初始值都为1
    //dp存放的是截止到当前位置最长递增子序列的长度
    let dp = new Array(nums.length).fill(1)
    //从头开始遍历，填充dp
    for(let i=0;i<nums.length;i++){
        //需要遍历i之前的每一位，找出i之前每一位上的最大值
        for(let j=0;j<i;j++){
            //如果nums[i]比nums[j]大，说明最长递增子序列长度可以+1，即dp[j]+1
            if(nums[i] > nums[j]){
                //还需要和dp[i]进行比较，取最大值，获得截止到当前位置nums最长递增子序列的长度
                //nums:[0,1,0,3,2]
                //dp:  [1,1,1,1,1]
                //[1,1+1,1,1,1,] 1>0 所以dp[1]=dp[0]+1=2
                //[1,2,1,1,1,] 0<=0 && 0<=1 不更新dp[2]
                //[1,2,1,2+1,1] 3>1 && 3>0 && 3>0 dp[0],dp[1],dp[2]中取最大值+1= 2+1 =3
                //[1,2,1,3,2+1] 2<3 但是2>0&&2>1，还是从 dp[0],dp[1],dp[2]中取最大值+1= 2+1 =3
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
    }
    //最后找出dp中的最大值，就是nums的最长递增子序列长度
    return Math.max(...dp)
};
// console.log(lengthOfLIS([1,7,2,4]))

//贪心+二分解法，时间复杂度O(n*logn)
const lengthOfLIS2 = function(nums ) {
    if(nums.length === 0) return 0
    //我们维护一个数组arr，arr长度就是最长递增子序列的长度
    //arr的每个元素arr[k]的值代表长度为k+1的最长递增子序列最后一个元素的值
    //对于nums=[1,7,2,4]这个数组我们依次看
    //首先第一位肯定是nums[0],arr =[1]
    //第二位7>1(arr最后一位)，直接push,arr=[1,7]
    //第三位2<7，进行替换，在[1,7]中找到第一个比他大的元素，就是7，把7替换成2
    //为什么要进行替换呢，因为我们要让最长递增子序列尽可能增长的慢，也就是让最长递增子序列最后一位元素的值尽可能小
    //如果不替换，比如上面arr=[1,7]不把7替换成2，这样遇到下一个元素4的时候就不会push了，也就无法得到最长的递增子序列了
    let arr = [nums[0]]
    for(let i=1;i<nums.length;i++){
        if(nums[i] > arr[arr.length-1]){
            arr.push(nums[i])
        }else{
            //二分查找
            let left = 0
            let right = arr.length-1
            while(left < right){
                //利用位运算，等效于 parseInt((left+right)/2)
                let mid = (left+right) >> 1
                if(arr[mid] < nums[i]){
                    left = mid + 1
                }else{
                    right = mid
                }
            }
            //left就是arr中第一个比nums[i]大的元素的下标，把他替换成nums[i]
            arr[left] = nums[i]
        }
    }
    return arr.length
};
console.log(lengthOfLIS2([1,7,2,4]))
