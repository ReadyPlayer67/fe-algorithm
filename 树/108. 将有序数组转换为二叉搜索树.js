/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 补充一题，将有序数组转换为一颗BST（要求BST是平衡的，每个节点的左右两个子树的高度差的绝对值不超过 1 ）
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    //本题要求生成的BST是平衡的，所以我们不能简单地遍历数组生成BST，而是要每次取数组中间项作为root
    //写一个递归方法，根据传入的左起点和右起点下标生成树
    function dfs(left,right){
        //递归终止条件
        if(left>right){
            return null
        }
        //获取中点下标
        let mid = (left+right) >> 1 //等效于Math.floor((left+right)/2)
        let root = new TreeNode(nums[mid])
        //对root的左右子树递归执行dfs方法，类似二分的思想
        root.left = dfs(left,mid-1)
        root.right = dfs(mid+1,right)
        return root
    }
    return dfs(0,nums.length-1)
};
