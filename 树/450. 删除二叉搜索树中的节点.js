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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    //从二叉搜索树中删除节点较复杂，要分很多种情况
    //root为空，代表未搜索到val等于key的节点，返回null
    if(root === null){
        return null
    }
    //如果root.val>key，表示值为key的节点可能存在于root 的左子树中，需要递归地在root.left调用deleteNode，并返回root
    if(root.val > key){
        root.left = deleteNode(root.left,key)
        return root
    }else if(root.val < key){
        //如果root.val<key，表示值为key的节点可能存在于root的右子树中，需要递归地在root.right调用deleteNode，并返回root
        root.right = deleteNode(root.right,key)
        return root
    }else{
        //如果root.val===key，找到了该节点，需要删除该节点，又分以下几种情况
        //1.root是叶子节点，直接删除该节点，返回null
        if(!root.left && !root.right){
            return null
        }
        //如果root只有左子树/右子树，就将左子树/右子树作为新的子树，返回左子树/右子树
        if(root.left && !root.right){
            return root.left
        }
        if(!root.left && root.right){
            return root.right
        }
        //如果root既有左子树又有右子树
        const rightNode = root.right
        //需要获取root的后继节点（比root.val大的最小节点，即root右子树的最小节点--root右子树的最左叶子节点）
        let minNode = getMinNode(rightNode)
        //将minNode.val赋值给root
        root.val = minNode.val
        //调用deleteNode方法删除minNode
        root.right = deleteNode(root.right,minNode.val)
        return root
    }
};
//写一个方法获取节点node的最左叶子节点
function getMinNode(node){
    while(node.left){
        node = node.left
    }
    return node
}
