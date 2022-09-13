/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  //双指针，首先初始化两个指针i,j指向两个数组第一个元素
  let i=0,j=0
  const m = firstList.length,n = secondList.length
  let ret = []
  while(i < m && j < n){
    //分别计算出开始端点和结束端点
    let start = Math.max(firstList[i][0],secondList[j][0])
    let end = Math.min(firstList[i][1],secondList[j][1])
    //如果开始端点小于结束端点，说明有相交区间
    if(start <= end){
      ret.push([start,end])
    }
    //我们可以删除掉拥有最小结束端点的区间A[i]，因为firstList和secondList中所有区间都是不相交的
    //A[i]只可能与一个区间相交，这个区间已经统计了，所以可以删掉A[i]，指针向前移
    //而拥有较大结束端点的区间B[i]还有可能和别的区间相交，所以他的指针暂时不动
    if(firstList[i][1] < secondList[j][1]){
      i++
    }else{
      j++
    }
  }
  return ret
};
