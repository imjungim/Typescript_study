{
interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

//node - 데이터타입

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>; //다음 노드를 가리킴. 다음노드가 있을수도 없을수도 있기 때문에 옵셔널 StackNode | undefined
}

//Impl : Implementation
class StackImpl<T> implements Stack<T> {
  private _size: number = 0; //멤버변수_외부에서 변경불가, 내부에서 사용하는 변수와 동일한 public변수 앞에 _
  private head?: StackNode<T>;

  constructor(private capacity: number){}
  get size() { //외부에서 size를 읽을수만 있음(setter❌) 내부적으로 변
    return this._size;
  }
  
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!')
    }
    const node: StackNode<T> = { //head에 이미 <T>타입이 지정돼있기 때문에 생략도 가능
      value,
      next: this.head,
    }
    this.head = node; 
    this._size++;
  }

  pop(): T { //null == undefined 동일함 , null !== undefined
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head; //제거하고자 하는 노드 -> head가 가리키는 노드
    this.head = node.next;
    this._size--;
    return node.value;
    //스택이 비어있는경우 node가 없을 수도

    
  }

}

  const stack = new StackImpl<string>(10);
  stack.push('Ellie 1')
  stack.push('Hong 2')
  stack.push('Yoo 3')
  
  while (stack.size !== 0) {
    console.log(stack.pop())
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(123)
  stack2.push(456)
  stack2.push(555)
  
  while (stack2.size !== 0) {
    console.log(stack2.pop())
  }

}