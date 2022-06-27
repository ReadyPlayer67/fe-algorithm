//这样实现leftpad会很低效
function leftpad(str,length,ch){
    const len = length - str.length + 1
    return Array(len).join(ch)+str
}
//高效的方法，要拼8个0，其实就是拼4个00,2个0000,1个00000000
function leftpad2(str,length,ch){
    //获取要补全的长度len
    let len = length - str.length
    //要补齐的字符串
    let total = ''
    while(true){
        //如果长度不能被2整除，就先拼一个ch，这样剩下的字符就能被2整除了
        if(len % 2 === 1){
            total += ch
        }
        //如果长度为1，说明不能再进行简化了，直接返回拼接结果
        if(len === 1){
            return total + str
        }
        //否则就把复用字符串，把0变成00，并且将长度除以2
        ch += ch
        len = Math.floor(len/2)

    }
}
console.log(leftpad2('hello',13,'0'))
console.time('leftpad')
for(let i=0;i<10000;i++){
    leftpad('hello',10000,'0')
}
console.timeEnd('leftpad')

console.time('leftpad2')
for(let i=0;i<10000;i++){
    leftpad2('hello',10000,'0')
}
console.timeEnd('leftpad2')
