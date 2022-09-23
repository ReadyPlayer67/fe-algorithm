/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //定义一个哨兵节点
    let dummy = {
        val:null,
        next:null
    }
    let cur = dummy
    //定义一个变量表示是否要进位
    let addOne = 0
    //循环条件是l1或l2没有被遍历完，或者需要进位（最后一位进1）
    while(l1 || l2 || addOne){
        //获取l1,l2的val，如果节点不存在就是0
        let val1 = l1 === null ? 0 : l1.val
        let val2 = l2 === null ? 0 : l2.val
        //求和并加上addOne
        let val = val1 + val2 + addOne
        //如果和大于等于10，下一位还需要进1
        addOne = val >= 10 ? 1 : 0
        //初始化cur.next节点
        cur.next = {
            val:val%10,
            next:null
        }
        //如果l1,l2还有值，就继续往后遍历
        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
        cur = cur.next
    }
    return dummy.next
};
