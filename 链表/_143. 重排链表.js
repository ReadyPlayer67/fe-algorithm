/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //本题分三步：
    //1.利用快慢指针法找到链表的中点，且这个中点会使得链表前半部分大于等于后半部分链表长度
    //2.反转后半部分链表
    //3.合并前半部分链表和反转后的后半部分链表
    let slow = head
    let fast = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    //准备反转后半部分链表
    let pre = null
    let cur = slow.next
    //切断前后两个链表中间的指针，否则链表就有环了
    slow.next = null
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    //令pos指向前半部分链表的头结点，此时pre为后半部分链表的头结点
    let pos = head
    while(pre){
        //遍历后半部分链表，将他们插入到前半部分链表的中间
        let next = pos.next
        let preNext = pre.next
        pos.next = pre
        pre.next = next
        pos = next
        pre = preNext
    }
    return head
};
