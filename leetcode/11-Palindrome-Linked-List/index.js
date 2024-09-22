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
    const checkArr = [];
    let curr = head;

    while (curr) {
        checkArr.push(curr.val);
        curr = curr.next;
    }

    let start = 0;
    let end = checkArr.length - 1;
    while (start < end) {
        if (checkArr[start] !== checkArr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};
