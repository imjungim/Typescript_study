{
  /** Type Inference 타입 추론
   * 
  */
  
  let text = 'hello'; //선언과 동시에 type 유추 - string
  //text = 1; //error
  //어떤 타입인지 정확히 명시
  function print(message = 'hello') { //Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage.
    console.log(message)
  }
  print('hello')
  //print(1)

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1,2) //자동으로 숫자타입으로 결정 const result: number

  //자동으로 타입추론이 좋은걸까?
}