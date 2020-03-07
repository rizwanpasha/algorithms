class Queue {
  List<dynamic> queue = [];
  int frontPointer = -1;
  int rearPointer = -1;
  int queueSize;

  Queue(this.queueSize);
  Queue.defalutSize() {
    this.queueSize = 3;
  }

  isFull() {
    if (this.rearPointer == this.queueSize - 1) return true;
    return false;
  }

  isEmpty() {
    if (this.frontPointer == -1 || this.frontPointer > this.rearPointer)
      return true;
    return false;
  }

  enqueue(value) {
    if (isFull()) {
      print("Queue full.");
      return;
    }

    if (this.frontPointer == -1) this.frontPointer++;

    this.queue.add(value);
    ++this.rearPointer;
  }

  int dequeue() {
    if (isEmpty()) {
      print("Queue empty");
      return -1;
    }

    return this.queue[this.frontPointer++];
  }

  printQueue() {
    List<dynamic> result = [];
    for (int i = this.frontPointer; i <= this.rearPointer; i++) {
      result.add(this.queue[i]);
    }
    print(result.join(","));
  }

  front() {
    if (isEmpty()) {
      print("Queue empty");
      return;
    }

    return this.queue[this.frontPointer];
  }

  rear() {
    if (isEmpty()) {
      print("Queue empty");
      return;
    }

    return this.queue[this.rearPointer];
  }
}

void main() {
  Queue queueInstance = Queue.defalutSize();
  queueInstance.enqueue(1);         // [ 1 ]
  queueInstance.enqueue(2);         // [ 1, 2 ]
  queueInstance.enqueue(3);         // [ 1, 2, 3 ]
  queueInstance.enqueue(4);         // Queue full.
  queueInstance.printQueue();       // [ 1, 2, 3 ]
  queueInstance.dequeue();          // 3
  queueInstance.dequeue();          // 2
  queueInstance.dequeue();          // 1
  queueInstance.dequeue();          // Queue empty.
}
