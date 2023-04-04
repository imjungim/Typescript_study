//either : a or b
//이거 아님 저거
interface Either {
  left: () => number;
  right: () => number;
}

class SimpleEither implements Either {
  constructor(private leftValue: number, private rightValue: number) { }
  
  left(): number{
    return this.leftValue;
  }

  right(): number{
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
either.left() //4
either.right() //5
