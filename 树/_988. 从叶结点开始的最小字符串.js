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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    //利用前序遍历拼出每一条根节点到叶子节点路径组成的字符串，相互比较，挑选出字典序最小的那个
    let ret = ''
    function dfs(node,path){
        if(!node){
            return
        }
        //根据node.val算出当前对应的字母
        const letter = String.fromCharCode('a'.charCodeAt()+node.val)
        path.push(letter)
        //如果当前节点是叶子节点，计算出当前路径组成的字符串
        //注意题目要求的是从叶子节点到根节点组成的字符串，所以path这里要反转一下
        if(!node.left && !node.right){
            const str = path.slice().reverse().join('')
            //如果是第一次比较，直接赋值给ret
            if (ret === '') {
                ret = str
            } else if (str.localeCompare(ret) < 0) {
                //否则比较字典序，小于ret就更新ret
                ret = str
            }
        }
        dfs(node.left,path)
        dfs(node.right,path)
        //要记得回溯
        path.pop()
    }
    dfs(root,[])
    return ret
};
