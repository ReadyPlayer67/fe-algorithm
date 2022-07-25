/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    //我第一次做题的写法，复杂度较高
    // let ret = 0
    // g.sort((a,b) => b-a)
    // for(let i=0;i<g.length;i++){
    //     const index = s.findIndex(item => item >= g[i])
    //     if(index > -1){
    //         ret++
    //         s.splice(index,1)
    //     }
    // }
    // return ret
    //能满足孩子的数量
    let ret = 0
    //先对g和s都按照从大到小排序
    g.sort((a,b) => b-a)
    s.sort((a,b) => b-a)
    //一个指针，指向当前饼干s的索引
    let index = 0
    //因为孩子的胃口g是按照从大到小排序的，我们从大胃口的孩子开始遍历，尽可能地优先满足胃口大的
    //如果不优先满足胃口大的，有可能出现大尺寸饼干分配给了胃口小的孩子，无法实现最优解
    for(let i=0;i<g.length;i++){
        //如果当前最大尺寸大饼干能满足胃口最大的孩子，就分给他
        if(s[index] >= g[i]){
            //能满足的数量+1，指针右移，表示饼干被分掉一个
            ret++
            index++
        }
    }
    return ret
};

console.log(findContentChildren([1,2,3],[1,1]))
