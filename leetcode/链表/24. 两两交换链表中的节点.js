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
var swapPairs = function(head) {
    //创建一个虚拟头节点
    let dummy = {
        val:null,
        next:head
    }
    let pre = dummy
    //当pre.next和pre.next.next都存在，意思就是后面还有两个节点
    //这时候才需要执行交换
    while(pre.next && pre.next.next){
        //初始化要交换的两个节点first和second
        let first = pre.next
        let second = pre.next.next
        //交换有三个步骤，首先将pre.next指向second
        pre.next = second
        //获取当前second的next节点third，缓存下来
        let third = second.next
        //将second.next执行first
        second.next = first
        //first.next指向third完成交换
        first.next = third
        //更新pre节点，此时应当指向交换后的后一个节点，即first
        pre = first
    }
    return dummy.next
};
