/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false
    let p1 = p2 = head
    while (true) {
      p1 = p1.next
      if (p1 === null || p2 === null || p2.next === null) {
        return false
      }
      p2 = p2.next.next
      if(p1 === p2) {
        return true
      }
    }
};

/*
  思路
  判断链表中是否有环，只需要两个指针p1,p2
  p1每次向前移动一个节点
  p2每次向前移动两个节点
  当p1 === p2的时候说明是有环的

  ✔ Accepted
  ✔ 17/17 cases passed (92 ms)
  ✔ Your runtime beats 82.79 % of javascript submissions
  ✔ Your memory usage beats 67.95 % of javascript submissions (36.5 MB)
*/
