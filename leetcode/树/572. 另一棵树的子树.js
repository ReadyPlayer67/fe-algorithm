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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//这题和100.相同的树类似，无非就是递归对比root的每一颗子树，判断子树是否和subRoot是相同的树
var isSubtree = function(root, subRoot) {
    //边界情况，如果root是null，不用判断了
    if(root === null){
        return false
    }
    //如果root的val和subRoot的val相等，说明root和subRoot有可能是相同的树
    if(root.val === subRoot.val){
        //用isSameTree判断两棵树是否是相同的树，如果是相同的树return true
        //注意这里不能写return isSameTree(root,subRoot)
        //因为如果不是相同的树，不能退出方法返回false，因为我们还需要继续递归对比root的子树
        if(isSameTree(root,subRoot)){
            return true
        }
    }
    //如果root和subRoot不是相同的树，继续用subRoot和root的左右子树进行对比，两边存在任意相同的树即可返回true，所以是||
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};
//引入isSameTree方法
function isSameTree(p,q){
    if(p === null && q === null){
        return true
    }
    if(p === null || q === null){
        return false
    }
    if(p.val !== q.val){
        return false
    }
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)

}
