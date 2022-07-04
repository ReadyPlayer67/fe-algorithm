/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 实现二叉树的中序遍历，先遍历left，再遍历node本身，最后遍历right
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root === null) return []
    let ret = []
    walk(root,ret)
    return ret
};

function walk(node,ret){
    if(node){
        walk(node.left,ret)
        ret.push(node.val)
        walk(node.right,ret)
    }
}
