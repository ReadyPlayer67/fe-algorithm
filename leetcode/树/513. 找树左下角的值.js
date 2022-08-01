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
var findBottomLeftValue = function(root) {
    //这题用层序遍历相对简单一点，遍历每一层时将第一个节点（也就是最左侧的节点）的值赋值给ret
    //遍历结束时ret的值就是最底层最左节点的值
    let ret = null
    let queue = [root]
    while(queue.length){
        let len = queue.length
        ret = queue[0].val
        while(len){
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            len--
        }
    }
    return ret
};
