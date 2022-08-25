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
 */
var BSTIterator = function(root) {
    //利用BST中序遍历为升序数组的特性，先扁平化为数组，然后用指针进行遍历
    this.arr = []
    this.pos = -1
    this.dfs(root)
};

BSTIterator.prototype.dfs = function(node){
    if(node){
        this.dfs(node.left)
        this.arr.push(node.val)
        this.dfs(node.right)
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.pos++
    return this.arr[this.pos]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pos+1 < this.arr.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
