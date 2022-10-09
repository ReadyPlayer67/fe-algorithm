/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  //层序遍历，遍历每一层时将当前节点的next指向队列中的第一个节点，即他的下一个右侧节点
  if(!root){
    return null
  }
  let queue = [root]
  while(queue.length){
    let len = queue.length
    while(len){
      const node = queue.shift()
      if(len > 1){
        node.next = queue[0]
      }else{//如果该节点是当前层最后一个节点，next为null
        node.next = null
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
  }
  return root
};
