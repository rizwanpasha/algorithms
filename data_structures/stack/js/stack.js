var Stack = function(_stackSize) {
  if (_stackSize < 1) {
    console.log("Invalid stack size");
    return;
  }
  var stackSize = _stackSize == undefined ? 10 : _stackSize;
  var stack = [];
  var currentStackPointer = -1;

  function push(value) {
    if (currentStackPointer + 1 == stackSize) {
      console.log("Stack overflow");
      return;
    }

    stack.push(value);
    ++currentStackPointer;
  }

  function pop() {
    if (currentStackPointer == -1) {
      console.log("Stack underflow");
      return;
    }

    currentStackPointer--;
    return stack.pop();
  }

  function printStack() {
    console.log(stack.join(","));
  }

  function peek() {
    return stack[currentStackPointer--];
  }

  function isFull() {
    return currentStackPointer + 1 == stackSize ? true : false;
  }

  function isEmpty() {
    return currentStackPointer == -1 ? true : false;
  }

  return {
    size: stackSize,
    push: push,
    pop: pop,
    printStack: printStack,
    currentIndex: currentStackPointer,
    peek: peek,
    isFull: isFull,
    isEmpty: isEmpty
  };
};

var stackInstance = Stack(3);
stackInstance.push(1); // Stack = [1]
stackInstance.push(2); // Stack = [1, 2]
stackInstance.push(3); // Stack = [1, 2, 3]
stackInstance.push(4); // Stack overflow
stackInstance.push(5); // Stack overflow
stackInstance.printStack(); // 1, 2, 3
stackInstance.pop(); // Stack = [1, 2] => 3
stackInstance.pop(); // Stack = [1] => 2
stackInstance.pop(); // Stack = [] => 1
stackInstance.pop(); // Stack underflow
stackInstance.printStack(); //
