var Node = function(val) {
    return {
        val,
        next: null
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0; 
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
   if (this.size === 0 || index < 0 || index >= this.size) return -1;

   let curr = this.head;

   while(index > 0) {
        curr = curr.next;
        --index;
   }

   return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    if (this.size === 0) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    ++this.size;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
     const node = new Node(val);
    if (this.size === 0) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node
    }

    ++this.size;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.size) {
        this.addAtTail(val);
    } else {
        const node = new Node(val);
        let prevNode = this.head;

        while(index > 1) {
            prevNode = prevNode.next;
            --index;
        }
        node.next = prevNode.next;
        prevNode.next = node;
        
        ++this.size;
    }


};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
        if (this.size === 1) {
            this.tail = null;
        }
    } else {
        let prevNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next;
        }
        
        if (prevNode.next === this.tail) {
            this.tail = prevNode;
        }
            
        prevNode.next = prevNode.next ? prevNode.next.next : null; 
        }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */