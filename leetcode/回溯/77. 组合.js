/**
 * 利用回溯求[1,2,...n]这些数字所有的k个数的组合
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    //套路和46题求全排列基本一致，只是排列是有顺序的，而组合是无序的
    //在排列中[1,2],[2,1]算两个结果，而组合中只能算一个
    let list = []
    //所以我们需要多传一个参数start，记录下一层递归的起始位置
    //比如一开始我们从1~n中选择了1，下一层递归只能从2~n中选择数字
    backtrack(list,[],n,k,1)
    return list
};

function backtrack(list,temp,n,k,start){
    if(temp.length === k){
        return list.push([...temp])
    }
    for(let i=start;i<=n;i++){
        if(temp.includes(i)){
            continue
        }
        temp.push(i)
        backtrack(list,temp,n,k,i+1)
        temp.pop()
    }
}

console.log(combine(3,3))
