/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //这题和106类似，也是同样的思路，从preorder中获取root节点的值
    //再去inorder中根据值分割，递归地去生成左子树和右子树
    if(preorder.length === 0){
        return null
    }
    const rootVal = preorder.shift()
    const root = new TreeNode(rootVal)
    const index = inorder.indexOf(rootVal)
    root.left = buildTree(preorder.slice(0,index),inorder.slice(0,index))
    root.right = buildTree(preorder.slice(index),inorder.slice(index+1))
    return root
};
