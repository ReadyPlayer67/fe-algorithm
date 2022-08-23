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

//利用二叉搜索树特性去找
var inorderSuccessor2 = function(root, p) {
    if(root === null){
        return null
    }
    //如果当前节点的val<=p.val，那么p的下一个节点只可能在root的右子树上
    //递归去root.right上找
    if(root.val <= p.val){
        return inorderSuccessor(root.right,p)
    }
    //如果当前节点的val>p.val，那么有可能当前节点就是p的下一个节点
    //也有可能p的下一个节点在root的左子树上
    //递归地去当前节点的左子树上找，当在左子树中找不到比p大的节点时，那么当前 root就是结果
    let findLeft = inorderSuccessor(root.left,p)
    return findLeft !== null ? findLeft : root
};
