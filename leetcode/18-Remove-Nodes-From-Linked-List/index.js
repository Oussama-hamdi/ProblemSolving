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
var removeNodes = function(head) {
    let prev = null;
    let curr = head;

    while(curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let newHead = prev;
    let maxVal = newHead.val;
    curr = newHead;

    while(curr && curr.next) {
        if (curr.next.val < maxVal) {
            curr.next = curr.next.next;
        } else {
            maxVal = curr.next.val;
            curr = curr.next;
        }
    }

    prev = null;
    curr = newHead;

    while(curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
};