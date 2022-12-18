class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(data) {
    const node = new Node(data);  // node already points to null
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if(!this.head) {
      console.log("List is empty!");
    } else {
      let node = this.head;
      let list = '';
      while(node) {
        list += `${node.data } `;
        node = node.next;
      }
      console.log(list);
    }
  }

  append(data) {
    let node = new Node(data);
    
    if(!this.head) {
      this.head = node;
    } else {
      let prev = this.head;
      while(prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  insert(data, index) {

    if(index < 0 || index > this.size) {
      console.log("Invalid insert!");
      return;
    } 
    
    if(index === 0) {
      this.prepend(data);
    } else {
      
      let prev = this.head;
      let node = new Node(data);

      let ct = 0;
      while(ct !== index-1) {
        prev = prev.next;
        ct++;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  remove(index) {
    if(index < 0 || index >= this.size) {
      console.log("Invalid remove!");
      return;
    }

    let removeNode;
    if(index === 0) {
      let removeNode = this.head;
      this.head = removeNode.next;
    } else {
        let ct = 0;
        let prev = this.head;
        while(ct !== index-1) {
          prev = prev.next;
          ct++;
        }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
  }

  removeNode(data) {
    if(!this.head) {
      return null;
    }

    if(data === this.head.data) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while(prev.next && prev.next.data !== data) {
        prev = prev.next;
      }
      if(prev.next) {
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
      } 
      return null;
    }
  }
}

const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.append(40);
list.append(50);

// console.log(list.getSize());
console.log(list.print());
list.insert(60, 1);
list.insert(70, 4);
console.log(list.print());
list.remove(1);
list.remove(3);
console.log(list.print());
list.removeNode(50);
console.log(list.print());
list.removeNode(30);
console.log(list.print());
