/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    //贪心解法，先考虑每个孩子左边的人，得到一个局部最优解，再考虑每个孩子右边的人，汇总起来得到全局最优解
    //先初始化结果数组，默认每个孩子当前1颗糖
    let ret = new Array(ratings.length).fill(1)
    //从左到右遍历从第1位开始ratings，如果一个孩子分数比他左边的孩子分数高，他的糖果数就等于左边孩子的糖+1
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
            ret[i] = ret[i-1]+1
        }
    }
    //因为考虑每个孩子右边依赖每个孩子后一位的孩子的糖果数，所以要从右向左遍历
    for(let i=ratings.length-2;i>=0;i--){
        //如果当前孩子的分数比他右边孩子的分数高，此时就有两个选择了：
        //首先肯定要比右边孩子的糖果数多一个，就是ret[i+1]+1
        //另外还要考虑之前比较右孩子大于左孩子得到的糖果数量，也就是ret[i]
        //取局部最优解，也就是两者的最大值，这样保证了第i个孩子的糖果数既大于左右又大于右边
        if(ratings[i] > ratings[i+1]){
            ret[i] = Math.max(ret[i+1]+1,ret[i])
        }
    }
    //用reduce函数求ret数组元素总和
    return ret.reduce((pre,cur) => pre+cur,0)
};
