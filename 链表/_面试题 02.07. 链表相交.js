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
    //我一开始想到的，双层循环暴力解法
    //先遍历headA，内部再遍历headB
    let curA = headA
    let curB = headB
    while(curA){
        curB = headB
        while(curB){
            if(curA === curB){
                return curA
            }
            curB = curB.next
        }
        curA = curA.next
    }
    return null
};

//双指针解法
var getIntersectionNode2 = function(headA, headB) {
    //首先分别计算出headA和headB的长度
    const lengthA = getLength(headA)
    const lengthB = getLength(headB)
    //创建两个指针，一个准备指向长链表的头节点，一个指向短链表的头节点
    let curLong = null
    let curShort = null
    //两个链表的长度差
    let diff = 0
    //对两种情况分别进行赋值处理
    if(lengthA>lengthB){
        diff = lengthA - lengthB
        curLong = headA
        curShort = headB
    }else{
        diff = lengthB - lengthA
        curLong = headB
        curShort = headA
    }
    //遍历长链表，将指针移动长度差的距离，因为两个链表如果有交点，交点后的长度一定是相同的
    //不确定的就是交点前的长度，现在让长链表和短链表在同一起跑线，就可以同步进行遍历了
    while(diff){
        curLong = curLong.next
        diff--
    }
    //之后同时遍历两个链表，同时向后移动curLong和curShort，如果遇到curLong == curShort，则找到交点
    while(curLong && curShort){
        if(curLong === curShort){
            return curLong
        }
        curLong = curLong.next
        curShort = curShort.next
    }
    return null
};
//创建一个获取链表长度的方法
function getLength(head){
    let cur = head
    let len = 1
    while(cur){
        len++
        cur = cur.next
    }
    return len
}
