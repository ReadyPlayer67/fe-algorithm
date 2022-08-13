/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    //[-2,-2,-2,3,3]
    //当前油箱中剩余的油总和
    let sum = 0
    //起始位置，初始默认从第0个加油站出发
    let start = 0
    //如果从第start个加油站出发，当前油箱中剩余的油量
    let curSum = 0
    for(let i=0;i<gas.length;i++){
        //第i个加油站加的油-去第i+1个加油站耗费的油=剩下的油量
        const rest = gas[i]-cost[i]
        //通过剩余油量更新curSum和sum
        curSum += rest
        sum += rest
        //一旦curSum<0,证明从start出发会出现油箱剩余油量为负的情况
        //换句话说，不能从0~i区间的任何加油站出发，只能从i+1后面的某一个加油站出发
        if(curSum < 0){
            //我们假设从i+1加油站出发，再从0计算curSum
            start = i+1
            curSum = 0
        }
    }
    //如果跑完一圈油箱中剩余的油量<0，证明不可能跑完一圈，返回-1
    if(sum < 0){
        return -1
    }
    return start
};
