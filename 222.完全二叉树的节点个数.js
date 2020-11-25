/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  // 官方题解： 位运算 + 二分查找
  if (root === null) {
    return 0;
  }
  let level = 0;
  let node = root;
  while(node.left !== null) {
    level++;
    node = node.left;
  }
  
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  while(low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

var exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while(node !== null && bits > 0) {
    if (!(bits & k)) {
      node = node.left;
    } else {
      node = node.right;
    }
    bits >>= 1;
  }
  return node !== null;
}
// @lc code=end

/**
 * 利用队列对二叉树进行层序遍历， 记录节点个数
 * var countNodes = function(root) {
    if (!root) return 0;
    const queue = [];
    queue.push(root);
    let count = 0;
    while(queue.length) {
      const node = queue.pop();
      count++;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return count;
  };
 */
