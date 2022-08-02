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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    //这道题我们需要求所有大于等于当前节点val的节点和，利用二叉搜索树特性
    //中序遍历二叉搜索树可以得到递增的数组，我们可以反中序遍历这颗BST，得到一个递减的数组
    //然后从数组最后一项开始，每次累加当前所有节点的和，也就是上一个节点当前的val
    //初始化一个变量pre，用于存储前一个节点的val
    let pre = null
    function dfs(node){
        //如果节点不存在，return
        if(!node){
            return
        }
        //反中序遍历，先right，再节点本身，最后left
        dfs(node.right)
        //如果pre不为null，即不是最后一个节点
        //将当前节点的val加上之前所有节点的和也就是pre，赋值给当前节点的val
        if(pre !== null){
            node.val += pre
        }
        //将pre更新为当前节点的val，用于之后的累加
        pre = node.val
        dfs(node.left)
    }
    dfs(root)
    return root
};
