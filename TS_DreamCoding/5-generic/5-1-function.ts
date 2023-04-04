{
  function checkNotNull(arg: number | null): number {
    //null이 아니면 숫자를 리턴
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  //🙏any로 바꿔줘도 타입이 보장되지 않는다.
  function checkNotNullAnyBad(arg: any | null): any {
  //null이 아니면 숫자를 리턴
  if (arg == null) {
    throw new Error('not valid number!');
  }
  return arg;
  }

  const result = checkNotNullAnyBad(123); //숫자가 null이 아니면 any리턴 -> 타입에 대한 정보가 無
  console.log(result)
  checkNotNullAnyBad(null) //Error
}

//타입을 알 수 없는 자바스크립트 라이브러리에서 요소가 리턴될 때 null이 리턴될 수도 있음.
//유효한지 체크하는 함수로 확인 -> 단, 숫자만 확인할 수 있는상태인데 타입별로 다 만들어야 할까?
//아무타입이나 다 가능하게 하려면?