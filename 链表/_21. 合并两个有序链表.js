/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //创建一个新的链表，用来存放合并后的节点
    let dummy = {
        next:null
    }
    let tmp = dummy
    //开始迭代，直到一个链表被迭代完
    while(list1 && list2){
        //将小的元素放到结果链表中
        if(list1.val <= list2.val){
            tmp.next = new ListNode(list1.val,null)
            list1 = list1.next
        }else{
            tmp.next = new ListNode(list2.val,null)
            list2 = list2.next
        }
        //每放置一个节点，结果链表也要向后迭代一次
        tmp = tmp.next
    }
    //合并后list1和list2最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    tmp.next = list1 ? list1 : list2
    return dummy.next
};
