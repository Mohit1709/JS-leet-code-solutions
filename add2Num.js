/* Task : 
 * You are given two non-empty linked lists representing two non-negative integers. 
   The digits are stored in reverse order, and each of their nodes contains a single digit. 
   Add the two numbers and return the sum as a linked list. 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let cur = new ListNode(0), // initializing a new link node
    head = cur, // considering its head of resultant list
    carry = 0,
    num1 = 0, // var to store the value of list l1
    num2 = 0, // var to store the value of list l2
    sum = 0;

  while (l1 || l2) {
    num1 = l1 ? l1.val : 0;
    num2 = l2 ? l2.val : 0;
    sum = carry + num1 + num2;

    carry = Math.floor(sum / 10);
    // storing the result in new node & reassigning cur to that new node
    cur = cur.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) cur.next = new ListNode(carry);

  return head.next;
};
