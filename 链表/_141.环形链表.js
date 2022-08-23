/** 验证一个链表是否是环形链表（如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达）
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    //使用一个备忘录集合
    let cache = new Set()
    let p = head
    //从head开始遍历链表
    while(p){
        //如果cache中存在了该节点，代表通过指针再次到达了该节点，满足环形链表，return true
        if(cache.has(p)){
            return true
        }else{
            //否则在cache中添加该节点，继续往后遍历
            cache.add(p)
            p = p.next
        }
    }
    //遍历完成后也没有发现环，就返回false
    return false

};

//更好的方法，利用双指针（快慢指针）
function hasCycle2(head){
    //设置两个指针，初始都指向head
    let fast = head
    let slow = head
    //如果不存在环，快指针会先移动到链表尾部，这时候需要终止循环
    while(fast && fast.next){
        //快指针每次前进两个节点
        fast = fast.next.next
        //慢指针每次前进一个节点
        slow = slow.next
        //如果链表存在环，快指针一定会再次追上慢指针（相当于跑步套了一圈），这时候返回true
        if(fast === slow){
            return true
        }
    }
    //没有环，循环结束，返回false
    return false
}
