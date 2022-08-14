/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    //这题是297.二叉树序列化与反序列化的特殊情况，利用BST的特性，可以不用层序遍历来做
    //联想到105题和106题，我们可以用BST的前序遍历+中序遍历或后序遍历+中序遍历还原BST
    //因此我们在反序列化时得到BST的后序遍历数组字符串（中序遍历可由后序遍历数组排序而来）
    let ret = []
    function dfs(node){
        if(node){
            dfs(node.left)
            dfs(node.right)
            ret.push(node.val)
        }
    }
    dfs(root)
    return ret.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    //二叉树为空的边界情况
    if(!data.length){
        return null
    }
    //得到后序遍历数组
    let postOrder = data.split(',')
    let inOrder = [...postOrder]
    //将后序遍历数组排序得到中序遍历数组
    inOrder.sort((a,b)=>a-b)
    //用126题的方法递归得到二叉树：弹出postOrder的最后一个元素作为根节点
    //查找根节点在inOrder中的为分割线得到左子树和右子树，根据分割点的index再分割postOrder同样得到左子树和右子树
    //对左子树和右子树递归调用dfs
    function dfs(inOrder,postOrder){
        if(!inOrder.length){
            return null
        }
        let rootVal = postOrder.pop()
        let root = new TreeNode(rootVal)
        let index = inOrder.indexOf(rootVal)
        root.left = dfs(inOrder.slice(0,index),postOrder.slice(0,index))
        root.right = dfs(inOrder.slice(index+1),postOrder.slice(index))
        return root
    }
    return dfs(inOrder,postOrder)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
