/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 合并两课二叉树
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    return dfs(root1,root2)
};

function dfs(node1,node2){
    //我的解法，写的比较繁琐
    // let node
    // if(node1 === null && node2 === null){
    //     node = null
    // }else if(node1 === null){
    //     node = new TreeNode(node2.val,null,null)
    //     node.left = dfs(null,node2.left)
    //     node.right = dfs(null,node2.right)
    // } else if(node2 === null){
    //     node = new TreeNode(node1.val,null,null)
    //     node.left = dfs(node1.left,null)
    //     node.right = dfs(node1.right,null)
    // }else{
    //     node = new TreeNode(node1.val+node2.val,null,null)
    //     node.left = dfs(node1.left,node2.left)
    //     node.right = dfs(node1.right,node2.right)
    // }
    // return node
    //简单写法，核心思想就是递归遍历两颗树同一位置的节点
    if(!node1){
        return node2
    }
    //如果一个节点不存在，那么也不用管他的子树了，因为肯定也是不存在的
    //直接返回另一个节点
    if(!node2){
        return node1
    }
    //如果两个节点都存在，我们以node1为结果节点，先计算出val
    node1.val += node2.val
    //递归地处理左子节点和右子节点
    node1.left = dfs(node1.left,node2.left)
    node1.right = dfs(node1.right,node2.right)
    //最后要返回处理好的节点
    return node1
}
