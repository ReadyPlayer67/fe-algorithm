var MyLinkedList = function() {
    this.head = null
};

MyLinkedList.prototype.getAtIndex = function(index){
    let cur = this.head
    let i = 0
    while(i < index){
        cur = cur.next
        if(!cur){
            return null
        }
        i++
    }
    return cur
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    return this.getAtIndex(index) ? this.getAtIndex(index).val : -1
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head === null){
        this.head = {
            val,
            next:null
        }
    }else{
        const node = {
            val,
            next:this.head
        }
        this.head = node
    }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head === null){
        this.head = {
            val,
            next:null
        }
    }else{
        let cur = this.head
        while(cur.next){
            cur = cur.next
        }
        cur.next = {
            val,
            next:null
        }
    }

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0){
        this.addAtHead(val)
        return
    }
    let cur = this.getAtIndex(index-1)
    if(cur){
        cur.next = {
            val,
            next:this.getAtIndex(index)
        }
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index === 0){
        this.head = this.head.next
    }else{
        let cur = this.getAtIndex(index-1)
        if(cur && cur.next){
            cur.next = cur.next.next
        }
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
