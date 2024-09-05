function Node(data) {
    this.data = data;
    this.next = null;
  }
  
function length(head) {
    let length = 0;
    let curr = head;
    
    while(curr) {
      ++length;
      curr = curr.next;
    }
    
    return length;
}
  
function count(head, data) {
    let count = 0;
    let curr = head;
    
    while(curr) {
      if (curr.data === data) {
        ++count
      }
    
      curr = curr.next;
    }
    
    return count;
}