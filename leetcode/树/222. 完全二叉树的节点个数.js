/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 求一颗完全二叉树的总结点数
 * @param {TreeNode} root
 * @return {number}
 */
//直接深度优先遍历，管他那么多
var countNodes = function(root) {
    let count = 0
    if(!root) return count
    function dfs(node){
        if(node){
            count++
        }
        node.left && dfs(node.left)
        node.right && dfs(node.right)
    }
    dfs(root)
    return count
};
