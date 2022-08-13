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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    //这道题的dfs方法需要有返回值，因为我们只需要检测到有一个路径满足sum === targetSum即可返回，不需要遍历所有路径
    function dfs(node,sum){
        //递归终止条件：节点为null
        if(!node){
            return false
        }
        //累加sum
        sum += node.val
        //当该节点为叶子节点且sum===targetSum，找到一个解，return true
        if(!node.left && !node.right && sum  === targetSum){
            return true
        }
        //否则该节点为叶子节点的话返回false
        if(!node.left && !node.right){
            return false
        }
        //父节点如果接收到子节点返回的true，直接返回true，不必再继续查询了
        if(node.left && dfs(node.left,sum)){
            return true
        }
        if(node.right && dfs(node.right,sum)){
            return true
        }
        //否则返回false
        return false
    }
    return dfs(root,0)
};
