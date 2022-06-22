/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    //使用一个备忘录集合
    // let cache = new Set()
    // let p = head
    // while(p){
    //     if(cache.has(p)){
    //         return true
    //     }else{
    //         cache.add(p)
    //         p = p.next
    //     }
    // }
    // return false
    let fast = head
    let slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            return true
        }
    }
    return false
};
