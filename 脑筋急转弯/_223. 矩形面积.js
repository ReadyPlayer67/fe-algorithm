/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  //先计算出两个矩形的面积
  const area1 = (ax2-ax1)*(ay2-ay1)
  const area2 = (bx2-bx1)*(by2-by1)
  //求出两个矩形宽度和高度重叠部分的长度
  let overlapWidth = Math.min(ax2,bx2) - Math.max(ax1,bx1)
  let overlapHeight = Math.min(ay2,by2) - Math.max(ay1,by1)
  //只有当重叠部分的长度都大于0时，重叠部分的面积才大于0，否则重叠部分的面积为0
  overlapHeight = Math.max(0,overlapHeight)
  overlapWidth = Math.max(0,overlapWidth)
  //矩形面积减去重叠部分矩形的面积就是结果
  return area1 + area2 - overlapHeight*overlapWidth
};
