/**
 * 本题我们演示了如何从暴力递推一步一步推导出动态规划的过程
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    //暴力递归法
    //因为当前是我们先手，所以我们调用先手方法，此时牌组是完整的，l=0,r=nums.length-1
    const ret = firstHand1(nums,0,nums.length-1)
    //再计算出当前牌组的分数总和，减去先手获得的最大分数就是后手的分数
    let sum = nums.reduce((pre,cur) => pre+cur,0)
    //最后比较两者，判断先手者能否获胜
    return ret >= sum - ret
};
//创建一个方法，代表先手情况下能获得的最大分数，nums表示牌组，l表示当前剩下的牌组左下标，r表示当前剩下的牌组的右下标
function firstHand1(nums,l,r){
    //如果l=r代表牌组中就剩最后一张牌了，直接返回这张牌的分数
    if(l === r){
        return nums[l]
    }
    //如果牌堆中不止一张牌，那么有两种选择，最左边那张或最右边那张
    //我们需要选择这两种方案中的最大值作为最优解
    //摸最左边那张牌获得的分数等于nums[l]牌的分数加上在剩余牌堆后手摸可以得到的最大分数，摸右边那张同理
    //所以我们还需要一个后手方法
    return Math.max(nums[l]+secondHand1(nums,l+1,r),nums[r]+secondHand1(nums,l,r-1))
}
//创建一个方法，用来计算如果是后手摸牌能够获得的最大分数，参数同样是牌组，左下标，右下标
function secondHand1(nums,l,r){
    //如果就剩最后一张牌，对手肯定会拿走，所以得到的分数就是0
    if(l === r){
        return 0
    }
    //否则对手有两种选择，拿最左边那张和最右边那张
    //如果对手拿了最左边那张，那么下一轮就是你先手，你在剩下的牌堆也就是l+1~r中用先手方法算出可以获得的最大分数
    //同理如果对手拿了右边那张，就在l~r-1区间的牌堆计算最大分数
    //因为对手也足够聪明，他为了取胜会选出最优方案，也就是你能获得最少分数的方案，所以此时的最优解是两者的最小值（其实是对手的最优解）
    return Math.min(firstHand1(nums,l+1,r),firstHand1(nums,l,r-1))
}

//加入缓存优化版本,上面的递归版本有很多重复的计算：
//firstHand(nums,1,7)依赖于secondHand(nums,2,7)和secondHand(nums,1,6)
//而secondHand(nums,2,7)依赖于firstHand(nums,3,7)和firstHand(nums,2,6)
//同时secondHand(nums,1,6)又依赖于firstHand(nums,1,5)和firstHand(nums,2,6)
//这时候firstHand(nums,2,6)就是重复的计算，所以我们两个二维数组，分别用来缓存firstHand和secondHand的计算结果
function PredictTheWinner2(nums){
    let n = nums.length
    //初始化缓存数组，默认值都是-1，表示未计算过
    let fmap = new Array(n).fill(-1).map(x=>new Array(n).fill(-1))
    let gmap = new Array(n).fill(-1).map(x=>new Array(n).fill(-1))
    //下面都和之前一样，调用先手方法得到结果，此时要把fmap和gmap当做参数传递进去
    const ret = firstHand2(nums,0,nums.length-1,fmap,gmap)
    let sum = nums.reduce((pre,cur) => pre+cur,0)
    return ret >= sum - ret
}

function firstHand2(nums,l,r,fmap,gmap){
    //修改先手方法，如果fmap存在算过的解，直接返回，避免下面的重复计算
    if(fmap[l][r] !== -1){
        return fmap[l][r]
    }
    let ans = 0
    if(l === r){
        ans = nums[l]
    }else{
        const p1 = nums[l]+secondHand2(nums,l+1,r,fmap,gmap)
        const p2 = nums[r]+secondHand2(nums,l,r-1,fmap,gmap)
        ans = Math.max(p1,p2)
    }
    //计算过一个解把结果存到缓存的指定位置
    fmap[l][r] = ans
    return ans
}

function secondHand2(nums,l,r,fmap,gmap){
    //后手方法，同理，有缓存就直接返回缓存结果
    if(gmap[l][r] !== -1){
        return gmap[l][r]
    }
    let ans = 0
    if(l !== r){
        const p1 = firstHand2(nums,l+1,r,fmap,gmap)
        const p2 = firstHand2(nums,l,r-1,fmap,gmap)
        ans = Math.min(p1,p2)
    }
    gmap[l][r] = ans
    return ans
}

//最终优化，动态规划版本
//有了上面缓存的经验，我们知道动态规划其实就是把我们之前算过的结果缓存下来，下一次运算如果发现有缓存直接调
//现在我们直接来画本题需要的两个表格，也就是二维数组fmap和gmap
function PredictTheWinner3(nums){
    let n = nums.length
    let fmap = new Array(n).fill(-1).map(x=>new Array(n).fill(-1))
    let gmap = new Array(n).fill(-1).map(x=>new Array(n).fill(-1))
    //由上面的递归解法我们得知边界条件是当l===r时，也就是两张表格的对角线位置，fmap[i][i]=nums[i],gmap[i][i]=0
    //所以我们先把两个表格的对角线画出来
    for(let i=0;i<n;i++){
        fmap[i][i] = nums[i]
        gmap[i][i] = 0
    }
    //我们继续填表格，因为l是左下标，r是右下标，l必定小于等于r，
    //所以这张表格（l为行，r为列）的左下部分都不需要填（那部分l>r）
    //又因为对角线我们已经填过了，所以我们从对角线右边第一个对角线开始填表
    //起始位置startCol就是1，终止于n
    for(let startCol = 1;startCol<n;startCol++){
        //开始填一条对角线\ 起始行数l肯定是0，起始列数r等与startCol
        let l = 0
        let r = startCol
        //对角线填完的时候列数r===n-1，代表到达了右下角，所以内层循环的终止条件是r<n
        while(r<n){
            //递推公式，根据递归解法我们可以很容易地写出来
            //此时不再是递归调用，而是从缓存表中拿数据，fmap的每个格子从他在gmap中相同位置的左面一个格子和下面一个格子推导出来
            fmap[l][r] = Math.max(nums[l]+gmap[l+1][r],nums[r]+gmap[l][r-1])
            //同理gmap的每个格子可以从fmap中推导出来
            gmap[l][r] = Math.min(fmap[l+1][r],fmap[l][r-1])
            l++
            r++
        }
    }
    console.log(fmap)
    //我们画完了格子，最终要找的结果就在表格第一行最后一列，因为我们一开始的牌组左下标是0，右下标为n-1
    //这个结果就是先手能获得的最大分数了
    const ret = fmap[0][n-1]
    let sum = nums.reduce((pre,cur) => pre+cur,0)
    return ret >= sum - ret
}

console.log(PredictTheWinner3([1,5,2]))
