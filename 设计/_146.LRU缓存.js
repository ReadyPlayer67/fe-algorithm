/**
 * 实现一个LRUCache类（Least Recently Used），缓存最近使用过的元素
 * @param {number} capacity 缓存容量
 */
const LRUCache = function (capacity) {
  this.max = capacity
  //我们应当用链表来实现LRU缓存，因为我们需要频繁进行插入，删除操作，链表的复杂度为O（1）
  //我们用map来存储数据，因为map.keys实现了Iterator接口，可以用它来模拟链表
  //并且map中的key是有序的，新插入的key一定是最后一个，而object中key是无序的
  this.cache = new Map()
};

/**
 * get方法，如果key存在于缓存中，返回value，否则返回-1
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  //如果缓存中存在该key
  if (this.cache.has(key)) {
    //我们需要先删除该key，再进行插入，因为我们要将这个元素标记为最近使用过
    const tmp = this.cache.get(key)
    this.cache.delete(key)
    //map的set操作会将元素插入到map末尾，代表最近使用过
    this.cache.set(key, tmp)
    return tmp
  } else {
    return -1
  }
};

/**
 * put方法，如果缓存未满，就直接set，如果满了，删除最久未使用的元素再set
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  //首先检查缓存中是否存在该key
  if (this.cache.has(key)) {
    //如果存在就直接先删除再set，标记为最近使用
    this.cache.delete(key)
    this.cache.set(key, value)
  } else {
    //否则先检查缓存是否已满
    if (this.cache.size >= this.max) {
      //如果队列已满，要先删除最久未使用的元素，对于map来说，就是最前面的第一个元素
      //this.cache.keys()实现了Iterator接口，该接口有一个next方法
      //调用一次next方法可以获取一个对象，该对象的value就是第一个元素的key值，我们通过key值直接删除该元素
      this.cache.delete(this.cache.keys().next().value)
    }
    //如果未满就直接set
    this.cache.set(key, value)
  }
};
