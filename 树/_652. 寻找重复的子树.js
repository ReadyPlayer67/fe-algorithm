/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  //维护一个哈希表map，key为当前子树序列化的结果，value为该节点
  //我们深度优先搜索每个节点，生成每个节点的序列化结果并存放到map中
  //如果map中存在就将节点push到一个set中（以便去重）
  let map = {}
  let set = new Set()
  function dfs(node){
    //序列化二叉树方法为如果该节点为null就用一个X字符表示
    if(!node){
      return 'X'
    }
    //递归遍历左子树和右子树，将node.val和左子树右子树拼接起来
    let left = dfs(node.left)
    let right = dfs(node.right)
    const str = `${node.val},${left},${right}`
    //检查map中是否存在该序列化结果
    if(map[str]){
      set.add(map[str])
    }else{
      map[str] = node
    }
    //最终要把当前子树的序列化结果返回出去，供父节点使用
    return str
  }
  dfs(root)
  return [...set]
};
