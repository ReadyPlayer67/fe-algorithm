/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  //我的解法，先用中序遍历转化为升序数组，再遍历数组，
  let arr = []
  function dfs(node){
    if(node){
      dfs(node.left)
      arr.push(node)
      dfs(node.right)
    }
  }
  dfs(root)
  let dummy = {
    right:null
  }
  let cur = dummy
  let prev = arr[arr.length-1]
  //遍历数组时对于第一个和最后一个节点要特殊处理
  for(let i=0;i<=arr.length;i++){
    let next
    //当cur是最后一个节点时，next节点为数组第一项，否则就是数组下一项
    if(i === arr.length){
      next = arr[0]
    }else{
      next = arr[i]
    }
    cur.right = next
    //当cur是dummy节点时，不需要给他left属性
    if(i > 0){
      cur.left = prev
      prev = cur
    }
    cur = cur.right
  }
  return dummy.right
};

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  //更优雅的方法，直接一次中序遍历即可
  if(root == null) return null
  //首先定义一个前驱节点prev，链表头节点head
  let prev = null,head = null
  //进行中序遍历
  dfs(root)
  function dfs(cur){
    //当二叉树被遍历完了，退出
    if(!cur) return
    dfs(cur.left)
    //如果当前prev===null，代表cur是二叉树第一个节点（最小的）
    if(prev === null){
      //此时直接将cur赋值给head，作为链表的入口
      head = cur
    }else{
      //否则就令prev.right = cur，连接上right指针
      prev.right = cur
    }
    //连接上left指针
    cur.left = prev
    //cur赋值给prev
    prev = cur
    dfs(cur.right)
  }
  //最后要将链表的首位节点连接在一起，已知head为头节点，递归遍历到最后prev就是最后一个节点
  head.left = prev
  prev.right = head
  return head
};
