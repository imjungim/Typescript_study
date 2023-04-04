//either : a or b
//이거 아님 저거

//숫자가 아닌 어떤 타입이든 담을 수 있도록 -> 제네릭 활용
//왼쪽, 오른쪽이 서로 타른 타입일 수도??
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) { }
  
  left(): L{
    return this.leftValue;
  }

  right(): R{
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left() //4
either.right() //5

const best = new SimpleEither(4, 'hello'); //숫자, 문자 
const best2 = new SimpleEither({name: 'hong'}, 'hello'); //object타입도 가능

