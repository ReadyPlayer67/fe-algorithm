/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.timeToLive = timeToLive
    this.map = {}
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.map[tokenId] = currentTime
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if(!this.map[tokenId]){
        return
    }
    if(this.map[tokenId] + this.timeToLive <= currentTime){
        return
    }
    this.map[tokenId] = currentTime
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    const arr = Object.values(this.map).filter(item => item <= currentTime && item + this.timeToLive > currentTime)
    return arr.length
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */

