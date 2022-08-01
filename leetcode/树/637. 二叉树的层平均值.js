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
var averageOfLevels = function(root) {
    //这题利用层序遍历来做
    let ret = []
    let queue = [root]
    while(queue.length){
        let len = queue.length
        let sum = 0
        //遍历每一层时求每一层节点val的和
        for(let i=0;i<len;i++){
            let node = queue.shift()
            sum+=node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        //求每一层的平均值并push到ret中
        ret.push(sum/len)
    }
    return ret
};
