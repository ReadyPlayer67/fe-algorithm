/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //依然回溯公式
    let ret = []
    backtrack(0,[],0)
    return ret
    //backtrack方法sum:代表当前path数字总和，path:当前组合的数字
    //start:因为是求组合而不是排列，[2,2,3]和[2.3.2]这样重复的只能算一个path，所以需要一个变量start来确定遍历起始位置
    function backtrack(sum,path,start){
        //两种退出情况，如果sum等于target，找到一个解
        if(sum === target){
            //这里注意push的是path的拷贝，不然path会被不停的修改
            ret.push([...path])
            return
        }else if(sum > target){//如果sum>target，没必要再搜索了，直接退出
            return
        }
        //sum<target说明可以继续往后搜索，遍历candidates，注意要从start位置开始遍历
        for(let i=start;i<candidates.length;i++){
            const num = candidates[i]
            //把当前搜索的数字push到path中，并且sum加上num，继续执行backtrack方法
            //把i当做start参数，这样就告诉之后的递归，必须从i之后开始搜索
            //比如对于[2,3,6,7]求target7,我们在一开始回溯已经检查过2,2,3=7这个解了
            //之后搜索2,3的时候如果不限制start，就会又从2开始遍历，找到一个重复解2,3,2=7
            //所以我们限制start，保证2,3下一轮搜索的时候只会从3开始遍历，就不会产生重复解
            path.push(num)
            backtrack(sum+num,path,i)
            path.pop(num)
        }
    }
};

combinationSum([2,3,6,7],7)
