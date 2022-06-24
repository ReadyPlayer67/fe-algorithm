/** 判断两棵树是否是结构，并且节点具有相同的值
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    //先从root节点开始判断，如果都是null，两个节点就相同
    if(p === null && q === null){
        return true
    }
    //如果一个为null另一个不为null，就不同
    if((p === null && q !== null) || (p !== null && q === null)){
        return false
    }
    //如果两个节点的值不一样，就不同
    if(p.val !== q.val){
        return false
    }
    //如果两个节点都不为null且值都相同，继续对比他们的左侧子节点和右侧子节点
    //只有左侧子节点和右侧子节点都相同，树才是相同的
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};
