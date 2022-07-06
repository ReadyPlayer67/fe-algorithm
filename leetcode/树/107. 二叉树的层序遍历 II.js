/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 返回二叉树自底向上的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
//这题和102.二叉树的层序遍历很类似，都是使用广度优先遍历
var levelOrderBottom = function(root) {
    let ret = []
    if(!root) return ret
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let curLevel = []
        while(len){
            let node = queue.shift()
            curLevel.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            len--
        }
        //唯一的区别在这里，102是从顶向下遍历，所以每一层都是push到结果里的
        //而这题是定底向上，所以我们直接用unshift，添加到数组开头
        ret.unshift(curLevel)
    }
    return ret
};
