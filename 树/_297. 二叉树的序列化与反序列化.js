/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    //利用二叉树的层序遍历，构造出数组
    let queue = [root]
    let arr = []
    if(root){
        while(queue.length){
            let len = queue.length
            while(len){
                let node = queue.shift()
                //如果节点不存在，要push一个null占位
                if(!node){
                    arr.push(null)
                }else{
                    //否则push节点的值，并且将他的左右子节点入队
                    arr.push(node.val)
                    queue.push(node.left)
                    queue.push(node.right)
                }
                len--
            }
        }
        //去除掉最右边叶子节点的子节点（一堆null）
        while(arr[arr.length-1] === null){
            arr.pop()
        }
    }
    return JSON.stringify(arr)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    //反序列化同样是利用层序遍历
    let arr = JSON.parse(data)
    if(arr.length === 0){
        return null
    }
    //首先初始化root节点
    const root = new TreeNode(arr.shift())
    //维护一个待处理节点队列
    let queue = [root]
    while(queue.length){
        let node = queue.shift()
        //如果当前节点不是null，就进行处理，否则直接跳过处理下一个
        if(node !== null){
            //node的左右子节点就是反序列化数组的第一个，第二个元素
            let leftVal = arr.shift()
            let rightVal = arr.shift()
            //这里要同时判断不是null和undefined，因为数组如果越界获取到的就是undefined，如果不判断会死循环
            if(leftVal !== null && leftVal !== undefined){
                //构造左子节点并push到队列中，等待下一层处理
                node.left = new TreeNode(leftVal)
                queue.push(node.left)
            }else{
                //否则要push一个null到队列中占位
                queue.push(null)
            }
            //右节点同理
            if(rightVal !== null && rightVal !== undefined){
                node.right = new TreeNode(rightVal)
                queue.push(node.right)
            }else{
                queue.push(null)
            }
        }
    }
    return root
};

//递归写法
var serialize2 = function(root) {
    //如果遇到空节点，返回一个字符串'X'
    if(root === null){
        return 'X'
    }
    //递归处理左右子树
    const left = serialize(root.left)
    const right = serialize(root.right)
    //把根节点的值放在前面，左右子树的字符串放在后面，拼接字符串
    return `${root.val},${left},${right}`
};

var deserialize2 = function(data) {
    //将字符串转换为数组
    const list = data.split(',')
    function dfs(list){
        //根节点就是当前数组第一个元素，把他弹出
        let rootVal = list.shift()
        //如果值是X，就说明是空节点，return null
        if(rootVal === 'X'){
            return null
        }
        //构造一个root节点
        let root = new TreeNode(rootVal)
        //递归处理他的左右子树
        root.left = dfs(list)
        root.right = dfs(list)
        return root
    }
    return dfs(list)
};
