/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //如果是3的N次幂，一直除以3最后会等于1
    while(n > 1){
        n = n/3
    }
    return n === 1
};
