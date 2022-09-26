/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    //这题和572.另一颗树的子树类似做法，但是区别在这题求的是子结构而不是子树
    //所以在对比两颗树时只要root2===null代表子结构被匹配完了，就可以return true
    //反之root1===null代表父树被匹配完了也没有匹配完子树，return false
    //过程还是先递归遍历A的每一颗子树，和B做比较，判断B是否和这颗子树有相同的结构
    if(A === null || B === null){
        return false
    }
    if(A.val === B.val){
        if(isSameStructure(A,B)){
            return true
        }
    }
    return isSubStructure(A.left,B) || isSubStructure(A.right,B)
};

function isSameStructure(root1,root2){
    if(root2 === null){
        return true
    }
    if(root1 === null){
        return false
    }
    if(root1.val !== root2.val){
        return false
    }
    return isSameStructure(root1.left,root2.left) && isSameStructure(root1.right,root2.right)
}
