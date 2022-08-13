/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归实现求二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
    //基线条件
    if(root === null){
        return 0
    }
    //树的最大深度，等于左子树的深度和右子树的深度，最大的那个+1
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};
