/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
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
 * @return {number} 返回root节点左右子树的最大深度
 */
function treeMaxDeep (root, deep) {
    // 递归出口
    if ( root === null ) return deep
    deep += 1
    return Math.max(treeMaxDeep(root.left, deep), treeMaxDeep(root.right, deep))
}
  
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true
    let maxDeep = treeMaxDeep(root.left, 1)
    let minDeep = treeMaxDeep(root.right, 1)
    if (Math.abs(maxDeep - minDeep) < 2) {
        // 说明当前节点满足， 还需要递归处理其他节点
        return isBalanced(root.left) && isBalanced(root.right) 
    }
    return false 
};

// 思路
/**
 * 递归求取每个节点的左右子数的最大深度， 
 * 1.如果当前节点左右子树的最大深度相差大于2， 那说明该树不是平衡树
 * 2.如果当前节点左右子树的最大深度相差小于2， 那么只能说明该节点处于平衡状态， 需要递归遍历其他节点
 * 3.只有当所有节点都满足，才是平衡二叉树
 */
