/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    //这题可以利用双指针来做，对于含有重复数字的数组[1,2,3,3],我们将下标i和nums[i]建立对应关系，得出一个类似链表的结构
    //就能得到0->1->2->3->3->3...的关系，这个链表是一个环形链表
    //那么这题就被转换成了142.环形链表II，我们求一个链表中环的入口即可
    //定义一个快指针和慢指针，他们的next等于nums[slow]/nums[fast]
    let slow = 0
    let fast = 0
    //快指针每次走两步，慢指针走一步，知道他们相遇
    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    }while(slow !== fast)
    //此时慢指针回到起点，两个指针每次都走一步，他们相遇的点就是链表中环的入口
    //也就是数组中重复的那个元素
    slow = 0
    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
};
