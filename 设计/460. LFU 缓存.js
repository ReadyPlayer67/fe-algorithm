/**
 * 设计一个LFU缓存（最不经常使用算法），每个缓存key对应一个使用次数，get和put时使用次数+1,当缓存满了以后put新的缓存，移除最不经常使用的项
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    //初始化时需要创建一下几个成员，size表示缓存容量
    this.size = capacity
    //values用来存放key:value
    this.values = new Map()
    //times存放key:缓存使用次数
    this.times = new Map()
    //为了使get和put时间复杂度都为O(1)，不能进行遍历
    //我们还需要一个useMap，key是使用次数，value是一个set，里面存放的是key（因为可能有多个key使用了相同的次数）
    this.useMap = new Map()
    //当前缓存中使用次数最少得缓存，所使用的次数
    this.min = 0
};
//创建一个方法，根据key更新times,useMap,min
LFUCache.prototype.updateCount = function(key){
    //获取使用次数
    let time = this.times.get(key)
    //根据使用次数time获取useSet
    let useSet = this.useMap.get(time)
    //如果这个key是当前缓存中使用最少得那个，并且是唯一的，就需要更新this.min，让他+=1
    if(this.min === time && useSet.size === 1){
        this.min += 1
    }
    //使用次数+1
    time += 1
    //从旧的useSet中删掉这个key
    useSet.delete(key)
    //根据新的time获取新的useSet，如果不存在就初始化一个空的set
    useSet = this.useMap.get(time) || new Set()
    //把key添加到新的useSet中
    useSet.add(key)
    //更新useMap和times
    this.useMap.set(time,useSet)
    this.times.set(key,time)
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    //get的时候比较简单，只需根据values返回value，同时调用updateCount更新一下使用次数即可
    if(this.values.has(key)){
        this.updateCount(key)
        return this.values.get(key)
    }
    return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    //put略复杂，首先判断边界情况
    if(this.size === 0){
        return
    }
    //put的时候存在两种情况：
    //1.当前缓存中存在这个key，直接更新value，并且更新使用次数即可
    if(this.values.has(key)){
        this.values.set(key,value)
        this.updateCount(key)
    }else{
        //2.当前缓存中不存在这个key
        let minSet
        //如果当前缓存容量已满，需要移除使用次数最少的项
        if(this.size === this.values.size){
            //通过this.min获取到使用最少次数的key所在set
            minSet = this.useMap.get(this.min)
            //获取minSet的第一项（题目要求当两个或更多个键具有相同使用频率时，应该去除最久未使用的键，也就是最新添加到set中的key）
            let delKey = minSet.values().next().value
            //从minSet，this.values,this.times中删除delKey
            minSet.delete(delKey)
            this.values.delete(delKey)
            this.times.delete(delKey)
        }
        //不管缓存容量是否已满，以下操作都需要进行：
        //更新value
        this.values.set(key,value)
        //因为当前缓存中不存在这个key，现在添加了这个key，使用次数为1，所以this.min也需要更新为最小的1
        this.min = 1
        //获取当前是否有其他使用1次的key
        minSet = this.useMap.get(1) || new Set()
        //把key添加到minSet中
        minSet.add(key)
        //更新this.times和this.useMap
        this.times.set(key,1)
        this.useMap.set(1,minSet)
    }

};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
