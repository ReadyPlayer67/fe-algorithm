/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//这题我用的暴力递归法，但是需要用一个map缓存已经计算过的节点，不然会超时
let map = new Map()
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    //确定边界情况，如果root为null了，就返回0
    if(root === null){
        return 0
    }
    //另一个边界情况，如果是根节点，返回这个节点的val
    if(!root.left && !root.right){
        return root.val
    }
    //如果不是边界情况，先去map检索是否计算过这个节点子树能偷到的最大金额
    if(map.has(root)){
        return map.get(root)
    }
    //开始计算这个节点及子树能偷到的最大金额
    //第一种情况，偷该节点而不偷他的两个子节点
    //金额就等于该节点的val+左子节点的两个子节点金额最大值（如果有左子节点）+右子节点两个子节点金额最大值（如果有右节点）
    let val = root.val
    if(root.left){
        val += rob(root.left.left) + rob(root.left.right)
    }
    if(root.right){
        val += rob(root.right.left) + rob(root.right.right)
    }
    //第二种情况，不偷该节点而偷他的两个子节点
    //金额就等于两个子节点的金额最大值之和
    let val2 = rob(root.left) + rob(root.right)
    //最后比较这两种情况能偷到的金额，取最大值就是该节点的金额最大值
    //并且把他缓存到map里
    let ret =  Math.max(val,val2)
    map.set(root,ret)
    return ret
};
