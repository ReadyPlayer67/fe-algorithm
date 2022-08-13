/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 判断一个链表是不是回文链表:1->2->2->1
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //如果是数组判断是否回文比较好办，直接双指针一个从头部一个从尾部开始遍历
    //但是链表我们无法直接获取尾部节点，所以比较好想的方法是递归链表，把节点元素添加到一个数组中
    //之后用双指针检查数组是否回文，这样我们需要一个额外数组，空间复杂度为O(n),利用双指针我们可以把空间复杂度降为O(1)
    let fast = slow = head
    let prev
    //先翻转前半部分链表，使用快慢指针，类似876题先找到中间位置的节点
    while(fast && fast.next){
        fast = fast.next.next
        //这里我们不仅仅要找到中间位置的节点，每次遍历slow节点还要进行反转操作
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }
    //这里要判断下如果fast不为null，说明链表长度为奇数 [12345]
    if(fast){
        //比如上述例子，此时slow在3的位置，所以要再往后迭代一位来到4
        //因为对于奇数长度的回文链表，中间节点不需要和任何节点对比
        slow = slow.next
    }
    //此时prev节点还在2的位置，slow节点来到4
    //因为2之前的链表已被翻转，所以可以分别向头尾两边开始遍历，判断每一位的节点val是否相等
    while(prev && slow){
        if(prev.val !== slow.val){
            return false
        }
        prev = prev.next
        slow = slow.next
    }
    //遍历完毕都相等就返回true
    return true
};
