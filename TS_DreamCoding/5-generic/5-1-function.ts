{
  /**
   * Generic - 일반적인,통상적인, 포함하는의 의
   */
  function checkNotNullBad(arg: number | null): number {
    //null이 아니면 숫자를 리턴
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  //🙏any로 바꿔줘도 타입이 보장되지 않는다. -> 제네릭!!
  function checkNotNullAnyBad(arg: any | null): any {
  //null이 아니면 숫자를 리턴
  if (arg == null) {
    throw new Error('not valid number!');
  }
  return arg;
  }
  const result = checkNotNullAnyBad(123); //숫자가 null이 아니면 any리턴 -> 타입에 대한 정보가 無

  function checkNotNull<T>(arg: T | null): T{
    if (arg == null) {
    throw new Error('not valid number!');
  }
    return arg;
  }
  const number = checkNotNull(123); //function checkNotNull(arg: number | null): number number type으로 결정
  const boal: boolean = checkNotNull(true); //function checkNotNull<true>(arg: true | null): true , 구체적으로 타입 지정도 가능
  const boal2: string = checkNotNull(true) //Type 'boolean' is not assignable to type 'string'.
}

//타입을 알 수 없는 자바스크립트 라이브러리에서 요소가 리턴될 때 null이 리턴될 수도 있음.
//유효한지 체크하는 함수로 확인 -> 단, 숫자만 확인할 수 있는상태인데 타입별로 다 만들어야 할까?
//아무타입이나 다 가능하게 하려면?

//제네릭을 사용하면 어떤타입이든 받을 수 있고, 코딩을 할때 바로 타입이 결정되기 때문에 타입을 보장받을 수 있따..
//사용자가 어떤타입인지 결정하고 유연하게 타입보장 받을 수 있다.

// 🤔 undefined 와 null 사용...
//null과 undefined을 명확하게 구분해야 하는 경우가 아니라면, null이 undefined를 포함하는 의미로 코딩.
//값이 없는것(null) 아직 정의 되지 않음(undefined) 💫둘다 값없음!!!