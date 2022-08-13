/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 求一颗完全二叉树的总结点数
 * @param {TreeNode} root
 * @return {number}
 */
//直接深度优先遍历，管他那么多
var countNodes = function(root) {
    let count = 0
    if(!root) return count
    function dfs(node){
        if(node){
            count++
        }
        node.left && dfs(node.left)
        node.right && dfs(node.right)
    }
    dfs(root)
    return count
};

//利用完全二叉树的特点，完全二叉树只有两种情况：
//1.是一颗满二叉树，此时节点数就等于2**height-1
//2.不是一颗满二叉树，最后一层的叶子结点没有满，此时有可能是左子树不是满二叉树，也有可能是右子树不是满二叉树
var countNodes2 = function(root) {
    //递归终止条件，如果此时节点为null，返回0
    if(root === null){
        return 0
    }
    let left = root.left
    let right = root.right
    let leftHeight = 0
    let rightHeight = 0
    //求出当前节点左子树和右子树的深度
    while(left){
        leftHeight++
        left = left.left
    }
    while(right){
        rightHeight++
        right = right.right
    }
    //如果相等说明root是一颗满二叉树，直接用公式求出节点数
    if(leftHeight===rightHeight){
        return 2 ** (leftHeight+1) - 1
    }
    //否则就递归求左子树和右子树的总节点数+1，这两颗子树中肯定有一颗是满二叉树，可以直接用公式算出节点数
    return countNodes(root.left) + countNodes(root.right) + 1
};
