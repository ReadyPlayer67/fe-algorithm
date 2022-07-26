/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //暴力解法，时间复杂度O(n2)
    let ret = new Array(temperatures.length).fill(0)
    for(let i=0;i<temperatures.length-1;i++){
        let day = 1
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
                ret[i] = day
                break
            }else{
                day++
            }
        }
    }
    return ret
};
