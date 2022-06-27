/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let list = []
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
