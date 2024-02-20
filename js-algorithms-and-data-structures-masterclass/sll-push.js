class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//  head => (data, next) => (data, next ) => (data, null) =tail

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // YOUR CODE GOES HERE
    //  Create a new Node
    const newNode = new Node(value);
    //  check Position
    // head empty ?  => set head
    // no traverse till next null and set the node address and update tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let pointer = this.head;
      while (pointer.next != null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5); // singlyLinkedList
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5

singlyLinkedList.push(10); // singlyLinkedList
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.tail.val); // 10

singlyLinkedList.push(15); // singlyLinkedList
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15
