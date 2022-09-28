/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  //首先对folder数组按照字典序升序排列
  folder.sort()
  //为了之后方便对比父子关系，将文件夹按/分割为数组的形式
  folder = folder.map(x => x.split('/'))
  //初始把第0个文件夹加入结果（按照字典序排列，第一个一定不是任何目录的子目录）
  let ret = [folder[0].join('/')]
  //初始化两个指针，cur为当前处理的目录，father为当前比对的父目录
  let cur = 1,father = 0
  while(cur < folder.length){
    //如果是子目录就加入到结果中，并且father指针指向当前目录
    if(!isSub(folder[father],folder[cur])){
      ret.push(folder[cur].join('/'))
      father = cur
    }
    cur++
  }
  return ret
};

//判断b是否是a子目录的方法
function isSub(a,b){
  //如果b的长度大于等于a，b一定不是a的子目录
  if(b.length <= a.length){
    return false
  }
  //如果b是a的子目录，前半段应当包含a的所有路径
  for(let i=0;i<a.length;i++){
    if(a[i] !== b[i]){
      return false
    }
  }
  return true
}
