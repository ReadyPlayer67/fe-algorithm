/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    //分治+递归思想，我们每次找到链表的中间位置节点作为root节点
    //并且将链表根据中间位置节点一分为二，对左右两部分链表递归处理即可
    if(!head){
        return null
    }
    //我这里偷懒了，将链表转换为了数组再取中间节点，消耗了额外的空间
    //可以利用快慢指针获取链表中间节点
    let list = []
    while(head){
        list.push(head.val)
        head = head.next
    }
    //递归处理方法，取中点作为root节点，递归生成左右子树
    function dfs(arr){
        if(arr.length < 1){
            return null
        }
        let mid = arr.length >> 1
        let node = new TreeNode(arr[mid])
        node.left = dfs(arr.slice(0,mid))
        node.right = dfs(arr.slice(mid+1))
        return node
    }
    return dfs(list)
};

//快慢指针确认链表中点
var sortedListToBST2 = function(head) {
  if(head === null){
    return null
  }
  let slow = head
  let fast = head
  let preSlow
  while(fast && fast.next){
    preSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  let root = new TreeNode(slow.val)
  if(preSlow){
    preSlow.next = null
    root.left = sortedListToBST(head)
  }
  root.right = sortedListToBST(slow.next)
  return root
};
