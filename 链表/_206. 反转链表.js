/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 反转一个链表，返回反转后链表的头部节点
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    if(!head || !head.next) return head
    //初始化一个prev保存当前节点的前一个节点，初始值是head的prev所以是null
    let prev = null
    //cur表示当前遍历到的节点
    let cur = head
    while(cur){
        //迭代链表，比如1->2->3 当前cur是1,把1的next放到一个临时变量next里
        let next = cur.next
        //把1的next指向prev，当前就是null
        cur.next = prev
        //把1赋值给prev，下一次迭代用
        prev = cur
        //把next，也就是2，指向cur，往后迭代
        cur = next
    }
    //最终返回prev就是翻转后的head节点
    return prev
};
