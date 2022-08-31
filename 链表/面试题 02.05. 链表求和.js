/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //类似415.字符串相加，只不过换成了链表的形式
    let plusOne = 0
    let dummy = {
        next:null
    }
    let cur = dummy
    //从头到位遍历两个链表，俩俩相加，超过10就进1，把相加的结果存到结果链表中
    while(l1 || l2 || plusOne){
        let d1 = l1 ? l1.val : 0
        let d2 = l2 ? l2.val : 0
        let ret = d1+d2+plusOne
        plusOne = Math.floor(ret/10)
        ret %= 10
        cur.next = {
            val:ret,
            next:null
        }
        cur = cur.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummy.next
};
