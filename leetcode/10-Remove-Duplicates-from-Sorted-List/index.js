/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const values = new Set();

    let curr = head;
    let prev = null;

    while (curr) {
        if (values.has(curr.val)) {
            prev.next = curr.next;
        } else {
            prev = curr;
            values.add(curr.val);
        }

        curr = curr.next;
    }

    return head;
};