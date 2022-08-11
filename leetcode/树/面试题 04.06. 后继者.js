/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    //这题我用了通用的方案，没有利用二叉搜索树的特性，而是将他看作一颗普通的二叉树
    let ans = null
    //初始化一个变量记录中序遍历的前一个节点
    let pre = null
    function dfs(node){
        //如果遍历到了null，或者找到了ans，就不用再递归了，直接return
        if(node === null || ans !== null){
            return
        }
        //进行中序遍历
        dfs(node.left)
        //如果发现pre是p，那么pre的下一个节点，也就是当前节点node就是我们要找的答案
        if(pre === p && ans ===null){
            ans = node
        }
        //处理完当前节点，将其标记为前一个节点
        pre = node
        dfs(node.right)
    }
    dfs(root)
    return ans
};
