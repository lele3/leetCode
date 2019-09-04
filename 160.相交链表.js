/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hash = new Set()
    while (headA) {
      hash.add(headA)
      headA = headA.next
    }
    while (headB) {
      if(hash.has(headB)) {
        return headB
      }
      headB = headB.next
    }
    return null
    /* 方法二
       思路
       利用hash值存储A的所有节点的引用，然后遍历B，如果有相同的引用，则说明有相交节点
       ✔ Accepted
       ✔ 45/45 cases passed (120 ms)
       ✔ Your runtime beats 80.71 % of javascript submissions
       ✔ Your memory usage beats 21.99 % of javascript submissions (43.7 MB)
    */
};

/*
  方法一
    const headBB = headB
    while (headA) {
      while (headB) {
        if(headA === headB) {
          return headA
        }
        headB = headB.next
      }
      headB = headBB
      headA = headA.next
    }
    return null

  思路
  暴力解法， 使A链表的每个节点去和B链表的每个节点做比较，相等则有相交节点

  ✔ Accepted
  ✔ 45/45 cases passed (2604 ms)
  ✔ Your runtime beats 5.01 % of javascript submissions
  ✔ Your memory usage beats 49.21 % of javascript submissions (42.9 MB)
 */
