/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**恢复一颗二叉搜索树
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//遇到BST，习惯性想到对它进行中序遍历，得到的应该是一个递增的数组
var recoverTree = function(root) {
    let arr = []
    //使用中序遍历，放node都push到数组中
    function dfs(node){
        if(node){
            dfs(node.left)
            arr.push(node)
            dfs(node.right)
        }
    }
    dfs(root)
    //接下来我们遍历得到的数组，按照题目的说明，有两个节点被错误的交换了，比如[153426]，2和5被交换了
    //那么我们遍历数组，检查每一项和他后面一项，一定会出现一次或两次前一项大于后一项的情况
    //一次代表相邻两个节点被错误交换了，两次代表非相邻节点被错误交换
    let first
    let second
    //初始化两个变量fist和second指向被交换的两个节点
    for(let i=0;i<arr.length-1;i++){
        if(arr[i].val>=arr[i+1].val){
            //!first代表第一次遇到前一项大于后一项的情况，此时arr[i]就是一个被错误交换的节点
            if(!first){
                first = arr[i]
            }
            //不论是否第一次遇到，arr[i+1]是另一个要找的节点
            second = arr[i+1]
        }
    }
    //交换这两个节点的val值即可
    let tmp = first.val
    first.val = second.val
    second.val = tmp
};
