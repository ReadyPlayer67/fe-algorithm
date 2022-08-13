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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    //这题比112加了要记录所有满足条件的路径，所以我们要遍历每一条路径
    let ret = []
    //递归方法，参数分别是当前节点，当前路径节点val总和，当前path
    function dfs(node,sum,path){
        //如果当前节点为null，直接return
        if(!node){
            return
        }
        //更新sum和path
        sum += node.val
        path.push(node.val)
        //如果当前节点是叶子节点并且sum===targetSum，说明找到了一个解，push到ret中并且return
        if(!node.left && !node.right && sum === targetSum){
            ret.push([...path])
            return
        }
        //如果当前节点是叶子节点，没必要再递归了，直接return
        if(!node.left && !node.right){
            return
        }
        //否则就继续递归检查左子节点和右子节点，注意这里path要进行拷贝，否则传进去的就是path本身,之后还需要用Pop进行回溯
        dfs(node.left,sum,[...path])
        dfs(node.right,sum,[...path])
    }
    dfs(root,0,[])
    return ret
};
