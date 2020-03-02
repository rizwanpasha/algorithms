var Stack = function(_stackSize) {
  if (_stackSize < 1) {
    console.log("Invalid stack size");
    return;
  }
  var stackSize = _stackSize == undefined ? 10 : _stackSize;
  var stack = [];
  var currentStackPointer = -1;

  function push(value) {
    if (currentStackPointer + 1 > stackSize) {
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

  function print() {
    console.log(stack.join(","));
  }

  return {
    size: stackSize,
    push: push,
    pop: pop,
    print: print,
    currentIndex: currentStackPointer
  };
};

var stackInstance = Stack(3);
stackInstance.push(1);
stackInstance.push(2);
stackInstance.push(3);
stackInstance.push(4);
stackInstance.push(5);
stackInstance.print();
stackInstance.pop();
stackInstance.print();
