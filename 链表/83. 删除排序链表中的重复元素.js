/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  //遍历链表，如果遇到相同值的节点cur.val===cur.next.val
  //就删除cur.next，删除方式为cur.next = cur.next.next
  if(!head){
    return null
  }
  let cur = head
  while(cur.next){
    if(cur.val === cur.next.val){
      const x = cur.next.val
      while(cur.next && cur.next.val === x){
        cur.next = cur.next.next
      }

    }else{
      cur = cur.next
    }
  }
  return head
};
