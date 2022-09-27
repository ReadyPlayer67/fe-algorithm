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
var deleteDuplicates = function(head) {
    //我的思路，记录一个前驱节点prev，当前节点cur
    if(!head){
        return null
    }
    let dummy = {
        val:null,
        next:head
    }
    let prev = dummy
    let cur = dummy.next
    while(cur){
        //如果cur.val === cur.next.val，说明要删除节点
        if(cur.next && cur.val === cur.next.val){
            //循环找出所有相同val的节点
            while(cur.next && cur.val === cur.next.val){
                cur = cur.next
            }
            //当前cur就是拥有相同值的最后一个节点，将prev.next指向cur.next
            prev.next = cur.next
            cur = cur.next
        }else{
            //val不相同就如同正常遍历链表一样
            prev = cur
            cur = cur.next
        }
    }
    return dummy.next
};

//官方解法
var deleteDuplicates = function(head) {
    if(!head){
        return null
    }
    let dummy = {
        val:null,
        next:head
    }
    //令cur等于前驱节点
    let cur = dummy
    while(cur.next && cur.next.next){
        //如果cur.next.val === cur.next.next.val
        if(cur.next.val === cur.next.next.val){
            //记录下cur.next.val为x
            const x = cur.next.val
            //找到所有val===x的节点
            while(cur.next && cur.next.val === x){
                //每找到一个就将cur.next = cur.next.next，代表删除cur.next节点
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return dummy.next
};
