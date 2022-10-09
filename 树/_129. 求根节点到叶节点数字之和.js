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
 * @return {number}
 */
var sumNumbers = function(root) {
  //我的解法，深度优先搜索
  let ret = 0
  //dfs方法，第一个参数为节点node，第二个参数为一个数组path，记录递归遍历的路径
  function dfs(node,path){
    path.push(node.val)
    //如果node是叶子节点，就将路径转换为num，累加到ret上
    if(!node.left && !node.right){
      const num = Number(path.join(''))
      ret += num
    }else{
      //否则就继续向下递归遍历
      node.left && dfs(node.left,[...path])
      node.right && dfs(node.right,[...path])
    }

  }
  dfs(root,[])
  return ret
};
