/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    //先分别把链表的值都push到一个数组中，对数组进行排序，最后遍历数组生成链表
    if(lists.length === 0){
        return null
    }
    let arr = []
    for(let head of lists){
        while(head){
            arr.push(head.val)
            head = head.next
        }
    }
    arr.sort((a,b)=>a-b)
    let dummy = {
        val:null,
        next:null
    }
    let cur = dummy
    for(let i=0;i<arr.length;i++){
        cur.next = {
            val:arr[i],
            next:null
        }
        cur = cur.next
    }
    return dummy.next
}

//归并法
var mergeKLists = function(lists) {
    //边界情况
    if(lists.length === 0){
        return null
    }
    //调用mergeLists方法，初始开始下标为0，结束位下标为lists.length-1
    return mergeLists(lists,0,lists.length-1)
};
//定义一个mergeLists方法，传入链表lists,开始下标start和结束下标end
function mergeLists(lists,start,end){
    //如果start=end，直接返回当前链表
    if(start === end){
        return lists[start]
    }
    //找到一个中点，将当前范围的lists一分为二，分别再递归地执行mergeLists方法
    const mid = (start+end)>>1
    const left = mergeLists(lists,start,mid)
    const right = mergeLists(lists,mid+1,end)
    //将两边的链表调用mergeTwoLists合并为一个有序链表
    return mergeTwoLists(left,right)
}
//定义一个合并两个链表为一个有序链表的方法
function mergeTwoLists(head1,head2){
    //定义一个哨兵节点
    let dummy = {
        val:null,
        next:null
    }
    let cur = dummy
    //遍历head1和head2，每次找出val小的节点作为cur的next节点
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
    //最后head1和head2一定会有一边还剩节点，直接放到cur后面即可
    cur.next = head1 ? head1 : head2
    return dummy.next
}
