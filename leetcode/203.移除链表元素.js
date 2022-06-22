/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    //第一种方法，利用递归
    // if(head === null){
    //     return head
    // }
    // head.next = removeElements(head.next,val)
    // return head.val === val ? head.next : head
    //设置一个哨兵元素ele
    let ele = {
        next:head
    }
    let p = ele
    while(p.next){
        if(p.next.val === val){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return ele.next
};
