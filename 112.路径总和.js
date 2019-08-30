/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

 /**
  * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
  * 
  * 
  */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
    let result = []
    let total = 0

    function hasPath(root) {
      if (root === null) return false
      total += root.val
      if (root.left === null && root.right === null) {
        result.push(total)
      }
      hasPath(root.left)
      hasPath(root.right)
      total -= root.val
    }

    hasPath(root)
    return result.includes(sum) 
};


/**
 * Accepted
 * ✔ 114/114 cases passed (96 ms)
 * ✔ Your runtime beats 70.35 % of javascript submissions
 * ✔ Your memory usage beats 52.3 % of javascript submissions (37.1 MB)
 */

 /**
  * 思路：
  * 利用二叉树的前序遍历所有节点， 当遇到叶子节点的时候，将这条路径上节点的和存储到result数组中
  * 二叉树前序遍历每个节点至少会经过两次，当再次经过时，让total减去当前节点的值
  * 递归上面操作
  * 最后如果sum在数组result里， 则说明符合条件
  * 
  * 
  * 坑
  * LeetCode中最好不要使用全局变量，所以代码才会变成上面那个样子
  */
