class Stack {
  int _stackSize;
  List<dynamic> _stack = new List();
  int _stackPointer = -1;

  Stack(this._stackSize);
  Stack.defaultSize() {
    this._stackSize = 10;
  }

  void push(dynamic value) {
    if (this._stackPointer + 1 == this._stackSize) {
      print("Stack overflow");
      return;
    }

    this._stack.add(value);
    this._stackPointer++;
  }

  dynamic pop() {
    if (this._stackPointer - 1 < 0) {
      print("Stack underflow");
      return;
    }

    return this._stack.removeAt(this._stackPointer--);
  }

  void printStack() {
    print(this._stack.join(","));
  }

  dynamic peek() {
    return this._stack[this._stackPointer];
  }

  bool isFull() {
    return this._stackPointer + 1 == this._stackSize ? true : false;
  }

  bool isEmpty() {
    return this._stackPointer == -1 ? true : false;
  }
}

void main() {
  Stack stackInstance = new Stack(3);
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
}
