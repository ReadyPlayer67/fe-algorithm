class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkNodeList{
    constructor() {
        this.head = null
        this.length = 0
    }
    append(val){
        const node = new Node(val)
        if(this.head){
            let p = this.head
            while (p.next){
                p = p.next
            }
            p.next = node
        }else{
            this.head = node
        }
        this.length++
    }
    print(){
        let ret = ''
        if(this.head){
            let p = this.head
            do{
                ret += `${p.value} => `
                p = p.next
            }while(p.next)
            ret += p.value
        }else{
            ret = 'empty'
        }
        console.log(ret)
    }
}

const linkNodeList = new LinkNodeList();
linkNodeList.append(1)
linkNodeList.append(2)
linkNodeList.append(3)
linkNodeList.append(4)
linkNodeList.print()
