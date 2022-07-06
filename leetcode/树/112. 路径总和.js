/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 判断二叉树中是否存在路径，使得路径上所有节点的val总和等于targetSum
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    //我的解法，先序遍历
    let ret = false
    function dfs(node,sum){
        if(node){
            //如果节点存在，sum就加上他的val
            sum += node.val
            //如果节点是叶子节点，就判断当前的sum是否和目标相等，如果相等就把ret修改为true
            if(node.left === null && node.right === null) {
                ret = sum ===targetSum
            }
            //否则就继续递归遍历左右子节点
            dfs(node.left,sum)
            dfs(node.right,sum)
        }
    }
    dfs(root,0)
    return ret
};
