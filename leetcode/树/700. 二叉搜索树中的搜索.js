/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 在二叉搜索树中搜索指定val的节点
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    function dfs(node){
        if(!node) return null
        //一共三种情况，要么等于要找的val，返回node
        if(node.val === val){
            return node
        //要么小于，去右子树查找
        }else if(node.val < val){
            return dfs(node.right)
        //要么小于，去左子树查找
        }else{
            return dfs(node.left)
        }
    }
    return dfs(root)
};
