/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head;
    const checkArr = [];

    while (curr) {
        if (checkArr.includes(curr.val)) {
            return true;
        }

        checkArr.push(curr.val);
        curr = curr.next;
    }

    return false;
};