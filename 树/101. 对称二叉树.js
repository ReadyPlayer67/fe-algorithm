/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**判断一颗二叉树是否对称
 * @param {TreeNode} root
 * @return {boolean}
 */
// 对称二叉树满足条件
// 左右子树根节点相等
// 左子树的左孩子等于右子树的右孩子
// 左子树的右孩子等于右子树的左孩子
var isSymmetric = function(root) {
    //实现一个递归方法，判断左右两个节点是否是镜像节点
    function travese(root1,root2){
        //如果两个节点都为null，肯定是对称的
        if(root1 === null && root2 === null){
            return true
        }
        //如果一个为null，一个不为null，则肯定不对称
        if(root1 === null || root2 === null){
            return false
        }
        //如果都不为null，进一步判断他们的val
        if(root1.val === root2.val){
            //如果val相等，就递归地调用travese方法
            //对比root1.left和root2.right，root1.right和roo2.left，如果都对称，树才是对称的
            return travese(root1.left,root2.right) && travese(root1.right,root2.left)
        }else{
            //val不相等返回false
            return false
        }
    }
    return travese(root.left,root.right)
};
