/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  //本题是224.基本计算器的进阶，多了运算优先级
  //首先创建一个map，简历运算符和优先级的对应关系
  const map = {
    '+':1,
    '-':1,
    '*':2,
    '/':2
  }
  let nums = [0]
  let ops = []
  let i = 0
  s = s.replaceAll(' ','')
  while(i < s.length){
    if(s[i] === '('){
      ops.push('(')
      i++
    }else if(s[i] === ')'){
      while(ops.length){
        const op = ops[ops.length-1]
        if(op === '('){
          op.pop()
          break
        }else{
          calc(nums,ops)
        }
      }
      i++
    }else if(isNumber(s[i])){
      let str = ''
      while(isNumber(s[i])){
        str += s[i]
        i++
      }
      nums.push(Number(str))
    }else{
      if (i > 0 && (s[i - 1] === '(' || s[i - 1] === '+' || s[i - 1] === '-')) {
        nums.push(0);
      }
      while(ops.length && ops[ops.length-1] !== '('){
        const prev = ops[ops.length-1]
        //和224的区别在这里，我们在计算时，只有栈内运算符比当前运算符优先级高，才能进行运算
        //比如nums=[1,2],ops=[+]，此时运算符为*，比+优先级大，不能提前运算1+2
        if(map[prev] >= map[s[i]]){
          calc(nums,ops)
        }else{
          break
        }
      }
      ops.push(s[i])
      i++
    }
  }
  while(ops.length){
    calc(nums,ops)
  }
  return nums.pop()
};

function calc(nums,ops){
  const op = ops.pop()
  const num1 = nums.pop()
  const num2 = nums.pop()
  let ret = 0
  if(op === '+'){
    ret = num1+num2
  }else if(op === '-'){
    ret = num2-num1
  }else if(op === '*'){
    ret = num2*num1
  } else if(op === '/'){
    ret = Math.floor(num2/num1)
  }
  nums.push(ret)
}

function isNumber(char){
  return !isNaN(Number(char))
}
