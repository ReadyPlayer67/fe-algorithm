/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 在每个树行中找最大值
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    //典型的层序遍历，遍历树的每一行，把这一行的最大值存下来
    let ret = []
    if(!root) return ret
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let max = -Infinity
        while(len){
            let node = queue.shift()
            max = Math.max(max,node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            len--
        }
        ret.push(max)
    }
    return ret
};
