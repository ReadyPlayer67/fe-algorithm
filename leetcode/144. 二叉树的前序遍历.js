/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的前序遍历，先遍历node本身，再遍历node.left,最后遍历node.right
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let ret=[]
    function walk(node){
        if(!node) return
        ret.push(node.val)
        walk(node.left)
        walk(node.right)
    }
    walk(root)
    return ret
};
