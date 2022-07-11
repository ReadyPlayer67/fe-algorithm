/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 在一颗二叉搜索树中找出两个节点的最近公共祖先节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // if((root.val > p.val && root.val < q.val)||(root.val < p.val && root.val > q.val)){
    //     return root
    // }
    // if(root.val === p.val || root.val === q.val){
    //     return root
    // }
    //这题类似236.二叉树的最近公共祖先，不过这题较简单，因为是BST
    //对于root,p,q的val一共有三种情况
    //1.root<q<p说明p和q在root的右子树，直接去右子树上找
    //2.root>p>q说明p和q在root的左子树，直接去左子树上找
    //3.p,q不在同一子树，只能是p，q分别在一左一右，或者，p，q其中一个是根节点，都返回root
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left,p,q)
    }
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right,p,q)
    }
    return root
};
