/**
 * Time Complexity: O(n)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};