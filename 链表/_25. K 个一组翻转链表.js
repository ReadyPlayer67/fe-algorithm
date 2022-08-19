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
var reverseKGroup = function(head, k) {
    //初始化一个哨兵节点，next为head
    let dummy = {
        val:null,
        next:head
    }
    //需要翻转的子链表的前一个节点，记录下来，之后重新连接子链表的时候用
    let pre = dummy
    //遍历链表
    while(head){
        //tail记录当前翻转的子链表的最后一个节点
        let tail = pre
        //查看剩余部分长度是否大于等于k，小于k不用翻转了，直接返回链表
        for(let i=0;i<k;i++){
            tail = tail.next
            if(!tail){
                return dummy.next
            }
        }
        //需要翻转的子链表的后一个节点，记录下来，之后重新连接子链表的时候用
        let next = tail.next;
        //翻转子链表
        [head,tail] = myReverse(head,tail)
        //把子链表head拼回原来的链表 pre -> 3->2->1 ->next
        pre.next = head
        //将反转后的子链表tail接回原先的tail.next节点
        tail.next = next
        //重新计算pre和head，进一步向后翻转
        pre = tail
        head = tail.next
    }
    return dummy.next
};
//翻转子链表的方法，和反转链表一样
function myReverse(head,tail){
    let prev = null
    let p = head
    while(prev !== tail){
        const next = p.next
        p.next = prev
        prev = p
        p = next
    }
    //此时tail是翻转好的头节点，head是翻转好的链表的尾部节点
    return [tail,head]
}
