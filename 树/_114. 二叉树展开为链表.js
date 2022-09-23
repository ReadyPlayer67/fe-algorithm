/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 将二叉树展开为一个类似链表的结构，每个节点left为null，right指向下一个节点
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    //先用先序遍历，将节点push到一个数组中
    let list = []
    function preTravese(node){
        if(node !== null){
            list.push(node)
            preTravese(node.left)
            preTravese(node.right)
        }
    }
    preTravese(root)
    //再遍历这个数组，修改每一个节点的left为null，right指向下一个节点
    for(let i=1;i<list.length;i++){
        let prev = list[i-1]
        let cur = list[i]
        prev.left=null
        prev.right = cur
    }
    //这题的要求是修改树，所以不需要返回任何值
};
