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

//归并排序写法，先将链表递归地从中点对半拆分（寻找中点利用快慢指针法），直到链表的长度小于等于1，然后进行合并
//合并的同时利用21.合并两个有序链表进行排序，这样合并的链表也是有序的，最终返回排序完的整个链表
var sortList2 = function(head) {
    return toSort(head,null)
};
//定义一个tail节点参数，表示当前链表最后一个节点的next
function toSort(head,tail){
    //链表没有节点
    if(head === null){
        return head
    }
    //链表只有一个节点
    if(head.next === tail){
        head.next = null
        return head
    }
    //快慢指针寻找链表的中点
    let fast = head
    let slow = head
    while(fast !== tail){
        fast = fast.next
        slow = slow.next
        if(fast !== tail){
            fast = fast.next
        }
    }
    let left = toSort(head,slow)
    let right = toSort(slow,tail)
    return merge(left,right)
}
//合并两个有序链表
function merge(head1,head2){
    let dummy = {
        next:null
    }
    let cur = dummy
    while(head1 && head2){
        if(head1.val <= head2.val){
            cur.next = head1
            head1 = head1.next
        }else{
            cur.next = head2
            head2 = head2.next
        }
        cur = cur.next
    }
    cur.next = head1 ? head1 : head2
    return dummy.next
}
