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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    //我的解法，利用队列和栈进行层序遍历
    //判断边界情况
    if(!root){
        return []
    }
    let ret = []
    let queue = [root]
    //记录当前层级，从1开始
    let level = 1
    //开始层序遍历
    while(queue.length){
        let len = queue.length
        let arr = []
        let stack = []
        for(let i=0;i<len;i++){
            let node = queue.shift()
            arr.push(node.val)
            //如果当前层级是奇数，要从左往右遍历，从左往右将子节点推入栈中
            if(level % 2 === 1){
                node.left && stack.push(node.left)
                node.right && stack.push(node.right)
            }else{
                //如果当前层级是偶数，要从右往左遍历，从右往左将子节点推入栈中
                node.right && stack.push(node.right)
                node.left && stack.push(node.left)
            }
        }
        //最后将栈中的节点依次弹出，push到队列中，这样就保证了下一层的遍历是正确的
        while(stack.length){
            queue.push(stack.pop())
        }
        ret.push(arr)
        level++
    }
    return ret
};
