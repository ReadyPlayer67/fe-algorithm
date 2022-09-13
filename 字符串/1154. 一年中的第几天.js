/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    //直接计算，注意闰年的判断是year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    const arr = date.split('-')
    const year = +arr[0]
    const month = +arr[1],day = +arr[2]
    const monthDays = [0,31,28,31,30,31,30,31,31,30,31,30,31]
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        monthDays[2] = 29
    }
    let ret = 0
    for(let i=1;i<month;i++){
        ret += monthDays[i]
    }
    ret += day
    return ret
};
