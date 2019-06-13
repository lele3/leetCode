/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * 反转一个单链表。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    if (head.next.next === null) {
      let q = head.next;
      q.next = head;
      head.next = null;
      head = q;
      return head;
    }
    let q1 = head;
    let q2 = head.next;
    let q3 = head.next.next;
    while (q3 !== null) {
      q2.next = q1;
      q1 = q2;
      q2 = q3;
      q3 = q3.next;
    }
    q2.next = q1;
    head.next = null;
    head = q2;
    return head;
};

// 思路
// 首选判断节点个数（4种情况）
// 1. 无节点，直接返回null
// 2. 一个节点， 直接返回head
// 3. 两个节点， 直接反转返回
// 4. 三个及以上， 首先创建三个指针q1, q2, q3，分别指到1，2，3个节点，
//    当q3为null时， 退出循环， 循环规则， q2.next指向q1, q1指向q2，
//    q2在指向q3, 之后q3指向下一个节点
//    退出循环以后，将开始的head.next 指向null


