/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */
/**
 * 
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return []
    let queue = []
    let result = []
    let item = null
    queue.push(root)
    while(queue.length !== 0) {
        let arr = []
        let len = queue.length
        for(let i = 0; i < len; i++) {
            item = queue.shift()
            if (item.left) {
                queue.push(item.left)
                arr.push(item.left.val)
            }
            if(item.right) {
                queue.push(item.right)
                arr.push(item.right.val)
            }
        }
        result.push(arr.concat())
    }
    result.unshift([root.val])
    result.pop()
    return result.reverse()
};

