/**
 * 利用贪心解决柠檬水找零问题
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    //三种情况：
    //1.给5块，就直接收下
    //2.给10块，检查有没有一张5块
    //3.给20块，利用贪心，先看看有没有1张10块+1张5块，如果没有就看看有没有3张5块
    let fiveNum = 0
    let tenNum = 0
    for(let i=0;i<bills.length;i++){
        const bill = bills[i]
        if(bill === 5){
            fiveNum +=1
        }else if(bill === 10){
            if(fiveNum > 0){
                tenNum +=1
                fiveNum -=1
            }else{
                return false
            }
        }else{
            if(tenNum > 0 && fiveNum > 0){
                tenNum-=1
                fiveNum-=1
            }else if(fiveNum > 2){
                fiveNum -=3
            }else{
                return false
            }
        }
    }
    return true
};
