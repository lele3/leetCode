/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 * 
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function Recursive(start, end, arr) {
   let mid = Math.ceil((start + end) / 2)
   let node = new TreeNode(arr[mid])
   
   if (start > end) return null
   
   node.left = Recursive(start, mid - 1, arr)
   node.right = Recursive(mid + 1, end, arr)
   return node
}
var sortedArrayToBST = function(nums) {
    let len = nums.length - 1
    return Recursive(0, len, nums)
};


// 解题思路
/**
 * 升序数组，转化成平衡二叉树，必然会取数组的中间点作为根节点
 * 以中间点将数组分为两部分，递归求取每个节点的左右子节点
 * 
 * 递归结束的标识
 * 只有当start > end的时候才会遍历完所有节点
 * 我错误的将start === end 也作为递归结束标识，此时最后一个节点还没有插入到当前构造的平衡二叉树中
 */
