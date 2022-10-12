/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //核心思想，将链表最后一个节点连上头结点形成环，再从指定位置断开即可
    if (k === 0 || !head || !head.next) {
        return head;
    }
    //先遍历一遍链表，计算出链表长度n，旋转k次的效果和k%n效果是一样的
    //因为每n次移动都会让链表变为原状，因此我们要断开第n - k % n个节点后面的指针即可
    //即新链表最后一个节点为原来链表的第n - k % n个节点
    let cur = head
    let n = 1
    while(cur.next){
        cur = cur.next
        n++
    }
    let add = n - k % n
    cur.next = head
    while(add > 0){
        cur = cur.next
        add--
    }
    //cur即最后一个节点，cur.next为新链表的头结点
    let ret = cur.next
    //断开cur的next指针并返回新头结点
    cur.next = null
    return ret
};
