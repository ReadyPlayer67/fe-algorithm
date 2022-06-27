/**
 * 利用回溯算法解决全排列问题
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    let list = []
    //设计一个递归方法，填充list
    backtrack(list,[],nums)
    return list
};

//list是结果数组，temp是当前排列的结果，nums是源数据
function backtrack(list,temp,nums){
    //递归终止条件，如果当前排列了所有数字，说明找到了一个排列结果，push到list中
    if(temp.length === nums.length){
        //这里注意要push temp的拷贝，因为temp参数是按引用传入的
        list.push([...temp])
    }
    //从nums的第1个元素开始遍历，填到temp中
    for(let i = 0;i<nums.length;i++){
        //这里要注意不能填入重复的数字
        if(temp.includes(nums[i])){
            continue
        }
        //将数字填充到temp中
        temp.push(nums[i])
        //递归执行backtrack temp: []->[1]->[1,2]->[1,2,3]
        backtrack(list,temp,nums)
        //当找到一个排列结果后会退出递归，此时执行回溯，从temp中弹出一个元素temp:[1,2,3]->[1,2]
        //此时这个backtrack方法循环i=2，循环结束，也会退出递归，继续弹出元素temp:[1,2]->[1]
        //此时这个backtrack方法循环i=1，继续循环，找到下一个元素3，push到temp中,temp:[1]->[1,3]
        //继续递归，找到temp中不存在的nums[i]是2，temp:[1,3]->[1,3,2]
        //这样下一个解就找到了，依此不断地进行回溯
        temp.pop()
    }
}

console.log(permute([1,2,3]))

//回溯问题公式
// let list = []
// function backtrack(list,临时路径,输入){
//     结束条件：
//         找到一个临时路径，新增路径
//     循环：
//         选择一个数据 (选择其他数据)
//         递归 backtrack(list,临时路径,输入)
//         撤回选择的数据（继续循环）
// }
