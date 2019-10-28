/*
 * @lc app=leetcode.cn id=1025 lang=javascript
 *
 * [1025] 除数博弈
 *
 * https://leetcode-cn.com/problems/divisor-game/description/
 *
 * algorithms
 * Easy (68.57%)
 * Likes:    50
 * Dislikes: 0
 * Total Accepted:    9.9K
 * Total Submissions: 14.4K
 * Testcase Example:  '2'
 *
 * 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
 * 
 * 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：
 * 
 * 
 * 选出任一 x，满足 0 < x < N 且 N % x == 0 。
 * 用 N - x 替换黑板上的数字 N 。
 * 
 * 
 * 如果玩家无法执行这些操作，就会输掉游戏。
 * 
 * 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：true
 * 解释：爱丽丝选择 1，鲍勃无法进行操作。
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：false
 * 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    /*
      方法二

      动态规划

      将所有小于等于N的解都找出来， 基于前面的， 递推后面的
      如果i的约数里面存在false的情况（即输掉），则当前i应为true,
      如果没有，则为false
      N = 1， 爱丽丝会输
      N = 2， 爱丽丝先拿个1， 会赢
      N = 3， 爱丽丝开始只能拿1，这是鲍勃处于N等于2的情况， 所有爱丽丝会输
      N = 4， 爱丽丝拿个1， 鲍勃会处于N等于3的情况， 所有爱丽丝会赢
      ...
      得出结论，如果i的约数里面存在false的情况（即输掉），则当前i应为true,
      如果没有，则为false

      Accepted
      40/40 cases passed (104 ms)
      Your runtime beats 5.22 % of javascript submissions
      Your memory usage beats 100 % of javascript submissions (34.4 MB)
    */
    let dp = []
    dp[1] = false
    dp[2] = true
    for(let i = 3; i <= N; i++) {
      dp[i] = false
      for(let j = 1; j < i; j++) {
        if(i % j === 0 && dp[i - j] === false) {
          dp[i] = true
          break
        }
      }
    }
    console.log(dp)
    return dp[N]
};
// @lc code=end

/*
  方法一

  如果N为奇数，奇数的所有因子都是奇数， 所以 N-x 一定会是偶数，
  假设a拿了一个奇数， 那么轮到b的时候， b拿到的肯定是偶数，此时
  b只要进行 -1， 还给a一个奇数，那么这样子b一直会拿偶数， 到最后
  b一定会拿到最小偶数2, a就输了

  所有，如果开始爱丽丝拿到N为奇数，她必输， 如果N为偶数，她只要
  进行 -1， 让鲍勃拿到奇数，她就赢了

  return N % 2 === 0

  Accepted
  40/40 cases passed (64 ms)
  Your runtime beats 86.19 % of javascript submissions
  Your memory usage beats 100 % of javascript submissions (33.4 MB)
*/
