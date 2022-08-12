/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    //用递归的方法实现
    return dfs(postorder)
};
function dfs(arr){
    //终止条件：当节点数小于等于1时，不需要判断，return true
    if(arr.length <= 1){
        return true
    }
    //后序遍历数组最后一个节点一定是root节点
    let root = arr.pop()
    let index = 0
    //去当前数组中找到第一个比root大的节点位置，左边就是root的左子树，右边就是root的右子树
    while(arr[index]<root){
        index++
    }
    //如果是二叉搜索树，那么右子树的所有节点的val都应该大于root的val，验证这一点
    //初始化另一个变量tmp用来遍历，index要留着用来分割数组
    let tmp = index
    while(tmp<arr.length){
        //如果右子树中有元素小于root，直接返回false
        if(arr[tmp]<root){
            return false
        }
        tmp++
    }
    //递归对左子树和右子树执行判断
    return dfs(arr.slice(0,index)) && dfs(arr.slice(index))
}
