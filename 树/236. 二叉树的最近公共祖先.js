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
    //先利用先序遍历，找出每个节点指向的父节点，并存在一个hash表里
    //key是节点的val，value是父节点
    let path = {}
    function dfs(node,parentNode){
        if(node){
            path[node.val] = parentNode
            dfs(node.left,node)
            dfs(node.right,node)
        }
    }
    dfs(root,null)
    //接下来从p开始遍历，找到p到树顶点的路径，存在pathP里
    let pathP = new Map()
    while(p){
        pathP.set(p.val,p)
        p = path[p.val]
    }
    //同样对q向顶点方向遍历，第一次找到存在于pathP中的节点，就是p和q的最近公共祖先节点
    while(q){
        if(pathP.has(q.val)){
            return pathP.get(q.val)
        }
        q = path[q.val]
    }
    return null
};

//递归解法
var lowestCommonAncestor = function(root, p, q) {
    //递归的终止条件有两个，一个是节点为null
    if(root === null){
        return null
    }
    //还有一个是节点是p或者q，如果是p就返回p，q就返回q
    if(root === p || root === q){
        return root
    }
    //如果既不是p也不是q，也不为null就继续往下递归遍历他的左右子节点
    //并且将左右子节点的递归结果存下来
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    //1.如果left和right都不为null，说明p和q一个在left一个在right，left和right的父节点root即为我们要找到的节点
    if(left && right){
        return root
    }
    //2.如果left和right都为null，说明p和q不在root的子树里，继续返回null
    //3.如果left和right中一个为null一个不为null，为null的那个说明p和q都不在这个节点的子树，忽略他，直接把不为null的返回出去
    //这三种情况我们都需要把节点返回出去，因为我们递归最终还是会回到根节点root
    //在那里我们会根据子树返回的值来做判断，最终返回我们要找的节点
    //可以参考下LeetCode这个题解的PPT:https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
    return left ? left : right
};
