var Queue = function(queueSize) {
  var queue = [];
  var frontPointer = -1;
  var rearPointer = -1;

  if (queueSize < 0) {
    console.log("Invalid queue size.");
    return;
  }

  var isEmpty = function() {
    if (frontPointer == -1 || frontPointer > rearPointer) return true;
    return false;
  };

  var isFull = function() {
    if (rearPointer == queueSize - 1) return true;
    return false;
  };

  var enqueue = function(value) {
    if (isFull()) {
      console.log("Queue full.");
      return;
    }

    if (frontPointer == -1) {
      frontPointer++;
    }

    queue[++rearPointer] = value;
    console.log(queue);
  };

  var dequeue = function() {
    if (isEmpty()) {
      console.log("Queue empty.");
      return;
    }

    return queue[frontPointer++];
  };

  var front = function() {
    if (isEmpty()) {
      console.log("Queue empty.");
      return;
    }

    return queue[frontPointer];
  };

  var rear = function() {
    if (isEmpty()) {
      console.log("Queue empty.");
      return;
    }

    return queue[rearPointer];
  };

  var printQueue = function() {
    var result = [];
    for (var i = frontPointer; i <= rearPointer; i++) {
      result.push(queue[i]);
    }
    console.log(result);
  };

  return {
    size: queueSize,
    isEmpty: isEmpty,
    isFull: isFull,
    enqueue: enqueue,
    dequeue: dequeue,
    front: front,
    rear: rear,
    printQueue: printQueue
  };
};

var queueInstance = Queue(3);
queueInstance.enqueue(1);           // [ 1 ]
queueInstance.enqueue(2);           // [ 1, 2 ]
queueInstance.enqueue(3);           // [ 1, 2, 3 ]
queueInstance.enqueue(4);           // Queue full.
queueInstance.printQueue();         // [ 1, 2, 3 ]
queueInstance.dequeue();            // 3
queueInstance.dequeue();            // 2
queueInstance.dequeue();            // 1
queueInstance.dequeue();            // Queue empty.
