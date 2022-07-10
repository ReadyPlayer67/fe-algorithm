/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 将节点插入到BST正确的位置，并返回这颗BST
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    //我一开始想到的解法
    // if(!root){
    //     return new TreeNode(val)
    // }
    // function dfs(node){
    //     if(node.val > val){
    //         if(node.left === null){
    //             node.left = new TreeNode(val)
    //         }else{
    //             dfs(node.left)
    //         }
    //     }else{
    //         if(node.right === null){
    //             node.right = new TreeNode(val)
    //         }else{
    //             dfs(node.right)
    //         }
    //     }
    // }
    // dfs(root)
    // return root
    //简单版写法
    //递归终止条件，如果当前节点是null，直接创建一个TreeNode插入，并返回这个节点（留着上层递归使用）
    //对于递归来讲，很多时候他的终止条件就是边界情况，比如当前节点是null
    if(root === null){
        return new TreeNode(val)
    }
    //如果当前节点的val大于val，说明要把节点插入到当前节点的左子树中
    //对当前节点的左子树，也就是root.left递归执行insertIntoBST方法
    if(root.val > val){
        root.left = insertIntoBST(root.left,val)
    }else{//反之对右子树递归执行insertIntoBST
        root.right = insertIntoBST(root.right,val)
    }
    //最后返回root
    return root
};
