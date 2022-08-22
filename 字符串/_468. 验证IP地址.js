/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    //这是一道考察思维缜密性的问题
    //先根据字符串中是否包含'.',':'来区分可能是IPV4还是IPV6地址
    if(queryIP.indexOf('.')>-1){
        //验证IPV4步骤：
        let arr = queryIP.split('.')
        //1.根据.分割成的数组长度需要为4
        if(arr.length !== 4){
            return 'Neither'
        }
        for(let item of arr){
            //2.每一项字符得长度在1~3之间
            if(item.length < 1 || item.length > 3){
                return 'Neither'
            }
            //3.不能包含前导0
            if(item.startsWith('0') && item !== '0'){
                return 'Neither'
            }
            //4.每一位字符必须为数字
            for(let char of item){
                if(Number.isNaN(Number(char))){
                    return 'Neither'
                }
            }
            //5.转换为数字需要在0~255之间
            if(Number(item) > 255){
                return 'Neither'
            }

        }
        return 'IPv4'
    }else if(queryIP.indexOf(':')>-1){
        //验证IPV6步骤：
        let arr = queryIP.split(':')
        //1.根据:分割成的数组长度需要为8
        if(arr.length !== 8){
            return 'Neither'
        }
        for(let item of arr){
            //2.每一项的字符长度要在1~4之间
            if(item.length > 4 || item.length < 1){
                return 'Neither'
            }
            //3，每一项的每一个字符只包含数字，a-f,A-F
            for(let char of item){
                if(Number.isNaN(Number(char)) && !(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'f')){
                    return 'Neither'
                }
            }
        }
        return 'IPv6'
    }else{//即不含. 也不含: 返回Neither
        return 'Neither'
    }
};
