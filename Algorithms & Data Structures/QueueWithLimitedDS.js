//Create a Queue Using Two Stacks

/**
 * Write a function that creates a queue using two stacks. 
 * Besides these two stacks, you may not use any additional data structures in your implementation. 
 * It should have the methods enqueue, dequeue, and size.
 */



class QueueUsingStack {
    constructor () {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue (value) {  //O(N)
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(value);

        while(this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }


    }

    dequeue() {
        if (!this.stack1.length) {
            console.log("Stack is empty");
            return -1; // Representing empty stack
        }
        return this.stack1.pop();
    }

    peek() {
        if (!this.stack1.length) {
            console.log("Stack is empty");
            return -1; // Representing empty stack
        } 
        return this.stack1[this.stack1.length - 1]
    }

    size() {
        return this.stack1.length;
    }
}

// Time: O(2n)
// Space: O(2n)

const q = new QueueUsingStack();

// List of commands
const commands = ["StackQueue", "push", "push", "pop", "peek", "isEmpty"];
// List of inputs
const inputs = [[], [4], [8], [], [], []];

for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "push") {
        q.enqueue(inputs[i][0]);
        console.log("enqueue: ", inputs[i][0]);
        // console.log("null");
    } else if (commands[i] === "pop") {
        console.log('dequeue: ',q.dequeue());
    } else if (commands[i] === "peek") {
        console.log('peek: ',q.peek());
    } else if (commands[i] === "isEmpty") {
        console.log('size: ', q.size() ? "true" : "false");
    } else if (commands[i] === "StackQueue") {
        console.log('StackQueue: ', "null");
    }
}


class QueueUsingStackOptimised {
    constructor () {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue (value) {  //O(1)
        this.stack1.push(value)

    }

    dequeue () {
        // Shift stack1 to stack2 if stack2 is empty
        if(!this.stack2.length) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        
        // If queue is still empty, return -1 (or throw an error if preferred)
        if(!this.stack2.length) {
            console.log("Queue is empty, cannot dequeue.");
            return -1;
        }

        return this.stack2.pop()
    }

    peek() {
        // Shift stack1 to stack2 if stack2 is empty
        if(!this.stack2.length) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }  
        }

        // If queue is still empty, return -1 (or throw an error if preferred)
        if(!this.stack2.length) {
            console.log("Queue is empty, cannot dequeue.");
            return -1;
        }

        return this.stack2[this.stack2.length - 1];
    }

    size() {
        return this.stack1.length + this.stack2.length
    }

}