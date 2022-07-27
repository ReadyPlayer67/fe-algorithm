//实现一个前缀树（字典树），本质上是一个N叉树，N=当前出现的字符数
var Trie = function() {
    //我们可以用一个hash表来简化，模拟树
    //初始化一个children空对象
    this.children = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let {children} = this
    //插入操作，遍历word每个字符ch
    for(let ch of word){
        //如果children[ch]不存在（子节点不存在），初始化children[ch]为一个空对象，作为子节点
        if(!children[ch]){
            children[ch] = {}
        }
        //将children[ch]赋值给children，相当于把指针移到children[ch]位置，继续处理下一个字符
        children = children[ch]
    }
    //最终遍历完了，然后将当前节点标记为字符串的结尾end:true
    children.end = true
    //如果insert('app')，children最终会变成这样的一个对象
    // children = {
    //     a:{
    //         p:{
    //             p:{
    //                 end:true
    //             }
    //         }
    //     }
    // }
};


/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    //搜索方法依赖于startsWith，调用startsWith方法拿到children
    let ret = this.startsWith(word)
    //如果返回的children存在，且是结尾节点（含有end这个属性），说明字典树中存在这个字符串
    return ret && ret.end !== undefined
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    //先实现startsWith判断前缀方法
    let {children} = this
    //遍历prefix的每个字符
    for(let ch of prefix){
        //如果children[ch]（子节点）不存在，直接返回false
        if(!children[ch]){
            return false
        }
        //子节点存在，继续检查子节点的子节点
        children = children[ch]
    }
    //搜索完了整个prefix，children还存在，说明存在该前缀，返回children，search方法会用到
    return children
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
