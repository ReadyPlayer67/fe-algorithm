/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 与141.环形链表类似，不过这次要返回入环的那个节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    //利用哈希表可以解决，遍历的时候把节点添加到set中
    //如果出现环，那么set中就会存在重复的节点，在那时我们返回即可
    let set = new Set()
    let cur = head
    while(cur){
        if(set.has(cur)){
            return cur
        }
        set.add(cur)
        cur = cur.next
    }
    return null
};

//更巧妙的方法，利用快慢指针
//注释见 https://www.yuque.com/u22630986/fxgle9/ayenog#aqBrZ
function detectCycle(head){
    let slow = head
    let fast = head
    let hasCycle = false
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast){
            hasCycle = true
            break
        }
    }
    if(!hasCycle) return null
    let pos = head
    while(pos !== slow){
        pos = pos.next
        slow = slow.next
    }
    return slow
}
