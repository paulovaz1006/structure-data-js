class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.array = [];
  }

  peek() { 
    return this.array[0]
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {      
      this.last.next = holdingPointer;      
      this.last = holdingPointer;      
    }
   this.length++;
   return this
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    
    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next;
    this.length--;

    return this;
  }

  isEmpty() {
    return (this.bottom == null && this.top == null);
  }
}

const myStack = new Stack()

myStack.enqueue('Joy')
myStack.enqueue('Math')
myStack.enqueue('Pavel')
myStack.enqueue('Samir')
console.log(myStack.peek())
myStack.dequeue()
myStack.dequeue()
console.log(myStack.peek())

