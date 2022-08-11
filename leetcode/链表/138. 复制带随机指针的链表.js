/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}0
 */
var copyRandomList = function(head) {
    //遍历两次，先复制各个节点，再复制各个节点的连接关系
    if(!head){
        return null
    }
    let cur = head
    //用一个哈希表存储旧节点与新节点的map关系
    let map = new Map()
    //遍历旧链表，生成旧节点与新节点的map关系
    while(cur){
        map.set(cur,new Node(cur.val))
        cur = cur.next
    }
    cur = head
    //再次遍历旧链表
    while(cur){
        //获取旧节点的next,random节点，去map中找到这些节点对应的新节点，再赋值给新节点的next,random
        //这里要注意判断一下是否为null
        map.get(cur).next = cur.next ? map.get(cur.next) :null
        map.get(cur).random = cur.random ? map.get(cur.random) : null
        cur = cur.next
    }
    return map.get(head)
};
