/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**求一个二叉搜索树中第k小的元素
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//递归写法，用中序遍历将BST节点的值存到一个有序数组中，再获取数组k-1项
//递归写法比较简单，但是也有缺点，他会遍历整颗树，但其实我们找到第k小的元素时即可退出遍历
var kthSmallest = function(root, k) {
    let arr = []
    function dfs(node){
        if(!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return arr[k-1]
};

//迭代写法，在找到第k小的元素时可以直接退出遍历，节约时间
function kthSmallest(root,k){
    //类似94.二叉树的中序遍历，使用迭代方法遍历树
    let count = 0
    let stack = []
    while(root || stack.length){
        if(root){
            stack.push(root)
            root = root.left
        }else{
            let node = stack.pop()
            //维护一个变量count，每次处理节点时count++
            count++
            //当count===k，代表找到了第k小的源，直接return
            if(count === k){
                return node.val
            }
            root = node.right
        }
    }
}
