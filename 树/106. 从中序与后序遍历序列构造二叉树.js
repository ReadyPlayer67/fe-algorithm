/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    //边界情况
    if(!postorder.length){
        return null
    }
    //后序遍历的最后一个节点一定是当前树的根节点，直接pop
    let rootVal = postorder.pop()
    //创建根节点
    const root = new TreeNode(rootVal)
    //获取根节点val在中序遍历数组inorder中的位置
    let index = inorder.indexOf(rootVal)
    //用index切割inorder，左半部分就是左子树的节点val，右半部分就是右子树的val
    //再用index切割postorder，同样左半部分就是左子树的节点val，右半部分就是右子树的val（可以画一颗树验证下）
    root.left = buildTree(inorder.slice(0,index),postorder.slice(0,index))
    root.right = buildTree(inorder.slice(index+1),postorder.slice(index))
    return root
};
