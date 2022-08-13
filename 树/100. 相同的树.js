/** 判断两棵树是否是结构，并且节点具有相同的值
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    //先从root节点开始判断，如果都是null，两个节点就相同
    if(p === null && q === null){
        return true
    }
    //如果一个为null另一个不为null，就不同
    if((p === null && q !== null) || (p !== null && q === null)){
        return false
    }
    //如果两个节点的值不一样，就不同
    if(p.val !== q.val){
        return false
    }
    //如果两个节点都不为null且值都相同，继续对比他们的左侧子节点和右侧子节点
    //只有左侧子节点和右侧子节点都相同，树才是相同的
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};

//遍历写法
var isSameTree2 = function(p, q) {
    //处理边界情况
    if(p === null && q === null){
        return true
    }
    if(p === null || q === null){
        return false
    }
    //初始化两个队列，用来存放两颗树待比较的节点
    let q1 = [p]
    let q2 = [q]
    //如果两个队列都还有节点
    while(q1.length && q2.length){
        //因为我们push的时候也是有序的，所以我们依次对比队列中的每一个节点即可
        //用shift方法分别取出两个队列的第一个节点进行对比
        let node1 = q1.shift()
        let node2 = q2.shift()
        //如果值不相等return false
        if(node1.val !== node2.val){
            return false
        }
        //如果两个节点都有左节点，就分别push到队列中留着下次对比
        if(node1.left && node2.left){
            q1.push(node1.left)
            q2.push(node2.left)
        }else if(node1.left || node2.left){
            //如果一个有左节点一个没有，肯定是不同的树，return false
            return false
        }
        //同上，对右节点进行同样的操作
        if(node1.right && node2.right){
            q1.push(node1.right)
            q2.push(node2.right)
        }else if(node1.right || node2.right){
            return false
        }
    }
    //遍历完队列都一样就可以return true了
    return true
};
