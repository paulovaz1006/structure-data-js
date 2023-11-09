class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) { 
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;
    this.length++;

    return this;
  };

  printList() {
    const array = [];
    let currentNode = this.head;

    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return console.log(array);
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
  }

  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const myLinkedList = new SingleLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList()
myLinkedList.insert(2, 99);
myLinkedList.printList()
myLinkedList.remove(3);
myLinkedList.printList()
