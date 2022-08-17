//https://visualgo.net/zh/heap 直观地理解堆
export class Heap{
    constructor(compare) {
        //让arr的下标从1开始，便于计算left和parent下标
        this.arr = [0]
        //传入一个compare方法，默认的比较方法构造一个最大堆
        this.compare = compare ? compare : (a,b)=>a>b
    }
    get size(){
        return this.arr.length-1
    }
    //获取左子节点的索引
    left(k){
        return k*2
    }
    //获取右子节点的索引
    right(k){
        return k*2+1
    }
    //获取父节点的索引
    parent(k){
        return k >> 1
    }
    //向堆中插入一个元素
    push(item){
        //先将这个元素插入arr尾部，也就是树的底部叶子节点
        this.arr.push(item)
        //之后执行上浮操作
        this.shiftUp(this.arr.length-1)
    }
    //上浮方法就是比较一个节点和他的父节点的值，如果是最大堆且值大于父节点的值，就交换这两个节点的位置，直到小于父节点的值
    shiftUp(k){
        const {compare,parent,arr} = this
        while(k > 1 && compare(arr[k],arr[parent(k)])){
            this.swap(k,parent(k))
            k = parent(k)
        }
    }
    //弹出根节点的值（最大堆的最大值，最小堆的最小值）
    pop(){
        //如果arr只有一个元素0说明堆为空
        if(this.arr.length===1) return null
        //首先交换根节点和最后一个叶子节点的位置
        this.swap(1,this.arr.length-1)
        //这样弹出arr的最后一个元素就是根节点的val
        const head = this.arr.pop()
        //之后进行下沉操作
        this.sinkDown(1)
        return head
    }
    sinkDown(k){
        //下沉操作要求节点和他的最大子节点进行交换（保证最大的节点变成父节点）
        let {arr,compare,left,right,size} = this
        //初始化一个下标，默认为k
        let element = k
        //如果k存在左子节点且左子节点大于element的值，就把left(k)赋值给element
        if(left(k) <= size && compare(arr[left(k)],arr[element])){
            element = left(k)
        }
        //如果k存在右子节点且右子节点大于element的值，就把right(k)赋值给element
        //此时element就是三个节点中最大的
        if(right(k) <= size && compare(arr[right(k)],arr[element])){
            element = right(k)
        }
        //如果element===k就不用交换
        if(element !== k){
            //交换k和element的位置，并且把element作为k，继续递归执行下沉操作，直到不必再交换
            this.swap(k,element)
            this.sinkDown(element)
        }
    }
    swap(a,b){
        [this.arr[a],this.arr[b]] = [this.arr[b],this.arr[a]]
    }
    peek(){
        return this.arr[1]
    }
}
// let heap = new Heap((a,b)=>a>b) //最大堆（最大的元素在堆顶）
// heap.push(3)
// heap.push(1)
// heap.push(2)
// heap.push(4)
// console.log(heap.arr)
// console.log(heap.pop())
// console.log(heap.pop())
// console.log(heap.pop())
// console.log(heap.arr)
// console.log('='.repeat(20))
