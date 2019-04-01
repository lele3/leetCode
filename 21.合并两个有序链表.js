/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.84%)
 * Total Accepted:    47.1K
 * Total Submissions: 89K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = null
    let tmpNode = null
    let p = null
    if (l1 && !l2) return l1
    if (l2 && !l1) return l2
    if (!l1 && !l2) return null
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tmpNode = new ListNode(l1.val)
            l1 = l1.next
        } else {
            tmpNode = new ListNode(l2.val)
            l2 = l2.next
        }
        if (!head) {
            head = tmpNode
            p = tmpNode
        } else {
            p.next = tmpNode
            p = tmpNode
        }
    }
    if (l2) {
        p.next = l2
    } else {
        p.next = l1
    }
    return head
};

