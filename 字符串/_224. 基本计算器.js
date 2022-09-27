/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    //括号会影响一个数字前面的运算符，所以我们尝试打开所有括号，得到没有括号，新的表达式
    //用一个栈记录每一层括号外面的运算符，1代表+，-1代表-，默认有一个值1，表示整个表达式最外面的符号是+
    //1+1可以理解成+(1+1)
    let stack = [1]
    //变量sign表示当前数字前面的运算符，默认是+: 1-2可以理解成+1-2
    let sign = 1
    //最终运算结果
    let ret = 0
    let i=0
    //开始遍历字符串s
    while(i<s.length){
        //遇到空格直接忽略
        if(s[i] === ' '){
            i++
        }else if(s[i] === '('){
            //遇到左括号，push一个当前符号到stack中，代表当前这个括号前面的运算符
            stack.push(sign)
            i++
        }else if(s[i] === ')'){
            //遇到右括号，弹出队列顶部的运算符
            stack.pop()
            i++
        }else if(s[i] === '+'){
            //遇到加号，用1（加号）乘以stack顶部的符号，得到展开括号后的符号
            //-(1+1)括号内的加号1乘以当前括号前面的符号-1，得到展开后的符号为减号
            sign = 1 * stack[stack.length-1]
            i++
        }else if(s[i] === '-'){
            //遇到减号，用-1（减号）乘以stack顶部的符号，得到展开括号后的符号
            sign = -1 * stack[stack.length-1]
            i++
        }else{
            //遍历字符串得到数字'233'->233
            let num = 0
            while(i<s.length && !isNaN(Number(s[i])) && s[i] !== ' '){
                num = num * 10 + Number(s[i])
                i++
            }
            //最终结果加等当前运算符乘以数字
            ret += sign * num
        }
    }
    return ret
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate2 = function(s) {
  //另一种解法，双栈法
  //初始化一个栈nums用于存放数字，另一个栈ops用于存放数字以外的括号和运算符
  //由于第一个数可能是负数，为了减少边界判断，往nums中先添加一个0
  let nums = [0]
  let ops = []
  let i = 0
  //去除字符串中的所有空格
  s = s.replaceAll(' ','')
  while(i < s.length){
    //遇到(直接push到ops中
    if(s[i] === '('){
      ops.push(s[i])
      i++
    }else if(s[i] === ')'){
      //遇到右括号，使用现有的ops和nums进行计算，直到遇到左边最近的一个(为止，将计算结果放入到nums中
      while(ops.length){
        const op = ops[ops.length-1]
        if(op === '('){
          ops.pop()
          break
        }else{
          calc(nums,ops)
        }
      }
      i++
    }else if(isNumber(s[i])){
      //遇到数字从开始位置往后去，将一个完整的数字整体取出放入nums中
      let str = ''
      while(isNumber(s[i])){
        str += s[i]
        i++
      }
      nums.push(Number(str))
    }else{
      //如果是运算符,需要将运算符push到ops中
      //在push之前，使用现有的ops和nums进行计算，直到遇到左边最近的一个(或ops为空为止，将计算结果放入到nums中
      //为防止 () 内出现的首个字符为运算符，将所有的空格去掉，并将 (- 替换为 (0-，(+ 替换为 (0+
      if (i > 0 && (s[i - 1] === '(' || s[i - 1] === '+' || s[i - 1] === '-')) {
        nums.push(0);
      }
      while(ops.length && ops[ops.length-1] !== '('){
        calc(nums,ops)
      }
      ops.push(s[i])
      i++
    }
  }
  //将剩余的部分计算完
  while(ops.length){
    calc(nums,ops)
  }
  return nums.pop()
};
//对当前nums和ops执行运算的方法，运算完之后将结果push到nums中
function calc(nums,ops){
  //从ops最顶部取出一个运算符，再从nums最顶部取出两个数，进行计算
  const op = ops.pop()
  const num1 = nums.pop()
  const num2 = nums.pop()
  const ret = op === '+' ? num1+num2 : num2-num1
  nums.push(ret)
}

function isNumber(char){
  return !isNaN(Number(char))
}

console.log(calculate2("   (  3 ) "))
