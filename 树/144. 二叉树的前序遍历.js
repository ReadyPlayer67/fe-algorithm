/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的前序遍历，先遍历node本身，再遍历node.left,最后遍历node.right
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归写法
var preorderTraversal = function(root) {
    let ret=[]
    function walk(node){
        if(!node) return
        ret.push(node.val)
        walk(node.left)
        walk(node.right)
    }
    walk(root)
    return ret
};

//迭代写法
var preorderTraversal2 = function(root) {
    if(!root) return []
    let ret=[]
    //初始化一个栈，用来存放待遍历的节点，一开始存放一个root节点
    let stack = [root]
    while(stack.length){
        //每次从栈中弹出一个元素处理
        let node = stack.pop()
        ret.push(node.val)
        //处理完节点本身以后先push节点的右子节点，再push左子节点
        //因为栈是先进后出的，之后就会先pop出来左子节点，这样就实现了一个迭代写法的先序遍历
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return ret
};
