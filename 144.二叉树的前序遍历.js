/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // 方法二， 广度优先搜索。节点放栈q，先进后出。从上到下迭代，放根→左→右
  if (!root) return [];
  const result = [];
  const q = [root];
  while(q.length) {
    let len = q.length;
    while(len--) {
      let node = q.pop();
      result.push(node.val);
      node.right && q.push(node.right);
      node.left && q.push(node.left);
    }
  }
  return result;
};
// @lc code=end

/**
 * 方法一： 递归遍历
 * var preorderTraversal = function(root) {
  const result = [];
  function preorder (root) {
    if (root === null) return;
    result.push(root.val);
    preorder(root.left);
    preorder(root.right);  
  }
  preorder(root);

  return result;
};

Accepted
68/68 cases passed (92 ms)
Your runtime beats 29.15 % of javascript submissions
Your memory usage beats 9.56 % of javascript submissions (38 MB)
 */