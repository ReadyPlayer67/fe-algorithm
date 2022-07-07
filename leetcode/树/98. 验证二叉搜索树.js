/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 验证一颗树是不是二叉搜索树
 * 节点的左子树只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * @param {TreeNode} root
 * @return {boolean}
 */
//这道题我们用中序遍历，如果是BST，最终得到的应当是一个有序数组
var isValidBST = function(root) {
    //我们保留数组前一项的值，默认是负无穷大
    let prev = -Infinity
    function dfs(node){
        //如果节点是null，返回true，继续遍历后边的节点
        if(!node){
            return true
        }
        //中序遍历先遍历左子节点，再遍历节点本身，最后遍历右子节点
        //得到左子树的结果
        let left = dfs(node.left)
        //处理节点本身，如果节点的val小于等于prev的值，代表数组不是递增的，返回false
        if(prev >= node.val){
            return false
        }
        //否则将节点val作为prev的值，留着下一次比较
        prev = node.val
        //得到右子树的结果
        let right = dfs(node.right)
        //左子树右子树必须都返回true才能满足二叉搜索树
        return left && right
    }
    return dfs(root)
};
