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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    //二叉搜索树的中序遍历是一个有序数组，利用这一点就很好解这题
    //先将二叉树转化为数组，求数组两两之间的最小值就可以了，但是这样空间复杂度较高
    //我们可以一遍递归遍历一边更新最小值，首先初始化一个变量lastVal记录前一个节点的val
    let lastVal = null
    let minVal = Infinity
    function dfs(node){
        //中序遍历
        node.left && dfs(node.left)
        //如果不是root节点，就计算插值，并更新最小差值
        if(lastVal !== null){
            let diff = node.val - lastVal
            minVal = Math.min(diff,minVal)
        }
        //把当前节点的val保存为lastVal
        lastVal = node.val
        node.right && dfs(node.right)
    }
    dfs(root)
    return minVal
};
