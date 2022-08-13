/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ret = duration
    for(let i=1;i<timeSeries.length;i++){
        let end = timeSeries[i-1]+duration-1
        if(timeSeries[i] <= end){
            ret += (timeSeries[i]-timeSeries[i-1])
        }else{
            ret += duration
        }
    }
    return ret
};
