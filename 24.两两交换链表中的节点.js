/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:
给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) return head
    let p1 = head
    let p2 = head.next
    let p3 = p1
    head = p2
    while (p2.next) {
      if(p2.next.next) {
        // 偶数个节点
        p1.next = p2.next.next
      } else {
        // 奇数个节点
        p1.next = p2.next
      } 
      p3 = p2.next
      p2.next = p1
      p1 = p3
      p2 = p1.next
      if (!p2) break
    }
    if (p2) {
      p2.next = p3
      p3.next = null
    }
    
    return head
};

