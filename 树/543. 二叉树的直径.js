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
 * @return {number}
 */
//我的暴力解法：对于每个子树，他的直径一定等于左子树的深度+右子树的深度
//我们递归遍历每个节点，求他的直径，最后比较最大值即可
var diameterOfBinaryTree = function(root) {
    let maxLen = 0
    function findMaxDepth(node){
        if(!node){
            return 0
        }
        return Math.max(findMaxDepth(node.left),findMaxDepth(node.right)) + 1
    }
    function findMaxLen(node){
        let len = findMaxDepth(node.left) + findMaxDepth(node.right)
        maxLen = Math.max(maxLen,len)
        node.left && findMaxLen(node.left)
        node.right && findMaxLen(node.right)
    }
    findMaxLen(root)
    return maxLen
};

//暴力法其实多递归了一次
function diameterOfBinaryTree2(root){
    //我们采用后序遍历，因为我们无法得知一个叶子节点的高度
    //必须先遍历到根节点，再通过递归一步一步推导出叶子节点的高度
    let len = 0
    function dfs(node){
        //根节点的子节点，高度是0
        if(node === null){
            return 0
        }
        //递归调用dfs，获取当前节点左子树和右子树的高度
        let left = dfs(node.left)
        let right = dfs(node.right)
        //两个子树高度加起来就是该子树的直径，和len比，取最大值
        len = Math.max(len,left+right)
        //递归方法返回该节点两个子树的高度+1，即该节点的高度
        return Math.max(left,right) + 1
    }
    dfs(root)
    return len
}
