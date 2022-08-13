//实现一个RandomizedSet，保证所有操作的平均时间复杂度为O(1)
var RandomizedSet = function() {
    //时间复杂度要求O(1)，数组的push操作可以满足，但是删除操作复杂度为O(n)
    //同时要满足set，也就是插入和删除时要进行去重判断，所以我们需要一个哈希表来降低时间复杂度
    this.list = []
    this.map = {}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    //insert操作比较简单，如果map存在key为val的键值对，就返回false
    if(val in this.map){
        return false
    }
    //否则map和list都进行插入操作
    this.list.push(val)
    //这里注意，map的val设置为当前val在数组中的下标，之后remove操作需要用到
    this.map[val] = this.list.length-1
    return true
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    //由于数组删除指定索引的元素时间复杂度为O(n)，我们这里可以用一个交换的方法做到O(1)复杂度，前提是数组的顺序会被打乱
    //删除时首先检查map中是否有该val，如果没有直接返回false
    if(val in this.map){
        //首先根据拿到this.map[val]，即该val在数组list中的下标
        const index = this.map[val]
        //获取数组最后一项的值
        const lastVal = this.list[this.list.length-1]
        //把最后一项的值赋值给当前索引
        this.list[index] = lastVal
        //弹出最后一项，这样就做到了用O(1)的复杂度删除了指定index的元素（pop操作复杂度为O(1)）
        this.list.pop()
        //更新this.map，lastVal的下标更新为index，同时删除this.map[val]
        this.map[lastVal] = index
        delete this.map[val]
        return true
    }else{
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    //获取随机值也比较简单，用Math.random获取一个随机的数组下标并返回
    const i = Math.floor(Math.random()*this.list.length)
    return this.list[i]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
