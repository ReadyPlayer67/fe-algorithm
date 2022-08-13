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
 * @return {number}
 */
//递归解法
var minDepth = function(root) {
    //有以下几种情况，第一种根节点为null，高度为0
    if(root === null) {
        return 0
    }
    //没有左节点和右节点，说明是一个根节点，高度是1
    if(root.left === null && root.right === null){
        return 1
    }
    //如果没有左子节点，高度就等于右子节点的最小高度+1
    if(root.left === null){
        return minDepth(root.right)+1
    }
    //同理
    if(root.right === null){
        return minDepth(root.left)+1
    }
    //如果既有左子节点，又有右子节点，就是两边的最小值+1
    return Math.min(minDepth(root.left),minDepth(root.right))+1
};

//迭代解法，采用广度优先搜索，当搜索到根节点时直接退出，返回当前的深度
var minDepth2 = function(root) {
    //边界情况
    if(root === null){
        return 0
    }
    //用一个队列存放待处理的节点
    let queue = [root]
    //用一个变量记录当前深度
    let depth = 0
    //这里注意要用两层循环，一层循环是处理每一个节点的，由于我们这里要求深度
    //而深度不能处理每一个节点时都+1，而应当遍历一层节点加一次1
    while(true){
        //初始化一个变量size，表示树每一层节点的个数
        let size = queue.length
        //外层循环表示遍历树的一层，这时候depth+1
        depth++
        //内层循环表示遍历当前层的节点
        while(size){
            //从队列头部弹出一个节点，开始处理
            let node = queue.shift()
            //如果该节点是根节点，直接返回当前深度depth
            if(node.left === null && node.right === null){
                return depth
            }
            //否则就往队列里推入左子节点和右子节点
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            //处理完一个节点size-1
            size--
            //这里注意我们内层循环的控制条件不能写queue.length，因为我们在最后不断地推入左右子节点
            //queue.length是在不断变化的，而我们要保证循环的次数一定要等于改层节点的数量
            //所以要在循环开始前取queue.length为循环次数，不会因为push新节点导致循环次数增加
        }
    }
};
