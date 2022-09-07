/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
  //这道题和33.搜索旋转排序数组类似，但是数组项中有可能会有重复值，所以我们在二分之前要恢复数组的二段性
  //什么是二段性，就是一段满足某个性质，另外一段不满足某个性质，这个时候就可以用二分
  //但是数组中有重复项旋转后有可能不具备二段性，比如[5,5,1,2,3,4,5]，旋转点为5
  //此时旋转点左边和右边的升序数组中都含有5，不满足一段都>=5，另一段都<5这样的二段性了，
  //因此我们将arr末尾等于arr[0]的数组项都去掉，这样就恢复了数组的二段性[5,5,1,2,3,4,5]=>[5,5,1,2,3,4]
  const n = arr.length
  let l = 0
  let r = n-1
  //恢复二段性
  while(r > l && arr[0] === arr[r]){
    r--
  }
  //之后就是寻找旋转点，然后判断target在旋转点左边还是右边的升序数组中
  //再在升序数组中用二分搜索查找target的过程了
  while(l<r){
    let mid = (l+r+1)>>1
    if(arr[0]<=arr[mid]){
      l = mid
    }else{
      r = mid -1
    }
  }
  if(target >= arr[0]){
    l=0
  }else{
    l++
    r=n-1
  }
  //这里注意因为数组项可能相同，而题目要求我们返回最小的索引值
  while(l<r){
    let mid = (l+r)>>1
    //因此我们在target===arr[mid]时要继续去mid左边区间查找，有可能存在更小的下标
    if(target<=arr[mid]){
      r = mid
    }else{
      l = mid+1
    }
  }
  //最后如果arr[l]===target说明存在下标，返回l，否则返回-1
  return arr[l] === target ? l :-1
};
