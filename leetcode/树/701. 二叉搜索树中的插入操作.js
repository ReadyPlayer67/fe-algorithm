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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root){
        return new TreeNode(val)
    }
    function dfs(node){
        if(node.val > val){
            if(node.left === null){
                node.left = new TreeNode(val)
            }else{
                dfs(node.left)
            }
        }else{
            if(node.right === null){
                node.right = new TreeNode(val)
            }else{
                dfs(node.right)
            }
        }
    }
    dfs(root)
    return root
};
