/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  //本题其实不用特地用回溯法解数独，题目只是要求检查当前填入的数字是否合法，用哈希表即可
  //初始化三个map来记录每一行，每一列，每个3x3方格中每个数字的出现次数
  //因为board的长宽已知都为9，所以我这里直接用定长数组
  const rowMap = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const colMap = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subBoxMap = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  //遍历每一个方格
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      //如果方格中为.字符，跳过
      if(board[i][j] === '.'){
        continue
      }
      //map数组中下标会比实际数字小1，所以我们获取方格中的数字要-1
      let k = Number(board[i][j])-1
      //更新三个map
      rowMap[i][k]++
      colMap[j][k]++
      subBoxMap[Math.floor(i/3)][Math.floor(j/3)][k]++
      //如果任意一个map中该数字出现次数大于1，返回false
      if(rowMap[i][k] > 1 || colMap[j][k] > 1 ||subBoxMap[Math.floor(i/3)][Math.floor(j/3)][k]>1){
        return false
      }
    }
  }
  return true
}
