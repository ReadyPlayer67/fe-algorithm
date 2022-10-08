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
var widthOfBinaryTree = function(root) {
  //用一个变量index标记节点的索引，root节点索引为1
  //一个节点索引为n，他的左子节点索引为2*n，右子节点索引为2*n+1
  //每一层我们用最后一个节点的index，减去第一个节点的index，就得到这一层的宽度
  let max = 0
  //队列中存放的不再是root本身，而是一个数组，第一项为root，第二项为索引
  let queue = [[root,1]]
  //层序遍历
  while(queue.length){
    let len = queue.length
    //计算当前层宽度并比较得到全局的最大宽度
    let width = queue[queue.length-1][1] - queue[0][1] + 1
    max = Math.max(width,max)
    while(len>0){
      let obj = queue.shift()
      const [node,index] = obj
      //构造左右子节点和索引，push到队列中
      //这里要注意索引可能会非常大，超出js number的范围，每次计算得到的索引值与最大安全整数取余即可
      node.left && queue.push([node.left,(index * 2) % Number.MAX_SAFE_INTEGER])
      node.right && queue.push([node.right,(index * 2 + 1) % Number.MAX_SAFE_INTEGER])
      len--
    }
  }
  return max
};
