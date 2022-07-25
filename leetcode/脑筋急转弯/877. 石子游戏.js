/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    //这题和486.预测赢家类似，所以可以直接用那道题的动态规划解法来做
    const n = piles.length
    let fmap = new Array(n).fill(-1).map(x=>new Array(n).fill(-1))
    let gmap = new Array(n).fill(-1).map(x=>new Array(n).fill(-1))
    return firstHand(piles,0,piles.length-1,fmap,gmap)
};

function firstHand(piles,l,r,fmap,gmap){
    if(l === r){
        return piles[l]
    }
    if(fmap[l][r]!==-1){
        return fmap[l][r]
    }
    const p1 = secondHand(piles,l+1,r,fmap,gmap) + piles[l]
    const p2 = secondHand(piles,l,r-1,fmap,gmap) + piles[r]
    const ans = Math.max(p1,p2)
    fmap[l][r] = ans
    return ans
}

function secondHand(piles,l,r,fmap,gmap){
    if(l === r){
        return 0
    }
    if(gmap[l][r]!==-1){
        return gmap[l][r]
    }
    const p1 = firstHand(piles,l+1,r,fmap,gmap)
    const p2 = firstHand(piles,l,r-1,fmap,gmap)
    const ans = Math.min(p1,p2)
    gmap[l][r] = ans
    return ans
}

//但是这题多了两个限制  1.条件数组的长度是偶数  2.数组的元素之和是奇数，所以没有平局。
//因为长度是偶数位，所以piles可以分为奇数位和偶数位两堆石子，比如[1,2,3,5]
//而先手可以控制自己摸的是偶数位还是奇数位，如果先手摸第一堆石子，那么他就会一直摸奇数位，而后手只能一直摸偶数位
//如果先手摸最后一堆，那么他就可以一直摸偶数位，所以只需要比较奇数位和偶数位总和哪个大，选大的那堆一直拿，先手就能实现必胜
function stoneGame2(piles){
    return true
}
