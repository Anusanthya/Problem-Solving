//Queue Implementation

class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
//using linkedList
class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }

    //Enqueue Operation (Adding an Element):
    push(node) {
        let newNode = new Node(node);
        if (this.start === null) {
            this.start = this.end = newNode;
        } else {
            this.end.next = newNode;
            this.end = newNode;
        }
        this.size += 1;
    }

    //Dequeue Operation (Removing an Element):
    pop() {
        if (this.start === null) return -1;
        const temp = this.start;
        this.start = this.start.next;
        this.size --;
        if (this.size === 0) {
            this.end = null;
        }
        return temp.value;
    }

    //Peek Operation (Accessing the Front Element):
    peek() {
        if (this.start === null) return -1;
        return this.start.value;
    }

    //IsEmpty Operation:
    isEmpty() {
        return this.size === 0
    }

}


// Creating a queue
const q = new Queue();

// List of commands
const commands = ["LinkedListQueue", "push", "push", 
                  "peek", "pop", "isEmpty"];
// List of inputs
const inputs = [[], [3], [7], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    if (commands[i] === "push") {
        q.push(inputs[i][0]);
        console.log("push: ", inputs[i][0]);
        console.log("null");
    } else if (commands[i] === "pop") {
        console.log('pop: ', q.pop());
    } else if (commands[i] === "peek") {
        console.log('peek: ', q.peek());
    } else if (commands[i] === "isEmpty") {
        console.log('isEmpty: ', q.isEmpty() ? "true" : "false");
    } else if (commands[i] === "LinkedListQueue") {
        console.log('LinkedListQueue: ', "null");
    }
}