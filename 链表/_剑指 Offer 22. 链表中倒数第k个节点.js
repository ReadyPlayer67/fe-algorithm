/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    //双指针，快指针先走k步，然后快慢指针一起走，直到快指针走到最后一个节点
    //当前慢指针就是要找打的倒数第k个节点
    let fast = head
    let slow = head
    while(k > 1){
        fast = fast.next
        k--
    }
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    return slow
};
