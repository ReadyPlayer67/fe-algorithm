/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //这题是求x算数平方根的整数部分，我们可以用二分
    //在0~x之间的区间依次枚举整数，直到满足要求
    let left = 0
    let right = x
    while(left<=right){
        let mid = (left+right)>>1
        if(mid*mid<x){
            left=mid+1
        }else if(mid*mid>x){
            right = mid-1
        }else{
            return mid
        }
    }
    //这里不能返回left，比如计算8的平方根,2*2<8此时会进入分支left=mid+1也就是3，会错过答案
    //之后3*3>8会进入right=mid-1，也就是3-1=2，因此用right能拿到正确的答案
    //正因为如此，循环条件应当是left<=right,而不是left<right，最好找到答案那次循环正是left===right那次
    return right
};

mySqrt(8)
