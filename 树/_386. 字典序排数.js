/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    //用递归来实现
    let ret = []
    //递归方法，cur表示当前要检查的数字
    function dfs(cur){
        //如果cur>n，直接return，因为cur后面跟上任何数字肯定也会大于n了
        if(cur>n){
            return
        }
        //将cur加到ret中
        ret.push(cur)
        //从0开始继续检查cur+i数字，比如10,100,100...11,110...这样
        for(let i=0;i<=9;i++){
            dfs(cur*10+i)
        }
    }
    //因为我们求1~n内所有整数的字典序排数，所以一开始的循环要从1开始
    for(let i=1;i<=9;i++){
        dfs(i)
    }
    return ret
};

//迭代写法，空间复杂度为O(1)
var lexicalOrder = function(n) {
    let ret = []
    //j为当前处理的数，从1开始
    let j=1
    //因为要返回1~n内所有数，所以我们设定一个执行n次的循环
    for(let i=0;i<n;i++){
        //每次循环
        ret.push(j)
        //根据字典序规则，j后面应该是j*10,然后是j*10+1...
        //所以先检查j*10<=10，如果满足就让j*10
        if(j*10<=n){
            j *= 10
        }else{
            //如果不满足，就应当检查j+1,j+2...
            //再次之前我们要判断，如果j%10===9代表我们已经检查到了j+9，无法再+1了
            //或者j+1>n超过了限制，此时我们就应当回退一位，比如19检查完了，回退到1，这样1+1=2，下一个检查2
            while(j%10===9 || j+1>n){
                j = Math.floor(j/10)
            }
            //检查j+1,j+2...
            j++
        }
    }
    return ret
};
