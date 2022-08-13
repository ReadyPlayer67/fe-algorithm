/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 实现二叉树的中序遍历，先遍历left，再遍历node本身，最后遍历right
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root === null) return []
    let ret = []
    walk(root,ret)
    return ret
};

function walk(node,ret){
    if(node){
        walk(node.left,ret)
        ret.push(node.val)
        walk(node.right,ret)
    }
}

//迭代写法，我们需要自己模拟递归的过程
//递归的调用过程是不断往左边走，当左边走不下去了，就打印节点，并转向右边，然后右边继续这个过程。
var inorderTraversal = function(root) {
    let ret = []
    let stack = []
    //root有值代表root = root.left或root = node.right以后root依然有值，说明不是叶子节点，继续往下遍历，入栈
    //root为null说明当前到了叶子节点，不需要再往下找了，该从栈弹出元素进行处理，处理完再处理该元素右侧节点
    //如果root为null并且栈中无元素，说明树已经遍历完了
    while(root || stack.length){
        //不断往左子树方向走，每走一次就将当前节点保存到栈中
        //这是模拟递归的调用
        if(root){
            stack.push(root)
            root = root.left
        }else{
            //当前节点为空，说明左边走到头了，从栈中弹出节点并保存
            //然后转向右边节点，继续上面整个过程（结合上面的walk方法一起理解）
            let node = stack.pop()
            ret.push(node.val)
            root = node.right
        }
    }
    return ret
};
