/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    //分别计算时针，分针相对于12点的角度，再计算他们的差值ret
    //如果差值大于180，答案就是360-ret，所以就是Math.min(ret,360-ret)
    let minDeg = 360*(minutes/60)
    hour = hour === 12 ? 0 :hour
    let hourDeg = hour*30 + minutes/60*30
    let ret = Math.abs(minDeg-hourDeg)
    return Math.min(ret,360-ret)
};
