/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    //游戏的第一步是任意挑选两个数，进行四则运算中的一种算出一个新数替代这两个数
    //然后，将新数，剩下的两个数组成新数组，对这三个数玩24点游戏，重复上面的步骤...
    //最后剩下一个数时，如果这个数等于24，代表游戏成功，return true
    let len = cards.length
    //当我们找到一个结果等于24时，剩下的回溯就没必要进行了，所以我们用一个变量标记是否找到解
    let isValid = false
    //递归终止条件，这里因为有除法会产生小数，不能用cards[0]===24，要处理计算精度问题
    if(len === 1){
        return Math.abs(cards[0] - 24) < 1e-9;
    }
    //从当前cards中任意挑选两个数，用两层for循环
    //因为我们挑选的两个数一定会优先计算，不用考虑括号问题
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            let n1 = cards[i]
            let n2 = cards[j]
            //创建一个新数组，并将cards中剩余的元素放入数组中
            const newNums = []
            for(let k=0;k<len;k++){
                if(k !== i && k !== j){
                    newNums.push(cards[k])
                }
            }
            //分别进行四则运算，得到结果和剩下的数递归地求24点
            //如果找到了一个解，isValid=true，由于||的短路特性，那么后面的回溯递归都不用进行了
            isValid = isValid || judgePoint24([...newNums,n1+n2])
            isValid = isValid || judgePoint24([...newNums,n1-n2])
            isValid = isValid || judgePoint24([...newNums,n2-n1])
            isValid = isValid || judgePoint24([...newNums,n1*n2])
            if(n1 !== 0){
                isValid = isValid || judgePoint24([...newNums,n2/n1])
            }
            if(n2 !== 0){
                isValid = isValid || judgePoint24([...newNums,n1/n2])
            }
            //如果isValid，返回true，外层的递归接收到true，也不会继续执行后面的回溯了，最终直接返回true
            if(isValid){
                return true
            }
        }
    }
    //如果所有回溯执行完，isValid还是false，最终返回false
    return false
};
