/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //一层一层地遍历，直接使用广度优先搜素bfs
    if(!root) return []
    //初始化一个队列用来遍历，默认包含root节点
    let queue = [root]
    //结果数组
    let ret = []
    while(queue.length){
        //开始遍历queue，首先我们要缓存下来当前queue的length，代表当前层级的节点数
        let len = queue.length
        //初始化一个数组curLevel用来存放当前层级节点val
        let curLevel = []
        //注意这里要用一个循环，因为我们只需要遍历完len，即当前层节点
        //否则就遍历完了所有队列中的节点，无法区分当前层了
        while(len>0){
            //从队列头部弹出一个节点，把他push到curLevel中
            let node = queue.shift()
            curLevel.push(node.val)
            //再把他的左右子节点push到队列中
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            len--
        }
        //将当前层节点push到结果ret中
        ret.push(curLevel)
    }
    return ret
};
