/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    //第一种方法，利用递归
    //如果节点是null，代表迭代已经完成了
    if(head === null){
        return head
    }
    //利用递归其实是从后往前去遍历这个链表
    head.next = removeElements(head.next,val)
    //如果当前节点是要被移除的，就返回节点后面的节点head.next,否则就返回节点本身，把这个返回的结果赋值给head.next就可以实现改变指针，移除节点
    return head.val === val ? head.next : head
};

//第二种方法，通过遍历
const removeElements2 = (head, val) => {
    //设置一个哨兵元素ele
    //这样做的目的是把head也当成链表中间的一个普通节点，避免操作节点的时候每次都要判断该节点是否是head
    let ele = {
        next:head
    }
    let p = ele
    //从head开始遍历链表
    while(p.next){
        if(p.next.val === val){
            //如果是要删的节点，就改变指针，移除该节点
            p.next = p.next.next
        }else{
            //否则就继续往后迭代
            p = p.next
        }
    }
    //这里要注意，return的是ele.next而不是head
    //因为我们从始至终一直都在操作ele.next，而没有操作head
    return ele.next
}
