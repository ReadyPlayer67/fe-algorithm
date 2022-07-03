/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //暴力解法，两层遍历，直到找到相同的节点
    // let curA = headA
    // let curB = headB
    // while(curA){
    //     while(curB){
    //         if(curA === curB){
    //             return curA
    //         }
    //         curB = curB.next
    //     }
    //     curA = curA.next
    //     curB = headB
    // }
    // return null
    //用set做缓存
    let set = new Set()
    while(headA){
        set.add(headA)
        headA = headA.next
    }
    while(headB){
        if(set.has(headB)){
            return headB
        }
        headB = headB.next
    }
    return null
};

//使用双指针的方法，可以将空间复杂度降至 O(1)。
function getIntersectionNode2(headA,headB){
    let curA = headA
    let curB = headB
    //将两个链表连接在一起，分别是headA->headB和headB->headA
    //对于1->2->3->4和5->3->4这两个链表
    //连接结果分别是1->2->3->4->5->3->4
    //            5->3->4->1->2->3->4
    //这时候我们就可以同时遍历这两个链表，如果他们是相交的，因为相交节点之后的值是完全一致的，都是3->4
    //所以3在两个链表中出现的位置一定是一致的，都是倒数第二位
    //因而依次遍历连接完的两个链表，一定能在两个链表相同的位置找到相同的节点3，这就说明A和B是相交的链表
    while(curA !== curB){
        //连接A->B，当curA遍历完时指向headB
        curA = curA !== null ? curA.next : headB
        //连接B->A，当curB遍历完时指向headA
        curB = curB !== null ? curB.next : headA
    }
    //返回相交的节点curA，如果两个链表不相交，curA遍历到最后就是null了
    return curA
}
