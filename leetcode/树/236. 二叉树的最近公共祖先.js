/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//存储父元素指针解法
var lowestCommonAncestor = function(root, p, q) {
    let path = {}
    function dfs(node,parentNode){
        if(node){
            path[node.val] = parentNode
            dfs(node.left,node)
            dfs(node.right,node)
        }
    }
    dfs(root,null)
    let pathP = new Map()
    while(p){
        pathP.set(p.val,p)
        p = path[p.val]
    }
    while(q){
        if(pathP.has(q.val)){
            return pathP.get(q.val)
        }
        q = path[q.val]
    }
    return null
};
