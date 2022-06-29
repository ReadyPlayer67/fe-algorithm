/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 后序遍历，先遍历左节点，再遍历右节点，最后节点自己
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ret=[]
    function walk(node){
        if(!node) return
        walk(node.left)
        walk(node.right)
        ret.push(node.val)
    }
    walk(root)
    return ret
};
