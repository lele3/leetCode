/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * 
 * @param {TreeNode} root 
 * @return {number} 最小深度
 */
function minDepth(root) {
    if (!root) return 0
    if (root.left === null && root.right !== null) {
        return minDepth(root.right) + 1
    } else if (root.left !== null && root.right === null) {
        return minDepth(root.left) + 1
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

/** 
 * 思路
 * 1. 首先要明白最小深度，即根节点到最近叶子节点的所经过的节点数
 * 2. 当根节点为 null 时， 返回0
 * 3. 当遇到只有一个节点时， 例如只有左节点，那最小深度的计算就一定在左节点身上
 * 4. 当左右子节点都有时， 我们就要比较左右节点的最小深度，取最小的。
 * 
 * 
 * 错题时错误思路
 * 1. 没有考虑子节点只有一个的情况，导致提交 [1,2] 这样的树失败
 * 2. 递归方法私用不恰当
 * 以下是错误❌代码
 *  /**
 * @param {TreeNode} root
 * @return {number}
 *
var treeMinDeep = function (node, depth) {
    if (node === null) return depth
    depth += 1
    let depth1 = treeMinDeep(node.left, depth)
    let depth2 = treeMinDeep(node.right, depth)
    return Math.min(depth1, depth2)
};


 * 
 * @param {TreeNode} root 
 * @return {number} 最小深度

function minDepth(root, depth) {
    if (!root) return 0
    return treeMinDeep(root, 0)
}

 * */

