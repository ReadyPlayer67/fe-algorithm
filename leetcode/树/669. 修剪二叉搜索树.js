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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    //这道题不能简单地递归树，遇到node.val小于low或大于high的就直接return null删除
    //因为node.val小于low的节点，他的右子树中可能有val在low~high之间的节点，不能删除，node.val大于high同理
    //所以遇到val<low或val>high的节点不能简单的return null
    //递归终止条件
    if(root === null){
        return null
    }
    //如果root.val<low，根据BST的特性，root的左子树上所有节点val都小于root.val
    //所以root和root的左子树都可以直接删掉，删掉之后继续看右节点的剪裁情况.剪裁后重新赋值给root
    if(root.val < low){
        root = root.right
        root = trimBST(root,low,high)
    }else if(root.val > high){
        //如果root.val>high，和上面同理
        root = root.left
        root = trimBST(root,low,high)
    }else{
        //如果root.val在区间内，就递归处理左子树和右子树
        //我们在上面处理了要删除root节点的情况，返回了经过处理的root.left/root.right
        //现在我们要将处理完的左子树赋值给root.left,处理完的右子树赋值给root.right
        //也就是接住递归返回的结果，这样就实现了删除的操作：
        //1->2->3，我们处理了2节点，让2直接return 1节点，然后用3节点直接接住2返回的结果，变成了1->3,此时2就被删掉了
        root.left = trimBST(root.left,low,high)
        root.right = trimBST(root.right,low,high)
    }
    return root
};
