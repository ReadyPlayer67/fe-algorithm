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
var maxPathSum = function(root) {
    //初始化一个全局最大路径总和，初始值为负无穷大，保证任何结果都比他大
    let maxSum = -Infinity
    //从root开始递归整颗树，这个递归函数返回的是一颗树能提供给他的父节点的最大收益
    function dfs(node){
        //当遍历到null节点，这个节点提供不了收益，所以返回0
        if(!node){
            return 0
        }
        //得到node的左右子树能够提供的最大收益
        const left = dfs(node.left)
        const right = dfs(node.right)
        //我们求到当前子树内部的路径的最大路径总和，这个路径必须经过node（否则就是node子树的内部路径了）
        //这个路径总和=左子树提供的最大收益+node.val+右子树提供的最大收益
        const innerMaxSum = node.val + left + right
        //也可以这么写，考虑不走入左右节点，这样最后就不用判断outPutSum < 0 ? 0 : outPutSum了
        // const innerMaxSum = Math.max(0,left,right,left+right)+node.val
        //和全局最大路径总和比较，不断更新maxSum
        maxSum = Math.max(innerMaxSum,maxSum)
        //最后我们需要把当前这棵树能提供的最大收益返回出去，给他的父节点使用
        //由于题目规定每个节点只能经过一次，所以我们返回出去的路径只能是左子树或者右子树+node，不能走入左子树又掉头进右子树
        //从父节点延伸下来的路径有三种选择：
        //1.停留在node，此时收益就是node.val
        //2.走左子树，此时收益是left+node.val
        //3.走右子树，此时收益是right+node.val
        //我们对这三种情况比较取最大值，就是这棵树能够返回给他父节点的最大收益了
        const outPutSum = Math.max(0,left,right) + node.val
        //这里有一个注意点，如果返回的收益是负数，说明走入这颗子树收益会下降，那么他应该告诉他的父节点，每必要走入了，直接和对待null节点一样返回0
        //因为我们上面innerMaxSum = node.val + left + right，设定的是node必走入他的两个子节点
        return outPutSum < 0 ? 0 : outPutSum
    }
    dfs(root)
    return maxSum
};
