{
  /** Type Inference
   * 
  */
  
  let text = 'hello'; //선언과 동시에 type 유추 
  //text = 1; //error 
  function print(message = 'hello') { //Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage.
    console.log(message)
  }
  print('hello')
  //print(1)

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1,2) //자동으로 숫자타입으로 결 const result: number

}