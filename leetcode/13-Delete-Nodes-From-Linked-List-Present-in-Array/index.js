/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let newNums = new Set(nums);
    let curr = head;
    let prev = null;

    while(curr) {
        if (prev === null && newNums.has(curr.val)) {
            head = curr.next;
            curr = head;
        } else if (prev !== null && newNums.has(curr.val)) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    return head;
};