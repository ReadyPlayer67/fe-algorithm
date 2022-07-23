/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    let mapS = new Map()
    let mapT = new Map()
    for(let i=0;i<s.length;i++){
        let c1 = s[i]
        let c2 = t[i]
        if(mapS.has(c1)){
            mapS.set(c1,mapS.get(c1)+1)
        }else{
            mapS.set(c1,1)
        }
        if(mapT.has(c2)){
            mapT.set(c2,mapT.get(c2)+1)
        }else{
            mapT.set(c2,1)
        }
    }
    for(let key of mapS.keys()){
        const count1 = mapS.get(key)
        const count2 = mapT.get(key)
        if(count1 !== count2){
            return false
        }
    }

    return true
};

console.log(isAnagram("rat","car"))
