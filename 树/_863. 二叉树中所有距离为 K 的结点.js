/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  //要找到和target距离为k的节点，可以把树想象成一个图，从target的left，right，parent三个方向进行dfs
  //但是在二叉树中我们无法获取一个节点的父节点，所以我们要先进行一次dfs，用一个hashMap记录每个节点的父节点
  let parents = new Map()
  //从root节点开始进行dfs，因为node.val是唯一的，所以可以用node.val作为map的key
  function findParent(node){
    if(node.left){
      parents.set(node.left.val,node)
      findParent(node.left)
    }
    if(node.right){
      parents.set(node.right.val,node)
      findParent(node.right)
    }
  }
  findParent(root)
  let ret = []
  //之后我们从target节点开始往三个方向进行dfs，维护一个参数depth，每往前递归搜索一次depth+1
  //同时我们还要维护一个from参数，代表来源节点，这样才能避免重复走回头路重复搜索
  function dfs(node,from,depth){
    if(!node){
      return
    }
    //找到了一个节点
    if(depth === k){
      ret.push(node.val)
      return
    }
    //如果不是从左子节点来的，就往左子节点搜索
    if(node.left !== from){
      dfs(node.left,node,depth+1)
    }
    //如果不是从右子节点来的，就往右子节点搜索
    if(node.right !== from){
      dfs(node.right,node,depth+1)
    }
    //如果不是从父节点来的，就往父节点搜索
    if(parents.get(node.val) !== from){
      dfs(parents.get(node.val),node,depth+1)
    }
  }
  dfs(target,null,0)
  return ret
};
