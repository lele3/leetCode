/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  let sumArr = [];
  let sum = '';
  function sumFun (root) {
    if (!root) return;
    sum += (root.val);
    if (root && !root.left && !root.right) {
      sumArr.push(sum);
    }
    sumFun(root.left);
    sumFun(root.right);
    sum = sum.slice(0, sum.length - 1);
  }
  sumFun(root);
  return sumArr.reduce((cur, total) => +cur + +total)
};
// @lc code=end

/**
 * 思路: 递归
 * 类似于前序遍历， 递归一直到叶子节点（root && !root.left && !root.right）
 * 将路径上的值拼起来， 组成这条路径上的和， 并存储在 sumArr 数组中
 * 遇到 !root 直接 return, 即递归的出口
 * 每次回退， 就将 sum 的长度 -1
 * 最后递归完成， sumArr 即存储的是每条路径上的和
 * 最后再对 sumArr 数组求和， 就得到了最后的结果
 * 
 * Accepted
   110/110 cases passed (84 ms)
   Your runtime beats 89.8 % of javascript submissions
   Your memory usage beats 5.15 % of javascript submissions (40.3 MB)
 */
