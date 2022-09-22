/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    //还是老方法，层序遍历
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
        //只不过这里我们不是返回整个curLevel数组了，只返回数组最后一个元素，也就是最右侧的节点即可
        ret.push(curLevel.pop())
    }
    return ret
};
