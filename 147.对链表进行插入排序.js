/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  let tail = head;
  let p = head.next;
  while(tail) {
    let head1 = head;

    while(head1 !== tail) {
      console.log(head.val, p.val)
      if (p.val < head.val) {
        tail = tail.next;
        head.next = p.next;
        p.next = head;
        head = p;
        console.log('1111')
      } else if (p.val < head1.val) {
        p.next = head1.next;
        head1.next = p;
        console.log('2222')
      }
      head1 = head1.next;
    }
    tail = tail.next;
  }
  return head;
};
// @lc code=end

