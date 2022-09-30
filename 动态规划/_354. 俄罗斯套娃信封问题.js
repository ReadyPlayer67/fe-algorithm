/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  //二维版的求最长递增子序列长度问题（这也是官方题解之一，最后两个测试用例居然超时了，也是醉了）
  //先对数组按长度进行升序排列，如果长度相同，比较宽度
  envelopes.sort((a,b) => {
    if(a[0] === a[0]){
      return a[1]-b[1]
    }else{
      return a[0]-b[0]
    }
  })
  //然后就是求最长递增子序列的问题了，只不过要同时满足长度宽度都严格递增
  let ret = 1
  let dp = new Array(envelopes.length).fill(1)
  for(let i=1;i<envelopes.length;i++){
    for(let j=0;j<i;j++){
      if(envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]){
        dp[i] = Math.max(dp[i],dp[j]+1)
      }
    }
    ret = Math.max(dp[i],ret)
  }
  return ret
};
