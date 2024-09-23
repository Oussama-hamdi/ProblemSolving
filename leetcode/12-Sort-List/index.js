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
var sortList = function(head) {
    if (!head || !head.next) return head;

    let sorted = false;

    while(!sorted) {
        sorted = true;

        let curr = head;
        let prev = null;

        while (curr && curr.next) {
            if (curr.val > curr.next.val) {
                sorted = false;

                let tmp = curr.val;
                curr.val = curr.next.val;
                curr.next.val = tmp;
            }

            prev = curr;
            curr = curr.next;
        }
    }

    return head;
};