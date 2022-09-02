//这道题考察设计哈希表和处理哈希冲突，我这里用分离链接处理冲突（hash表每个位置是一个链表）
var MyHashMap = function() {
    //这里我直接基于数组来做
    this.table = new Array(2069).fill(null)
};
//散列函数，我这里就简单写一个key%2069,正常要写一个比较不容易产生冲突的散列函数，比如loseloseHashCode
MyHashMap.prototype.hashCode = function(key){
    return key%2069
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let hashKey = this.hashCode(key)
    //如果这个hashKey对应的元素是null，说明这个位置是空，直接在这个位置放置一个链表头节点
    if(this.table[hashKey] === null){
        this.table[hashKey] = {
            key,
            value,
            next:null
        }
    }else{
        //如果不为空，检查是否存在这个key
        let cur = this.table[hashKey]
        //遍历链表，当遍历到链表结束或找到相同的key，停止遍历
        while(cur.next && cur.key !== key){
            cur = cur.next
        }
        //如果是因为找到了key停止的，直接覆盖value
        if(cur.key === key){
            cur.value = value
        }else{
            //如果是因为遍历结束了停止，直接在链表最后追加一个节点
            cur.next = {
                key,
                value,
                next:null
            }
        }

    }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let hashKey = this.hashCode(key)
    let cur = this.table[hashKey]
    //遍历链表，遍历完链表或者找到key，停止遍历
    while(cur && cur.key !== key){
        cur = cur.next
    }
    //如果是因为找到key停止的，返回当前节点的value，否则返回-1
    if(cur){
        return cur.value
    }else{
        return -1
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    //如果hashKey对应的位置不为null，就遍历这个链表，找到key相同的节点，把这个节点删掉
    let cur = this.table[this.hashCode(key)]
    let dummy = {
        next:cur
    }
    cur = dummy
    let pre = dummy
    while(cur){
        if(cur.key === key){
            pre.next = cur.next
        }
        pre = cur
        cur = cur.next
    }
    //最后再将这个链表赋值给这个hashKey的位置
    this.table[this.hashCode(key)] = dummy.next
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
