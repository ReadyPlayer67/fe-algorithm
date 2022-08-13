/**
 * 贪心法解决最少箭引爆气球问题
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    //边界情况
    if(!points.length){
        return 0
    }
    //先对points按右边界进行升序排序=>[[1,6],[2,8],[10,16],[7,12]]
    points.sort((a,b) => a[1]-b[1])
    //先对第一个气球的右边界射一箭
    let ret = 1
    let biu = points[0][1]
    //遍历之后的每个气球
    for(let i=1;i<points.length;i++){
        const ball = points[i]
        //如果该气球的左边界在射箭位置左边，也就是上一个气球的右边界左边
        //代表这一箭可以射爆这两个气球，继续检查下一个气球
        if(ball[0] <= biu){
            continue
        }else{
            //如果气球的左边界在射箭位置右边，代表这一箭无法射爆该气球
            //此时要多射一箭，射箭的位置同样在该气球的右边界，这样就可以贪心地得到最优解，之后重复上面的检查过程
            ret++
            biu = ball[1]
        }
    }
    return ret
};
