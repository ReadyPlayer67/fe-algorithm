/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 返回二叉树的所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    //打印到所有叶子节点的路径，使用先序遍历
    let ret = []
    function dfs(node,str){
        if(node === null){
            return
        }
        //如果是叶子节点，说明路径已经找完了，push到数组里
        if(node.left === null && node.right === null){
            str += node.val
            ret.push(str)
        }else{
            //否则拼上节点的val，继续迭代左右子节点
            str += `${node.val}->`
            dfs(node.left,str)
            dfs(node.right,str)
        }
    }
    dfs(root,'')
    return ret
};
