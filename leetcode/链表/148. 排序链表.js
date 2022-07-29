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
var sortList = function(head) {
    //排序链表，先转换成数组，对数组进行排序，再转换成链表
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    arr.sort((a,b)=>a-b)
    let dummy = {
        val:0,
        next:null
    }
    let cur = dummy
    for(let val of arr){
        cur.next = {
            val,
            next:null
        }
        cur = cur.next
    }
    return dummy.next
};
