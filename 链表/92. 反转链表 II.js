/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //我一开始想到的方法，先遍历链表生成一个数组
    //然后利用双指针翻转数组
    //最后遍历数组，生成链表，空间复杂度为O(n)，还是较高的
    let arr = []
    let cur = head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    while(left <= right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    head = new ListNode(arr[0].val,null)
    cur = head
    for(let i=1;i<arr.length;i++){
        cur.next = new ListNode(arr[i],null)
    }
    return head
};

//更好的方法，翻转部分链表，对于链表1->2->3->4->5，翻转2~4的位置，期望结果1->4->3->2->5
function reverseBetween2(head, left, right) {
    let dummy = {
        next:head
    }
    //首先遍历节点直到left位置，因为我们是从dummy开始遍历的，所以我们遍历到了1的位置
    let tmp = dummy
    for(let i=0;i<left-1;i++){
        tmp = tmp.next
    }
    //初始化一个prev和cur准备开始翻转链表
    //因为我们要把234翻转成432，我们只需从3开始翻转，所以prev=tmp.next=2,cur=tmp.next.next=3
    let prev = tmp.next
    let cur = tmp.next.next
    //翻转中间部分，把2->3->4翻转成4->3->2
    for(let i=0;i<right-left;i++){
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    //我们此时翻转了链表，此时链表是1->2<-3<-4->5，但是题目要求我们只是翻转链表的值
    //所以我们先把2的next指向5，也就是tmp.next.next指向cur
    tmp.next.next = cur
    //并且要让1指向4，也就是tmp.next指向prev，这样就把链表改成了1->4->3->2->5
    tmp.next = prev
    return dummy.next
};
