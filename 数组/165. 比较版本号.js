/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  //分割字符串，先将两个版本号字符分割为数组，之后遍历数组，如果数组项不存在就为0，存在就转换为数字
  //然后两两进行比较，如果v1[i]>v2[i]就return 1，否则return -1
  //如果比较到最后都没有return说明版本号相等，返回0
  let v1 = version1.split('.').map(x => Number(x))
  let v2 = version2.split('.').map(x => Number(x))
  for(let i=0;i<v1.length || i<v2.length;i++){
    let x = 0,y = 0
    if(i < v1.length){
      x = Number(v1[i])
    }
    if(i < v2.length){
      y = Number(v2[i])
    }
    if(x > y){
      return 1
    }
    if(x < y){
      return -1
    }
  }
  return 0
};
