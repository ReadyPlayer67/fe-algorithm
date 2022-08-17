/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
    constructor() {
    }

    /**
     * @param {Node|null} root
     * @return {string}
     */
        // Encodes a tree to a single string.
    serialize = function(root) {
        //我的处理方法，递归地将数转换为一个嵌套对象，如下所示
        // obj = {
        //     val:'1',
        //     children:[
        //         {val:'2',children:[]},
        //         {val:'3',children:[]},
        //         {val:'4',children:[
        //             {val:'5',children:[]},
        //             {val:'6',children:[]}
        //         ]},
        //     ]
        // }
        //初始化一个结果对象
        let result = {}
        //每次递归接收一个node参数，一个空对象参数obj
        function dfs(node,obj){
            if(!node){
                return
            }
            //设置obj.val
            obj.val = node.val
            if(node.children){
                //遍历生成obj.children
                obj.children = node.children.map(item => dfs(item,{}))
            }
            return obj
        }
        dfs(root,result)
        return JSON.stringify(result)
    };

    /**
     * @param {string} data
     * @return {Node|null}
     */
        // Decodes your encoded data to tree.
    deserialize = function(data) {
        //反序列化同理，递归obj对象，生成节点，然后遍历obj.children，生成node.children
        const dataObj = JSON.parse(data)
        function dfs(obj){
            let node = new Node(obj.val,[])
            if(obj.children && obj.children.length > 0){
                node.children = obj.children.map(item => dfs(item))
            }
            return node
        }
        return dfs(dataObj)
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
