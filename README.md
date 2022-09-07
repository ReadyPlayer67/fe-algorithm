#### [236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)  
存储父元素的指针/递归（找到一个节点就返回该节点，没找到就返回null）
#### [124. 二叉树中的最大路径和](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)
后序遍历，计算出左右子节点能贡献的最大值再加上当前node的值就是经过当前节点的最大路径，最后要返回当前节点能贡献的最大值：Math.max(0,left,right) + node.val
#### [297. 二叉树的序列化与反序列化](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/)
可以用层序遍历也可以递归，递归采用先序遍历，处理左右子树返回字符串给当前节点进行拼接操作，遍历到null是用一个特殊字符X表示
#### [48. 旋转图像](https://leetcode.cn/problems/rotate-image/)
模拟旋转过程，注意每一行/每一列最后一个点不动，以防重复旋转
#### [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
利用最小堆，初始化一个大小为k的最小堆，最后堆顶的元素就是第K大元素，可能会考察手写一个堆结构，堆的主要方法：size,left,right,parent,push,shiftUp,pop,sinkDown,swap,peek
#### [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)
用一个pre记录前一个节点，cur记录当前节点，每次向后遍历时改变cur的next，指向pre，然后更新pre和cur即可，最后返回pre
#### [207. 课程表](https://leetcode.cn/problems/course-schedule/)
拓扑排序问题，初始化一个入度数组和一个邻接表，入度数组存放每个课程的入度数，邻接表存key存放课程号，value存放依赖这门课程的数组，之后将入度为0的课程入队列，利用邻接表不断更新剩余课程的入度数组，发现有为0的课程继续入队，知道队列为空，最后检查入度数组每一项是否都为0
#### [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
滑动窗口+哈希表，将出现过的字母存到一个set里，如果set中不含右边界的字符，右边界右移，直到出现重复的字母，此时计算窗口大小并更新全局窗口大小，下一次循环开始左边界左移一位，删除set中的左边界字符，要注意删除的是左边界下标-1：set.delete(s[i-1])
#### [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)
创建一个dummy节点，然后从head开始遍历，每次用for循环前进k次找到tail节点，如果tail不存在说明剩余节点数不满k，直接返回dummy.next，如果tail存在就用反转链表的操作反转这个子链表，同时我们要记录子链表反转前head节点的前一个节点和tail节点的后一个节点，这样我们才能把反转完的链表连回来
#### [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/)
遍历每个点，如果是1（陆地），岛屿数+1并执行dfs，将所有相邻的点改变为0
#### [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/)
回溯，backtrack方法的参数是路径字符串，左括号剩余个数openCount，右括号剩余个数closeCount，当
path.length === 2*n时代表找到一个答案，否则继续寻找：如果openCount === closeCount是后面只能拼接(，当openCount < closeCount后面可能拼接(或），对这些情况分别进行回溯搜索
#### [151. 颠倒字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)
用一个双端队列，用一个left和right表示字符串左右边界，先去除头尾的空格，再遍历字符串，当遇到空格就把拼接好的单词unshift到队列头部，最后把队列转换为字符串
#### [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)
动态规划，用一个一维数组dp，dp[i]表示包括下标i之前的最大连续子序列和，递推公式为
dp[i] = dp[i-1] < 0 ? nums[i] : dp[i-1]+nums[i]，最后返回dp数组中的最大值
#### [560. 和为 K 的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/)
前缀和+哈希表，哈希表的key是前缀和的值，value是该前缀和出现的次数，遍历数组，一遍更新哈希表一边检查哈希表中是否存在prefixSum-k的前缀和，存在的话就加上出现次数，要注意map初始化时为{0:1}表示前缀和为0出现了1次，这样边界情况才成立
#### [152. 乘积最大子数组](https://leetcode.cn/problems/maximum-product-subarray/)
动态规划，需要维护两个dp数组，一个存放当前下标的最大子数组乘积maxDp，一个存放当前下标的最小子数组乘积minDp，这是因为如果nums[i]是负数，此时的最大子数组乘积应当为nums[i]*minDp[i-1]
#### [450. 删除二叉搜索树中的节点](https://leetcode.cn/problems/delete-node-in-a-bst/)
分情况讨论：
1.如果节点是null，return null
2.如果节点是叶子节点，直接return null，删除这个节点本身即可
3.如果节点只有左子节点或只有右子节点，返回他的子节点即可
4.如果既有左子节点又有右子节点，需要找到他右子树中的最小节点，也就是右子树的最左侧节点minNode，找到之后把该节点的val赋给要删除的节点val，并调用删除方法本身，去删除minNode
删除节点的递归方法要有返回值，返回当前操作的节点root
#### [1. 两数之和](https://leetcode.cn/problems/two-sum/)
利用哈希表，每次把num作为哈希表的key，下标当做value，存到哈希表里
#### [39. 组合总和](https://leetcode.cn/problems/combination-sum/)
回溯，注意这题求的是组合而不是排列，所以回溯函数要传入一个start参数来确定遍历起始的位置，防止产生重复解。这题要注意：每个数字允许使用多次，下一轮搜索的起点依然是start而不是start+1
#### [93. 复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)
回溯解决切割字符问题，backtrack方法一个参数是当前path，一个是当前处理到的字符串位置start，终止条件是path长度为4并且start>=s.length（字符串处理完毕了），代表找到了一个结果，或者path长度大于4直接终止递归。回溯过程是从start位置开始用substring(start,i+1)截取一部分字符串，并检查该字符串是否符合ip地址要求，如果合法就继续执行回溯。
#### [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
二分查找，由于数组是旋转的，可以分两种情况：1.left~mid区间是升序的 2.mid~right区间是升序的，在这两种情况中分别判断target是否在这个升序区间内，如果是就把查找范围缩小到升序区间中，否则就去另外一个区间。
#### [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)
设计题，我们用一个map维护LRU缓存内部的数据，map头部是最久未使用的缓存数据，map尾部是最近使用的数据，所以我们在get和put的时候都，如果key存在我们都需要先删除该key再重新set，把他放到map尾端。在put的时候如果key不存在，我们在set之前要检查map的size是否超过缓存容量，如果超过了容量，利用map.keys().next().value获取头部第一个元素的key值并删除
#### [468. 验证IP地址](https://leetcode.cn/problems/validate-ip-address/)
分情况判断，如果包含.可能为ipv4，分割为数组后检查长度是否为4，并且检查每一项长度是否在1~3之间，并且不包含前导0，每一位都必须为数字，转换为数字后不能大于255。如果包含:可能为ipv6，检查数组长度是否为8，并检查每一项是否在0~9之间，或转换为小写在a~z之间
#### [15. 三数之和](https://leetcode.cn/problems/3sum/)
排序+双指针，先将数组升序排列，之后遍历数组，用两个指针指向i之后数组剩余部分的头部下标和尾部下标，如果nums[left]+nums[right]+nums[i]<0，左指针右移；如果nums[left]+nums[right]+nums[i]>0，右指针左移；如果等于0，返回当前三个数，左指针右移，右指针左移继续寻找。本题要求不包含重复解，所以我们在遍历时遇到nums[i] === nums[i-1]需要跳过，并且在找到一组解后，移动左右指针时，如果发现和之前的指针的数一致：nums[left] === nums[left+1]，nums[right] === nums[right-1]，也要跳过。
#### [8. 字符串转换整数 (atoi)](https://leetcode.cn/problems/string-to-integer-atoi/)
首先用while循环去除前缀空格，再判断+/-，之后遍历每一项看是否是数字，要注意处理2**31越界情况
#### [103. 二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)
双端队列+层序遍历，和一般层序遍历的区别就是当需要从右往左打印时，将节点unshift到双端队列头部；需要从左往右打印时，直接push到队列尾部
#### [138. 复制带随机指针的链表](https://leetcode.cn/problems/copy-list-with-random-pointer/)
哈希表，先遍历一次链表，简历旧链表节点与新链表节点的mapping关系，再遍历第二次链表，复制旧链表中的next,random指针关系：map.get(cur).next = cur.next ? map.get(cur.next) :null
#### [47. 全排列 II](https://leetcode.cn/problems/permutations-ii/)
回溯，这题数组中有重复元素，所以排列时要去重，经典的去重方法是先将数组排序，并且处理过一个元素时将它标记为null，下一层递归时跳过为null的元素，同时检查当前位置的元素和前一个位置的元素是否相等，如果相等也跳过。
#### [31. 下一个排列](https://leetcode.cn/problems/next-permutation/)
双指针，第1步：先从右往左遍历，找到第一个nums[i]<nums[i+1]，左指针left=i；第2步：再次从右往左遍历，找到第一个nums[i]>nums[left]，右指针right=i；第3步：交换left和right位置的元素，再将right~nums.length-1区间的元素进行反转即可（如果第1步找不到nums[i]<nums[i+1]，说明整个数组都是单调不递增的，直接跳过第2步执行第3步反转整个数组即可）
#### [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
动态规划，dp数组的每一项为一个数组，dp[i][0]代表如果第i天还持有股票，我们身上的现金最大值；dp[i][1]表示如果第i天不持有股票，身上现金的最大值。之后递推dp[i][0]时考虑两种情况：当天买入或当天未买入，递归dp[i][1]时考虑两种情况：当天卖出或当天未卖出，两者取最大值作为dp[i][0],dp[i][1]的值。
#### [面试题 04.06. 后继者](https://leetcode.cn/problems/successor-lcci/)
本题有两种解法：1.不利用二叉搜索树特性，我们把这棵树当成一棵普通的二叉树处理，直接进行中序遍历，每次遍历时记录一下当前节点为pre，下一次遍历时如果发现p===pre，就直接返回当前节点；2.利用二叉搜索树特性，判断如果root.val<=p.val，说明p只可能在root的右子树上，递归调用方法检查右子树；如果root.val>p.val，有可能当前节点就是p的下一个节点，也有可能p的下一个节点在root.left的右子树上，我们递归调用方法查找root.left，如果返回null那么root就是我们要找的下一个节点，否则就是方法的返回值
#### [41. 缺失的第一个正数](https://leetcode.cn/problems/first-missing-positive/)
原地哈希，题目要求用常数级别的解决方案，所以不能新建一个哈希表了，直接遍历nums，如果发现nums[i]>0&&nums[i]<nums.length&&nums[i] !== nums[nums[i]-1]，就一直交换他知道它被交换到正确的位置上，比如nums[0]=1,nums[1]=2...，交换完之后我们再次遍历nums，此时第一个发现的nums[i]!==i+1就是缺失的第一个正数，返回i+1，如果所有数都被放置在正确的位置，就返回nums.length+1
#### [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)
贪心，先按照左边界升序排列，设置一个初始左/右边界为第一个区间左/右边界，然后从第二项开始遍历区间数组，如果当前项左区间小于等于right，更新right为right和当前项右边界的最大值，否则就把当前区间push到ret数组中，并更新left，right，上面的循环没有push最后一个区间，最后要push一下
#### [32. 最长有效括号](https://leetcode.cn/problems/longest-valid-parentheses/)
初始化一个mark数组，默认每一项都是0，用栈模拟一遍，将所有无法匹配的括号的位置标记为1：遍历字符串，如果是(就入栈，如果是)检查栈中是否有元素，如果没有该位置标记为1，最后检查栈中剩余的元素，即无效的(，把他们也标记为1。最后遍历mark数组，寻找最长的连续0的长度
#### [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/)
后序遍历，计算出每个节点的高度然后return给上一层，在计算节点高度的同时假设直径经过该节点，计算出当前直径并更新全局直径，最后遍历完每个节点就得到了最大的全局直径。
#### [91. 解码方法](https://leetcode.cn/problems/decode-ways/)
动态规划，由于一个字母只能由1位或2位数字得到，所以在条件都满足的情况下（第二位数字不为0，i>0且第一位数字不为0且数字不大于26），dp[i]=dp[i-2]+dp[i-1]，初始化dp=[1]，表示空字符串有一种解码方法，这样递推公式才成立。
#### [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)
动态规划，dp[i][j]表示字符串s的第i到j个字母组成的子串是否是回文子串，并且我们初始化一个left和right表示回文子串的最大边界，递推时有两种情况，一种是s[i]!==s[j]，此时i~j区间一定不是回文子串，dp[i][j]=false；另一种情况是s[i]===s[j]，此时如果j-i<=1，一定是回文子串，否则依赖于dp[i+1][j-1]是不是回文子串。dp[i][j]是从dp[i+1][j-1]推导而来，所以遍历顺序是i从s.length开始递减遍历，j从0开始递增遍历。 
#### [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)
利用二叉搜索树中序遍历得到的是一个升序数组特性。
#### [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)
快慢指针解法，快指针一次走两步，慢指针一次走一步，如果最终能相遇说明有环
#### [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)
利用栈，如果是左侧符号就push到栈中，如果是右侧符号，检查当前栈的最后一项是不是对应的左侧符号，如果不是return false，最后检查stack的长度是否为0，是的话return true（以防有多余的左侧符号）
#### [210. 课程表 II](https://leetcode.cn/problems/course-schedule-ii/)
拓扑排序，与课程表第一题类似，只是在从队列中弹出入度为0的课程时记录一下课程编号，最后判断记录数组长度是否等于课程数，如果等于说明可以学完所有课程，返回记录数组，否则返回空数组。
#### [240. 搜索二维矩阵 II](https://leetcode.cn/problems/search-a-2d-matrix-ii/)
Z字型搜索，定义初始位置为矩阵右上角的点matrix[m][n]，如果matrix[m][n]<target，可以排除当前行，m++；如果matrix[m][n]>target，可以排除当前列，n--；如果在下标越界前能找到target就是返回true，否则返回false
#### [168. Excel表列名称](https://leetcode.cn/problems/excel-sheet-column-title/)
创建一个结果数组，每次在数组的头部添加columnNumber%26得到的字母，再将columnNumber = Math.floor(columnNumber/26)，要注意1而不是0转换的结果是A，所以我们在每次转换前要将columnNumber -1
#### [239. 滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)
维护一个单调队列，队列中存放的是数组下标，初始化时向队列push k个元素，queue[0]就是当前滑动窗口中最大的元素，把他push到结果数组中，然后窗口向右滑动，滑动时检查单调队列的第一项，也就是前一个滑动窗口的最大值是否是左边界，如果是的话就shift该元素，然后push进右窗口的新元素，并维护queue的单调性，最终遍历完数组，就得到了每个滑动窗口的最大值。
#### [142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)
快慢指针，先类似环形链表I那样定义一个fast指针一次走两步，一个slow指针一次走一步，如果有环他们会在一个点相遇，然后我们再初始化一个指针指向head，让他和slow节点一起一次走一步，他们最终会在入环点相遇。
#### [46. 全排列](https://leetcode.cn/problems/permutations/)
基本回溯题，套公式即可
#### [72. 编辑距离](https://leetcode.cn/problems/edit-distance/)
动态规划，首先初始化二维dp数组，dp[i][j]表示word1的0~i位替换为word2的0~j位最小操作步数，初始化dp[0][j]=j和dp[i][0]=i，表示从i位的字符串变成0位需要删除i次。之后进行递推，分两种情况：1.word1[i-1] === word2[j-1]，这时dp[i][j]=dp[i-1][j-1]，因为不用做任何修改；2.word1[i-1]！== word2[j-1]，有三种可能的操作：1)由dp[i-1][j-1]得来，替换word1最后一位字母，所以是dp[i-1][j-1+1；2)由dp[i-1][j]得来，删除word1最后一位字母，所以是dp[i-1][j]+1；3)dp[i][j-1]得来，删除word2最后一位字母，所以是dp[i][j-1]+1，这三种情况取最小值就是dp[i][j]最终的值，最后返回dp[m][n]即可。
#### [64. 最小路径和](https://leetcode.cn/problems/minimum-path-sum/)
动态规划，计算从上面走下来和从左边走过来的路径和Math.min(dp[i-1][j]+grid[i][j],dp[i][j-1]+grid[i][j])，取最小值，就是当前的最小路径和。
#### [剑指 Offer 51. 数组中的逆序对](https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)
归并排序，对数组进行归并排序得到升序数组，在合并左右两个有序数组时，当right数组当前的元素小于left数组当前的元素，就把当前left数组剩余的长度加到逆序对数量ret中。
#### [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)
二分查找，每次检查nums[mid]与nums[right]大小，若小于说明右边都是升序的，最小值再左区间，否则就在有区间。注意这题while循环的条件是left<right，因为如果left===right，区间长度为1，说明我们已经可以结束二分查找，不用再继续循环了；还有一点，当nums[mid] < nums[right]，去掉右区间时right=mid而不是mid-1。最后返回nums[left]就是数组中的最小值。
#### [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)
创建一个新链表虚拟头节点，然后遍历两个链表，哪个val小就拼到新链表后面，直到某一个链表没有节点了，最后把还剩余节点的链表拼到新链表后面。
#### [224. 基本计算器](https://leetcode.cn/problems/basic-calculator/)
括号展开+栈，括号会影响一个数字前面的运算符，所以我们尝试打开所有括号，得到没有括号，新的表达式，用一个栈记录每一层括号外面的运算符，1代表+，-1代表-，默认有一个值1，表示整个表达式最外面的符号是+。遍历字符串：遇到空字符直接忽略，遇到左括号，将当前的符号sign push到栈中，遇到右括号弹出栈最后一个符号，遇到+用1（加号）乘以stack顶部的符号，得到展开括号后的符号，遇到-则用-1乘以stack顶部的符号，这样sign是展开括号以后正确的运算符号，最后如果遇到数字了，用循环遍历完所有连在一起的数字字符，将他转换为一个number，用sign乘以number再累加到结果上，就完成了运算。
#### [76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)
滑动窗口，用两个map维护s，t中字母的出现次数，先遍历t，生成tMap。之后开始滑动窗口，左移时sMap中字母出现的次数-1，之后开始右移，直到tMap中所有字母出现的次数都小于等于sMap中字母的出现次数，这时我们找到了一个覆盖子串，更新全局覆盖子串的左右边界，最后返回左右边界截取的s子串。要注意一个边界情况，我们默认的全局覆盖子串左边界为-1，如果到最后他仍为-1，代表滑动窗口从未满足过要求，此时我们返回''。
#### [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
两次二分查找，第一次找到目标的开始位置，第二次找到目标的结束位置。要注意查找开始位置min时最后min=left，超找结束位置max时最终max=right。
#### [110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)
后序遍历，自底向上地返回每个节点的高度，返回前判断左右两个子节点的高度差是否大于1，如果大于1结果就是false，如果所有节点左右子树高度差都满足小于等于1就返回true。
#### [69. x 的平方根](https://leetcode.cn/problems/sqrtx/)
二分查找，left初始为0，right为要查找的数x，注意最后返回的值是right，因为mid**2<x从而left=mid+1，有可能错过答案，此时left有可能会比正确答案大从而错过答案。
#### [295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/)
利用两个堆，一个最大堆max，存储数组前半部分较小的数据，一个最小堆min，存储数组后半部分较大的数据，且约定如果数组长度是偶数，两个堆size一致，如果数组长度是奇数，最大堆size比最小堆size大1。添加数据时先检查最大堆是否为空，如果为空说明数据流中当前没数据，直接push到max中，如果max不为空，检查数字是否小于最大堆的堆顶元素，如果小就push到最大堆中，否则push到最小堆中。之后我们要进行平衡，检查两个堆的size差是否超过1，超过就pop一个堆的堆顶元素然后push到另一个堆中。求中位数就检查两个堆的size总和，也就是当前数据流的总长度，为奇数就返回最大堆的peek元素，否则就返回两个堆的peek元素的平均值。
#### [173. 二叉搜索树迭代器](https://leetcode.cn/problems/binary-search-tree-iterator/)
利用BST中序遍历为升序数组的特性，先扁平化为数组，然后用指针进行遍历。
#### [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
递归，前序遍历数组preorder的第一项一定是当前树的root节点，然后用这个root节点的值分割中序遍历数组inorder，左半部分就是左子树，右半部分就是右子树，用同样的位置分割preorder，然后递归地生成左子树和右子树。
#### [23. 合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)
归并排序思想，递归地把lists从中间对半拆开直到lists长度为1，然后俩俩进行合并排序，合并的过程就是21.合并两个有序链表，最后返回排序完的链表。
#### [剑指 Offer 33. 二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)
递归，后序遍历数组的最后一个元素是当前树的root节点，从数组中弹出这个元素作为rootVal，之后遍历数组，找到第一个比rootVal大的元素下标index，之后继续遍历，index后面的所有元素都应当比rootVal大，如果存在比rootVal小的元素直接返回false，否则继续递归地继续处理以index为界，左半部分数组和右半部分数组，即root节点的左右子树，只有他们都满足上述条件，才是一颗二叉搜索树。
#### [208. 实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/)
内部维护一个对象children模拟树形结构，insert的时候遍历字符串，生成树形结构的对象，最后一位字母要加上一个childre.end=true的属性，标记这是最后一位字母。接着实现startsWith方法，同样遍历prefix字符串，如果对象中不存在当前字符的对象就return false，否则遍历到最后，返回当前的children对象；最后实现search方法，调用startsWith方法，如果得到的结果不为false，且存在end属性，代表存在这样一个单词。
#### [155. 最小栈](https://leetcode.cn/problems/min-stack/)
内部除了维护一个栈stack外，还维护一个辅助栈min，min的最后一项即当前栈中的最小值，每次getMin时返回min最后一项即可，push元素val时比较min顶部元素和val的大小，把小的那个push到min中，弹出元素时stack和min都弹出顶部元素即可。
#### [92. 反转链表 II](https://leetcode.cn/problems/reverse-linked-list-ii/)
首先遍历链表，到left节点前一个节点记为tmp，然后从left节点开始翻转链表，反转方式同206题反转链表一样，反转完之后将链表连接回原来的链表，具体方式就是将tmp.next.next赋值为cur，tmp.next赋值为pre。
#### [428. 序列化和反序列化 N 叉树](https://leetcode.cn/problems/serialize-and-deserialize-n-ary-tree/)
我的解法，利用递归将N叉树转换为{val:1,children:[]}形式的对象，val利用node的val直接生成，children生成的方式为obj.children = node.children.map(item => dfs(item,{}))。
#### [24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)
首先创建一个虚拟头节点dummy，令pre=dummy，从pre开始遍历链表，当pre.next和pre.next.next都存在时，需要交换这两个节点first和second，交换节点有四步：1.首先获取scrond.next节点third 2.将second.next指向first，完成子链表反转 3.令pre.next=second,first.next=third，将子链表连接回原来的链表中 4.将pre=first，继续准备下一轮反转，最后返回dummy.next。
#### [386. 字典序排数](https://leetcode.cn/problems/lexicographical-numbers/)
迭代解法可以做到空间复杂度O(1)，首先定义一个变量j代表当前处理的数，初始值为1，然后开始循环，因为要排列1~n，所以要循环n次，每次循环ret数组中先将j push进去，因为字典序排序为[1,10,100...]，所以下一个应当检查j*10是否小于等于n，如果成立就让j*=10，继续检查，否则就应当检查11,12,13...一直到19，也就是j%10===9，或者j>n，此时就要让j = Math.floor(j/10)，回退一位继续检查。
#### [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)
这道题从后向前遍历可以做到不需要额外创建一个结果数组，做到O(1)空间复杂度。我们初始化三个遍历：i表示nums1最后一个元素的下标，j表示nums2最后一个元素的小标，k表示当前填充到nums1位置的下标。开始遍历，只要i>=0或j>=0循环就继续，如果当前nums1[i]>=nums2[j]或者j<0，此时填充nums1[i]，否则填充nums2[j]，最终就填充完了nums1。
#### [384. 打乱数组](https://leetcode.cn/problems/shuffle-an-array)
洗牌算法，Solution类内部维护一个nums数组存储初始数组，reset方法返回初始数组，shuffle方法首先创建一个nums数组的拷贝copy，之后从后往前循环，每次交换当前元素copy[i]和0~i区间随机下标的元素。
#### [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists)
可以用哈希表来做，遍历headA把每个节点添加到一个set中，再遍历headB，如果两个链表相交第一个出现的重复节点就是交点。还可以用双指针做，将两个链表相连，headA->headB和headB->headA，此时得到的两个链表长度相等，如果他们存在交点，他们一定会在相同的位置找到相同的节点。
#### [62. 不同路径](https://leetcode.cn/problems/unique-paths)
动态规划，除了第一行和第一列的方法数等于1外，其他每个格子dp[i][j] = dp[i-1][j]+dp[i][j-1]。
#### [51.N 皇后](https://leetcode.cn/problems/n-queens)
经典回溯题，我们用一个path数组，下标代表行，数值代表列，来表示棋子放置结果。backtrack函数的参数为path和当前行数row，终止条件为path的长度为n，这时候我们把path数组转换为题目要求的字符串形式并且return。然后我们开始循环，因为每次递归都是在摆放当前row的棋子，所以我们只要遍历列col就可以了，我们设置一个canNotSet变量代表是否能在该列摆放棋子，如果path中存在棋子满足c===col说明同一列有棋子，如果Math.abs(c-col)===Math.abs(r-row)，说明对角线上有棋子，均不能摆放，如果不满足上面两个条件我们就可以向path中push当前列，然后继续回溯递归。
#### [347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements)
先用一个哈希表建立每个元素与该元素出现次数的mapping关系，之后可以考虑对哈希表的keys数组按照出现次数进行排序，取前K项；或者用一个size为k的最小堆，最后返回堆中的元素arr。
#### [679. 24 点游戏](https://leetcode.cn/problems/24-game)
利用回溯，每次随机挑选数组中两个数进行四则运算，将运算结果和数组中剩余的结果组成新的数组，继续递归地执行24点游戏，直到数组中只剩一项并且结果等于24（由于运算精度问题不能直接用===判断，而是Math.abs(cards[0] - 24) < 1e-9），说明找到了一个解，返回true。为了省去不必要的运算，我们可以定义一个isValid变量，等于递归运算的结果，如果某一个四则运算返回true，之后就没必要再算了，都直接返回true。
#### [718. 最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray)
动态规划，二维数组dp[i][j]表示以下标i-1结尾的数组nums1和以下标j-1结尾的数组nums2，最长重复子数组的长度。递推时有两种情况：当nums1[i]===nums2[j]时，dp[i][j] = dp[i-1][j-1]+1；否则，由于重复子数组要求连续，dp[i][j]=0。我们要维护一个全局的最长重复子数组长度ret，每次递推时更新他，最后返回ret。
#### [198. 打家劫舍](https://leetcode.cn/problems/house-robber)
动态规划，dp[i]代表前i间房屋能偷窃到的最高总金额，由于我们不能偷连续的两间屋子，那么我们在面对第i间房子时有两个选择：1.不偷这一间 2.偷这一间，前一间不偷，那么就得到了状态转移方程dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])，注意dp数组的前两项要初始化dp[0]=nums[0]， dp[1] = Math.max(nums[0],nums[1])。
#### [122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)
动态规划，和买卖股票的最佳时机I类似，dp[i]=[当天持有股票身上的最大现金，当天不持有股票身上的最大现金]，只不过因为可以买卖多次，dp[i][0] = dp[i-1][1]-prices[i]和dp[i-1][0]的最大值而不是-prices[i]和dp[i-1][0]的最大值。
#### [123. 买卖股票的最佳时机 III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)
动态规划，和之前的买卖股票问题一个套路，只不过这题dp[i]有四个状态：第一次持有股票，第一次卖出过股票，第二次持有股票，第二次卖出过股票，递推公式还是根据前一天的持有/未持有股票的现金加上/减去当天的股价得到。
#### [394. 字符串解码](https://leetcode.cn/problems/decode-string/)
栈，维护一个栈，开始遍历字符串：1.当遇到数字时，解析出一个数字并入栈 2.当遇到[时，直接入栈 3.当遇到]时，从栈中弹出[前的字母和[，拼接成一个字符串，此时栈顶的元素一定为之前解析出的数字，用repeat方法构造出新的字符串并继续入栈 4.当遇到字母时，同样直接入栈。最后将栈中所有的字符串拼接起来就得到了结果
#### [40. 组合总和 II](https://leetcode.cn/problems/combination-sum-ii/)
回溯，因为是求组合，所以我们需要一个start下标，又因为题目要求不能包含重复的组合（[1,1,2],[1,2,1]算一个答案），所以我们要进行去重，去重有两种方法：1.排序数组，每次push一个元素到path中时将他标记为null，并且在下一次递归回溯时如果遇到元素是null或者元素和他前一位元素相等就跳过；2.排序数组，用一个set表示已经用过的元素，注意set是在每一层递归中创建的，标记的是本层递归使用过的元素，在push之前检查该元素是否在set中，如果存在直接continue，每次push元素到path中时向set中add这个元素。
#### [907. 子数组的最小值之和](https://leetcode.cn/problems/sum-of-subarray-minimums/)
单调栈，本题的核心思想是求一个数的辐射范围（在这个范围内的所有子数组最小值都是这个数），用这个数乘以辐射范围内的子数组数量就是这个范围内的子数组最小值总和，遍历求到每个数的辐射范围即可。要求辐射范围，其实就是求左边第一个比arr[i]小的数和右边第一个比arr[i]小的数，他们的下标范围之差就是辐射范围，所以我们需要用到单调栈，从前往后遍历求辐射范围左边界并存到一个数组let中，从后往前遍历求辐射范围右边界并存到一个数组right中，辐射范围子数组的个数为(i-left[i])*(right[i]-i)，子数组最小值之和就等于arr[i] * (i-left[i])*(right[i]-i)，累加上每一个和即可。
#### [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)
动态规划，这是一道完全背包问题，可以用画表格的方式来解，表格第i行表示只使用0~i种硬币，表格第j列表示凑j面额的钱。首先初始化dp=new Array(coins.length+1).fill(0).map(x=>new Array(amount+1).fill(Infinity))
然后开始遍历，外层循环遍历硬币，内层循环遍历amount，当i===0时， dp[i][j] = Infinity；当j===0时，dp[i][j] = 0，表示金额0用0个硬币凑；否则如果j>=coins[i-1]有递推公式dp[i][j] = Math.min(dp[i-1][j],dp[i][j-coins[i-1]]+1)，如果j<coins[i-1]，dp[i][j] = dp[i-1][j]。最终看dp[coins.length][amount]是否是Infinty，如果是就返回-1，代表凑不到。
#### [96. 不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)
动态规划，我们假设dp(i)表示有i个节点的BST数量，f(j)表示以j为root节点的BST数量，那么可以得到dp(i)=f(1)+f(2)+f(3)+...+f(i)，而f(j)的左子树一定有j-1个节点，右子树有n-j个节点，所以又可以得到
f(j)=f(j-1)*f(n-j)，因而可以得到递推公式dp[i]+=dp[j-1]*dp[i-j]，初始化dp=[0]，表示空二叉树也算是一颗二叉树。
#### [109. 有序链表转换二叉搜索树](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/)
用快慢指针找到当前链表的中间节点，就是我们要构造的BST的root节点，然后我们以root节点为中点将链表一分为二，递归地构造root的左子树和右子树。要注意寻找链表中点slow时要维护一个变量preSlow，记录slow的前一个节点，在构造左子树时要将preSlow.next=null，断开preSlow和slow之间的连接，否则在构造左子树时head就还是之前完整的链表而不是前半部分的链表了。
#### [139. 单词拆分](https://leetcode.cn/problems/word-break/)
动态规划，这道是一个完全背包问题，用背包里的单词拼凑出想要的字符串。核心原理是，我们检查0~i位的字符串，并且内部循环遍历字典数组wordDict，如果发现字符串的最后wordDict[j].length位和wordDict[j]相等，此时字符串最后几位和字典单词匹配上了，我们只需要确认他的前几位，也就是dp[i-wordDict[j].length]是否为true即可，如果为true说明dp[i]就是true，0~i位字符串可以用字典中的单词拼出来，否则为false。这里我们要注意初始化dp时dp[0]=0，代表0个字符是可以拼凑出来的。
#### [402. 移掉 K 位数字](https://leetcode.cn/problems/remove-k-digits/)
若要保证剩下的数字小，要保证左边的数字尽可能小，所以我们可以贪心地得到一个结论：我们从左到右遍历num，当发现num[i-1]>num[i]，也就是出现了一个在左边较大的数字，此时丢弃num[i]肯定比丢弃num[i-1]导致剩下的数大，那么我们就应该将num[i-1]移除（前提是当前还能移除数字即k>0），这样我们就可以得知，num中的数字应当是尽量从左到右单调不递减的，考虑用单调栈来解决，维护一个单调不递减的栈stack，如果k>0且arr[i]<stack[stack.length-1]就从栈顶弹出元素，同时k--。如果检查完了整个数组k任然大于0，就要从栈顶弹出k个元素，因为栈顶元素肯定是相对栈底更大的。最后我们还需要去除前导0，将栈中的数字拼接成数字字符串。
#### [166. 分数到小数](https://leetcode.cn/problems/fraction-to-recurring-decimal/)
哈希表，先判断除数num和被除数den是否符号相同，符号不同结果前面要拼上'-'。之后将num和den都转换为绝对值进行计算，先看下num%den是否为0，为0的话说明能整除，直接返回符号加整除结果即可。否则可能是有限小数或者无限循环小数，我们先简历一个哈希表map，map中存放num%den的结果作为key，value为key第一次出现的下标，之后我们开始循环，不断地求num%den，如果哈希表中不存在这个结果就继续循环，将Math.floor(numerator/denominator)累加到一个str中作为小数部分，如果num%den===0说明是有限小数，此时要return，最后当我们找到了小数循环的部分后我们要用map[numerator]获取这个循环开始的下标（前面可能有许多0）,截取除这段放到括号中，拼上前面的符号和整数部分还要前置0返回。
#### [974. 和可被 K 整除的子数组](https://leetcode.cn/problems/subarray-sums-divisible-by-k/)
这题和560.和为K的子数组很类似，用前缀和+哈希表来解，只不过这里是判断i~j区间的子数组%k===0，也就是prefixSum[j]-prefixSum[i] % k === 0，根据同余定理，prefixSum[j]-prefixSum[i] % k === 0 等价于 prefixSum[j] % k === prefixSum[i] % k，所以这题我们以prefixSum % k的结果module作为哈希表的key，出现次数作为value，从数组第0项开始依次求前缀和，当在map中出现相同的module，就加上map[module]。要注意，如果负数%k，得到的是负数，此时要把他加上k得到正的余数，负数余数x等价于x+k，比如-3 % 7 = -3, 4 % 7 = 4，-3 和 4出现次数应该记到哈希表的一组key里面，因为10+(-3)=7,10+4=14，都能被7整除，-3和4其实是等价的。
#### [252. 会议室](https://leetcode.cn/problems/meeting-rooms/)
贪心，先将intervals按照结束时间升序排列，设立一个右边界为第一场会的结束时间，然后从下标1开始遍历intervals，检查每场会议的开始时间是否小于右边界，如果小于说明时间有重叠，返回false；否则更新右边界为当前会议的结束时间，继续循环，到最后都没有重叠就返回true。
#### [337. 打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/)
树形动态规划，初始化两个map f和g，两个map的key都为当前节点，f的value表示偷该节点的房屋所能获取的最大收益，g的value表示不偷该节点的房屋所能获取的最大收益，由于每个节点依赖他的子节点的最大收益，所以我们进行后序遍历，如果偷该节点，那么他的左右子节点肯定不能偷了，此时最大收益就等于g(node.left)+g(node.right)，如果不偷该节点，那么左右子节点有可能偷有可能不偷，我们取这两者的最大值即可，所以此时最大收益为Math.max(f(node.left),g(node.left))+Math.max(f(node.right),g(node.right))，执行后序遍历方法，最后返回根节点f和g的最大值即可。
#### [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)
动态规划解法：初始化一个dp数组，dp[i]表示nums前i项的最长递增子序列长度，我们初始化时可以令dp每一项为1，因为最坏情况nums单调递减，最长递增子序列就是每个元素本身，为1。然后开始遍历nums，遍历到nums[i]时我们要还要遍历i之前每一项nums[j]，如果有nums[j]<nums[i]，那么dp的长度可能为dp[j]+1，我们要检查所有的nums[j]，找出dp[j]+1的最大值，最后我们遍历完了nums得到dp数组，要返回dp数组中的最大值Math.max(...dp)。
贪心+二分解法：考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小，维护一个数组arr，arr的长度就是最长递增子序列的长度，arr的每个元素arr[k]的值代表长度为k+1的最长递增子序列最后一个元素的值，arr中有一个初始值nums[0]，然后我们从第一项开始遍历nums，如果nums[i]>arr[arr.length-1]，就直接push到arr中；否则我们需要找到arr中第一个比nums[i]大的元素，并把他替换为nums[i]，寻找的过程可以用二分查找，最后返回arr.length
#### [287. 寻找重复数](https://leetcode.cn/problems/find-the-duplicate-number/)
如果题目不要求不修改原数组，我们可以用原地哈希的方法。既然题目要求不修改原数组和O(1)的空间复杂度，考虑用快慢指针，假设数组为[1,2,3,4,2]，我们把他看作一个链表，1->2->3->4->2，节点i的next指向nums[i]，已知数组中存在唯一的重复数，那么这个链表就是一个存在环的链表，之后这道题就可以转换为求环形链表的入环节点问题了：初始化一个快指针和慢指针，快指针一次走两步，慢指针一次走一步，他们会在某个点相遇，之后重置慢指针到起点，快慢指针每次都走一步，他们会再次相遇，相遇的点就是入环点，也就是数组中重复的数字。
#### [79. 单词搜索](https://leetcode.cn/problems/word-search/)
回溯，定义一个回溯方法bracktrack，参数分别为当前行i，当前列j，遍历到了word的第几个字母下标index，回溯的终止条件有以下几个：i和j越界，当前字母word[index]!==board[i][j]，以上这几种情况都直接return即可，如果word[index]===board[i][j]且index===word.length-1，代表沿着路径找到了单词的最后一个字母，单词被搜索到了，令ret=true同时return，不是以上几种情况，代表我们要继续往四个方向进行搜索，为了放在走回头路搜索，我们要把当前board[i][j]=null，在四个方向搜索完后再还原回原来的字母。写好了回溯方法，我们要遍历每一个格子board[i][j]，令这个格子作为起点开始执行回溯方法backtrack(i,j,0)。
#### [449. 序列化和反序列化二叉搜索树](https://leetcode.cn/problems/serialize-and-deserialize-bst/)
通过BST的后序遍历数组+中序遍历数组或者后序遍历数组+中序遍历数组可以还原BST，利用这个特性，在序列化时得到前序或后序遍历的数组，转换为字符串保存下来。反序列化时先得到前序遍历数组，然后对他进行排序得到中序遍历数组，然后就可以还原二叉搜索树了，还原方法参考105和106题。
#### [1095. 山脉数组中查找目标值](https://leetcode.cn/problems/find-in-mountain-array/)
三次二分查找，首先查找到山脉数组的顶点，根据mountainArr.get(mid+1)和mountainArr.get(mid)的大小关系判断，查找到顶点后山脉数组就被分为了左右两个数组，左边的升序数组，右边的降序数组，我们现在左边数组进行二分查找，找不到再去右边数组同样进行二分查找，如果都找不到最终返回-1。
#### [222. 完全二叉树的节点个数](https://leetcode.cn/problems/count-complete-tree-nodes/)
利用完全二叉树的特性，一颗完全二叉树分两种情况：1.是一颗满二叉树，此时他的节点数为2**height-1；2.不是一颗满二叉树，此时他的左右子树中必有一颗是满二叉树，我们一直递归地处理不是满二叉树的左/右子树，最后总会出现node是满二叉树的时候（叶子节点也是一颗满二叉树）。我们用while循环的方法计算一个节点的左右高度，如果左右高度相等，说明是一颗满二叉树，直接用公式返回节点数，否则他的节点数就等于左子树的节点数+右子树的节点数+1，调用该方法递归地计算左右子树的节点数即可。
#### [706. 设计哈希映射](https://leetcode.cn/problems/design-hashmap/)
我们用一个固定长度（比如2069）的数组作为内部存储数据的对象，然后写一个getHashCode方法生成hashCode，比如key%2069，随便写，只要保证不要随随便便就hashCode冲突就好了。之后重点就是处理hashCode冲突问题，我这里一般采用分离链接法，就是数组的每一个位置不是一个value而是一个链表，如果有冲突的就塞到链表最后，剩下的操作就是遍历链表了。
#### [37. 解数独](https://leetcode.cn/problems/sudoku-solver/)
回溯，遍历每一行每一列的格子board[i][j]，如果不是'.'就忽略，直接continue，如果不是就从1到9依次尝试填入，然后创建一个isValid方法检测该位置填了这个数字是否合法，如果合法就先填上，然后继续递归执行回溯方法填下一个数字，回溯方法会返回一个boolean值，代表这种填法是否有效，如果1~9都试完了还不行就返回false，最终返回true，这样我们在递归执行回溯方法时就能接收到这个返回值，如果为true就一层一层向上返回，不用再执行了。
#### [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)
贪心，初始化一个变量cover表示当前能够达到的最远下标，初始值为nums[0]，然后从0开始遍历，一直到cover，代表我们尝试当前能够作为起点的每一个格子，计算从该位置起跳能够到达的位置i+nums[i]，和cover比较取最大值更新cover，再继续下一轮尝试，如果发现cover>=nums.length-1，到达了数组最后一个下标，直接返回true，如果遍历完都无法达到最后一个下标，最后要返回false。
#### [486. 预测赢家](https://leetcode.cn/problems/predict-the-winner/)
动态规划，或者说记忆化搜索，我们初始化两个方法：firstHand和secondHand，分别表示先手摸牌能够获得的最大分数和后手摸牌能获得的最大分数，参数分别为当前排堆nums，当前剩下牌组的左下标l，右下标r。如果是先手摸牌，边界情况为l===r，此时我们别无选择，只能摸nums[l]并返回，否则我们有两种选择，摸下标为l或者r的牌，两种选择获得的分数分别为nums[l]+secondHand1(nums,l+1,r)和nums[r]+secondHand1(nums,l,r-1)，我们肯定要选最优解，也就是两者的最大值；如果是后手摸牌，边界情况也为l===r，此时对方会摸掉这张牌，所以return 0，否则对方也有两种选择，摸l或者r，因为对方也足够聪明，留给你的肯定是最小值，所以你能获得的分数为Math.min(firstHand1(nums,l+1,r),firstHand1(nums,l,r-1))。写好了这两个方法，我们直接调用先手方法firstHand(nums,0,n-1)，求出从完整的牌堆开始摸能够获得的最大分数，再用牌堆分数总和减去获得的分数，比较即可。上面只是递归，还没有进行记忆化，我们初始化两个数组fmap,gmap用来缓存i,j位置对应的分数，初始化每一项都为-1，递归时先检查fmap[i][j]或gmap[i][j]的值是否为-1，不是说明计算过，取缓存，同时也不要忘了计算过以后存缓存。
#### [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/)
二分查找，观察矩阵可以发现，我们将矩阵从左上角到右下角一行一行连起来就是一个升序数组，连起来之后进行二分查找即可。
#### [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/)
前闭后开地进行遍历，因为本题长n和宽m不一定相等，我们要取m,n的最小值min，通过Math.floor(min/2)得到要遍历的圈数loop，然后我们开始前闭后开地进行螺旋遍历，最后我们要判断下如果min%2===1，矩阵中间会有一行(n>m时)或一列(m>n时)需要单独遍历，最后要把这一行/一列进行遍历添加到ret中。
#### [437. 路径总和 III](https://leetcode.cn/problems/path-sum-iii/)
暴力递归法，我们初始化一个方法rootSum，接收一个节点和一个当前的target作为参数，返回从当前节点出发的路径和等于target的数量，边界情况为node===null，此时直接返回0；否则初始化一个结果ret，如果当前node.val===target，说明找到了一个解，ret++，然后我们继续递归地处理node.left和node.right，令ret+=rootSum(node.left,target-node.val)，ret+=rootSum(node.right,target-node.val)，最终返回ret。有了这个方法之后，我们只需对树的每个节点执行该方法求从出路径总和即可，首先对root节点本身调用rootSum求出路径数，然后再递归对左右子节点调用pathSum方法本身求得两个子树的路径总和，累加起来即最终的路径总和。
#### [442. 数组中重复的数据](https://leetcode.cn/problems/find-all-duplicates-in-an-array/)
原地哈希，遍历nums，将nums[i]放置到i+1下标位置，放置完后再次遍历nums，如果发现nums[i]!==i+1就push到ret数组中。
#### [135. 分发糖果](https://leetcode.cn/problems/candy/)
贪心，先考虑每个孩子左边的人，得到一个局部最优解，再考虑每个孩子右边的人，汇总起来得到全局最优解。我们初始化一个结果数组ret，长度等于ratings.length，初始每项值为1。首先我们从左到右遍历ratings数组，如果ratings[i] > ratings[i-1]，那么ret[i] = ret[i-1]+1；然后再从右往左遍历，如果出现ratings[i] > ratings[i+1]，那么ret[i] = Math.max(ret[i],ret[i+1]+1)，因为我们这时既要保证比右边孩子糖果多1，又要满足之前比左边孩子多的要求，两者取最大值，最终返回ret数组每一项求和。
#### [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/)
本题可以先将链表转换为数组，再判断数组是否回文，但是这样空间复杂度较高，利用双指针可以将空间复杂度降低到常数级。首先我们利用快慢指针，找到链表的中间位置，在慢指针前进的同时，将他经过的部分进行反转，也就是说当找到中点时链表的前半部分被反转了，此时我们判断一下fast节点是否为null，如果不为null说明链表的长度为奇数，此时我们需要令slow=slow.next，因为回文链表的中间节点不需要和任何节点对比。然后我们从中间的两个节点开始（一个为pre，一个为slow），往两边走，并依次对比节点的val，如果不一样返回false，直到pre或slow为null，对比完发现节点val都一样就返回true。
#### [701. 二叉搜索树中的插入操作](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)
递归，终止条件为当前root节点为null，就直接新建一个节点并返回；否则比较root.val和val的大小关系，如果root.val>val，说明要插入到左子树，那么递归对左子树执行该方法： root.left = insertIntoBST(root.left,val)，否则就插入到右子树： root.right = insertIntoBST(root.right,val)，最终返回root。
#### [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
层序遍历公式，用一个队列维护当前层级要遍历的节点，每次shift一个节点进行处理，然后将它的左右自己子节点push到队列中。
#### [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)
递归，终止条件为当前root为null，直接返回null；否则就递归地令left=invertTree(root.left)，right = invertTree(root.right)，然后将root.left=right,root.right=left，最后返回root。
#### [42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/)
单调栈，这道题我们其实就是求一个凹槽左右两边第一个比他高的墙壁，所以就是用单调栈求第一个比他大的元素，我们维护一个栈头到栈底单调递增的栈stack，栈中存放的是元素下标（因为我们算面积时要利用下标求宽度），stack中初始有一个下标0，然后我们从第1项开始遍历height数组，根据单调栈的公式，当stack.length && height[stack[stack.length-1]] < height[i] 时代表我们找到了一个比stack[stack.length-1]大的元素，此时凹槽就是top = stack.pop()，凹槽右边的墙是i，那么我们接下来需要找左边的墙，由于stack是单调递增的，那么加入stack.length>0，那么此时栈顶的元素一定大于height[top]，也就是说左边的墙preTop = stack[stack.length-1]，这样我们拿到了左右墙的下标就可以求出宽度w=i-preTop-1，而高度为Math.min(height[i],height[preTop]) - height[top]，也就是左右两边墙的高度最小值减去凹槽高度，我们将结果ret累加上h*w即可，最后不要忘记stack.push(i)。
#### [253. 会议室 II](https://leetcode.cn/problems/meeting-rooms-ii/)
贪心，一道典型的上下车问题，先将intervals转换为一个events数组，events数组中的每一项event也是一个数组，event[0]代表时间节点，event[1]代表开会还是散会，1代表开会，-1代表散会，然后我们对events数组按照event[0]升序排列，如果event[0]相同，散会在前开会在后，然后我们遍历events数组，求每一个时间节点有几个会议在开（开会就+1，散会就-1），并维护一个全局最大值，最终返回这个最大值即可。
#### [84. 柱状图中最大的矩形](https://leetcode.cn/problems/largest-rectangle-in-histogram/)
单调栈，这题和接雨水类似，只不过这里求的是第一个比数两边第一个比他小的数，以这个数为高度的矩形宽度等于右边第一个比他小的数的下标，减去左边第一个比他小的数的下标再减1。因为heights第一个元素没有左边元素，最后一个元素没有右边元素，为了避免判断我们直接在heights头部尾部各加一个0。之后就是单调栈公式了，stack有一个初始值下标0，遍历heights,当stack.length && heights[i] < heights[stack[stack.length-1]]，矩形的右边界就确定了，为i，左边界为此时stack顶部元素stack[stack.length-1]，面积就等于(i-left-1)*heights[top]，维护一个全局最大面积，不断比较更新即可。
#### [232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)
利用两个栈，一个栈stackIn负责进元素，一个栈stackOut负责弹出元素，push操作时就直接向stackIn中push元素；pop操作时首先检查stackOut是否为空，如果为空，就将stackIn中的元素依次弹出并push到stackOut中，这样stackOut顶部的元素就是队列头部的元素，弹出即可，如果stackOut不为空，就直接弹出他顶部的元素；peek操作时我们调用this.pop()并缓存下来，然后再把该元素push到stackOut中，物归原主，最后返回缓存的元素即可；empty操作直接检查stackIn和stackOut是否都为空即可。
#### [946. 验证栈序列](https://leetcode.cn/problems/validate-stack-sequences/)
创建一个stack模拟操作即可，首先创建一个外层循环用来从pushed数组将元素push到stack中，然后内层循环将poped数组中的元素弹出stack，循环条件为stack.length && popped.length && stack[stack.length-1] === popped[0]，最后检查stack是否为空，为空就返回true。
#### [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-2/)
动态规划，首先创建一个二维dp数组，dp[i][j]表示用i种硬币凑总金额j，一共有多少种组合数，然后我们两层for循环开始填充dp数组，当j===0时，dp[i][j]=1，表示金额0有一种方法凑到，这样递推公式才能成立；当i===0时，我们令dp[i][j] = j%coins[i] === 0 ? 1: 0，因为只有最小的面额能被j整除才会有1种方法，否则就为0；不是以上这两种情况，我们还得判断，如果j<coins[i]，那么dp[i][j] = dp[i-1][j]，并不能用上coins[i]；否则dp[i][j] = dp[i-1][j] + dp[i][j-coins[i]]，当前方法总数等于不使用coins[i]的方法总数加上至少用一个coins[i]的方法数dp[i][j - coins[i]]，最后返回dp[coins.length-1][amount]。
#### [115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)
动态规划，m为s.length，n为t.length，s[i:]表示字符串s从i到末尾的区间中，t[j:]表示字符串t从j到末尾的区间，dp[i][j]表示s[i:]的子序列中t[j:]出现的次数，我们从后向前遍历s和t，当j=n时，t的长度是0，空字符串是任何字符串的子序列，所以dp[i][n]=0；当t=m时，s长度是0，任何字符串都不是空字符串的子序列，因此dp[m][j]=0；当j!=n，t!=m时，有两种情况，一种是s[i]!==t[j]，此时s[i]不能和t[j]匹配，因此只考虑 t[j:] 作为s[i+1:] 的子序列，子序列数为 dp[i+1][j]；当s[i]===t[j]时，可以让s[i]和t[j]匹配，也可以不匹配，因此dp[i][j] = dp[i+1][j+1]+dp[i+1][j]，匹配或不匹配的子序列数之和，最后返回dp[0][0]即可。
