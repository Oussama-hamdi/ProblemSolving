/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let curr = head;
    let size = 0;
    let firstNode;
    let secondNode;
    let i = 1;

    while(curr) {
        if (i === k) {
            firstNode = curr;
        }
        curr = curr.next;
        ++size;
        ++i;
    }

    i = 0;
    curr = head;

    while(curr) {
        if (i === size - k) {
            secondNode = curr;
            break;
        }
        curr = curr.next;
        ++i;
    }

    [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];

    return head;
};