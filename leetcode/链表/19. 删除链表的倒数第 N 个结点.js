/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //简单粗暴的方法，先遍历链表，计算出链表的长度
    let cur = head
    let length = 0
    while(cur){
        length++
        cur = cur.next
    }
    //再遍历链表，通过长度计算倒数第n个节点的位置，进行删除
    //设置一个哨兵节点，防止删除的就是head的情况出现
    let dummy ={
        next:head
    }
    cur = head
    let index = 0
    let prev = dummy
    while(cur){
        if(n === length-index){
            prev.next = cur.next
            break
        }
        index++
        prev = cur
        cur = cur.next
    }
    return dummy.next
};

//利用快慢指针
function removeNthFromEnd2(head,n){
    //先定义一个哨兵节点，防止head被删除的情况导致异常
    let dummy = {
        next:head
    }
    //slow和fast节点初始位置都在哨兵节点
    let slow = dummy
    let fast = dummy
    //先让快节点前进n步，然后停止
    while(n>0){
        fast = fast.next
        n--
    }
    //再让快慢节点同时前进，当快节点到达链表尾部时
    //慢节点所在位置就是倒数第n个位置的前一个位置
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    //删除slow.next节点
    slow.next = slow.next.next
    return dummy.next
}
