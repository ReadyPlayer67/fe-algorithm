/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 判断一个树是否是平衡二叉树（每个节点的左右两个子树的高度差的绝对值不超过 1）
 * 二叉树的递归核心思想，一边递归一边处理或判断，但是最终还是要返回值留着下次递归用
 * @param {TreeNode} root
 * @return {boolean}
 */
//分别对每个节点比较左右子树侧的高度差
var isBalanced = function(root) {
    if(root === null){
        return true
    }
    //定义一个返回结果，默认true
    let ret = true
    //递归方法,类似104.二叉树最大深度那题，最终返回的是当前node的最大深度
    function dfs(node){
        if(node === null){
            return 0
        }
        //拿到左右子树的最大深度
        let left = dfs(node.left)
        let right = dfs(node.right)
        //如果左右子树的最大深度差超过1，说明不是平衡二叉树，把ret改成false
        if(Math.abs(left-right) > 1){
            ret = false
        }
        //递归方法要返回左右子树最大深度+1，代表当前节点的高度
        return Math.max(left,right)+1
    }
    dfs(root)
    return ret
};
