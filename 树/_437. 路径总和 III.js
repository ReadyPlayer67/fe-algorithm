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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    //两次递归暴力解法，遍历树上的每一个节点，以该节点为起点，求出路径和等于targetSum的路径数
    //再递归检测他的左右子节点，最后把所有节点复合条件的路径数累加起来
    if(!root){
        return 0
    }
    let ret = 0
    //先求root节点的路径数
    ret += rootSum(root,targetSum)
    //递归求其他节点的路径数，最后累加起来
    ret += pathSum(root.left,targetSum)
    ret += pathSum(root.right,targetSum)
    return ret
};
//以node作为起点，求和等于targetSum的路径数方法
function rootSum(node,targetSum){
    //如果节点为null，返回0
    if(!node){
        return 0
    }
    let ret = 0
    //如果当前node.val等于剩下的targetSum，说明找到了一条合法路径
    if(node.val === targetSum){
        ret++
    }
    //继续往左子树走或右子树走能否找到合法路径，累加上这些结果
    ret += rootSum(node.left,targetSum-node.val)
    ret += rootSum(node.right,targetSum-node.val)
    return ret
}

//前缀和解法，时间复杂度O(n)
var pathSum2 = function(root, targetSum) {
    //在这里前缀和的定义为：一个节点到根节点之间的路径和，两个节点之间的路径和就等于两个节点前缀和的差值
    //所以我们遍历整棵树，求到每个节点的前缀和，并查询该节点的祖先节点中满足条件的节点个数，累加到结果上
    //初始化前缀和map，key是前缀和的值，value是前缀和等于key的节点数量
    //前缀和map都需要一个默认值0:1，表示前缀和为0的个数为1个，这样才能方便计算
    let prefixMap = {
        0:1
    }
    //递归方法，返回该子树中路径和等于targetSum的数量
    //node是当前子树的根节点，sum是当前node的父节点的前缀和
    function dfs(node,sum){
        //node为null，不能有有解，返回0
        if(!node){
            return 0
        }
        let ret = 0
        //sum加上当前节点的val，得到当前节点的前缀和
        sum += node.val
        //我们去prefixMap中检查，是否存在前缀和为sum - targetSum的祖先节点，有的话结果就累加到结果上
        let diff = sum - targetSum
        if(diff in prefixMap){
            ret += prefixMap[diff]
        }
        //将当前前缀和保存到prefixMap中
        if(sum in prefixMap){
            prefixMap[sum]++
        }else{
            prefixMap[sum]=1
        }
        //递归对左右子节点求解并累加到结果上
        let left = dfs(node.left,sum)
        let right = dfs(node.right,sum)
        ret = ret + left + right
        //这一步很重要，因为我们讨论两个节点前缀和差值的时候有一个前提，一个节点必须是另一个节点的祖先节点
        //所以我们在遍历完一个节点的所有子节点后，将他从map中删去，避免别的节点计算时累加上该节点，造成错误计算
        prefixMap[sum]--
        return ret
    }
    return dfs(root,0)
};
