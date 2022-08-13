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
 * @return {number[]}
 */
var findMode = function(root) {
    //如果树是一颗普通二叉树，我们就需要遍历所有的节点，用一个哈希表维护每个val出现的次数，最后进行排序
    //本题中root是一颗二叉搜索树，我们要利用他的特效：中序遍历是一颗有序数组，这样相同的元素一定是在一起出现的
    //我们这里实现只遍历一次树就找到所有众数
    //count表示当前val出现的次数，初始值代表第一个元素出现次数为1
    let count = 1
    //maxCount表示当前出现次数最多的数字出现的次数，初始值代表第一个元素统计时的最大count，为1
    let maxCount = 1
    //lastVal表示上一个节点的val
    let lastVal = null
    //存放众数的数组
    let ret = []
    //进行中序遍历
    function dfs(node){
        node.left && dfs(node.left)
        //如果不是第一个元素
        if(lastVal !== null){
            //如果当前节点的val和lastVal相等，count++
            if(node.val === lastVal){
                count++
            }else{
                //否则重置count
                count = 1
            }
        }
        //如果当前count大于maxCount
        if(count > maxCount){
            //更新maxCount
            maxCount = count
            //同时要清空ret数组，因为ret是根据之前的maxCount统计的
            ret = [node.val]
        }else if(count === maxCount){
            //如果count等于maxCount,就向ret中push当前val
            ret.push(node.val)
        }
        //更新lastVal
        lastVal = node.val
        node.right && dfs(node.right)
    }
    dfs(root)
    return ret
};
