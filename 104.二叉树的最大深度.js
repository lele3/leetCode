/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (68.40%)
 * Total Accepted:    41.1K
 * Total Submissions: 60K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
 * @return {number}
 */
var maxDepth = function(root) {
    // 递归
    // if(root === null) return 0
    // let left = maxDepth(root.left)
    // let right = maxDepth(root.right)
    // return Math.max(left, right) + 1   

    // 非递归
    if (root === null) return 0
    let deep = 0
    let queue = []
    let item = null
    queue.push(root)
    while(queue.length !== 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            item = queue.shift()
            if (item.left) {
                queue.push(item.left)
            } 
            if (item.right) {
                queue.push(item.right)
            }
        }
        deep++
    }
    return deep
};
