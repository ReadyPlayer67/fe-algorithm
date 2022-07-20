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
var invertTree = function(root) {
    // if(root === null) return root
    // [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
    // return root
    //递归的基线条件，如果当前节点不存在，就不做操作返回null
    if (root === null) {
        return null;
    }
    //翻转二叉树就是翻转左右两个子树，再递归的进入左右子节点，翻转他们的左右子树
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
