/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 返回所有左叶子节点的和
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    //利用深度优先搜索
    let ret = 0
    //第二个参数由父节点传过来，表示当前节点是不是左节点
    function dfs(node,isLeft){
        //如果是左节点且是叶子节点，就累加到ret中
        if(!node.left && !node.right && isLeft){
            ret += node.val
        }
        //递归处理左右子节点
        node.left && dfs(node.left,true)
        node.right && dfs(node.right,false)
    }
    //根节点不算，所以传false
    dfs(root,false)
    return ret
};
