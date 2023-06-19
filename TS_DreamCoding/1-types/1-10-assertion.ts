{
  /**
   * Type Assertions 💩 type을 강요할때?
   */

  function jsStrFunc(): any {
   // return 'hello'; // 내부적으로 문자열을 리턴
    return 2;
  }
  const result = jsStrFunc(); //result any
  //변수의 타입을 정말정말 확신할때만 사용!!
  console.log((result as string).length) //변수를 문자열로 사용하겠다. 5
  console.log((<string>result).length) //위와 동일 

  const wrong: any = 5; 
  console.log((wrong as Array<number>).push(1)); //TypeError: wrong.push is not a function
  //정말 장담하는 경우가 아니라면 사용하지 말것.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  //array 또는 undefined이지만 ❗값이 배열이라고 확신할 경우
  //optional과 반대개념 null이 아님.
  //const numbers = findNumbers()!; 이렇게도 가능
  numbers!.push(2)

}