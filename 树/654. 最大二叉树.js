/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    //做了105和106题这题就很简单了
    //确定递归终止条件
    if(!nums.length){
        return null
    }
    //获取当前nums的最大值
    let maxVal = Math.max(...nums)
    //获取最大值在nums中的下标
    let index = nums.indexOf(maxVal)
    //构造root节点
    const root = new TreeNode(maxVal)
    //递归执行constructMaximumBinaryTree方法，左子树传入左侧数组生成，右子树传入右侧子树生成
    root.left = constructMaximumBinaryTree(nums.slice(0,index))
    root.right = constructMaximumBinaryTree(nums.slice(index+1))
    return root
};
