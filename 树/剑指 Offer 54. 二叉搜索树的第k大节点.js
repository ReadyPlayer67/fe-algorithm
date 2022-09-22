/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    //逆序进行中序遍历，先处理node.right，再处理node本身，最后处理node.left
    //如果找到了，要提前退出
    let count = 0
    let find = false
    let ret = 0
    function dfs(node){
        if(node && !find){
            dfs(node.right)
            count++
            if(count === k){
                find = true
                ret = node.val
                return
            }
            dfs(node.left)
        }
    }
    dfs(root)
    return ret
};
