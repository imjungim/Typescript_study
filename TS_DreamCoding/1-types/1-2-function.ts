{
  // //JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  //   //타입이 없기 때문에 num1,2가 문자열로 문자열을 이어줄 수도 있음 
  // }

  // //TypeScript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // //JavaScript 💩
  // function jsFetchNum(id) {
  //   //code...
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   });
  // }

  // //TypeScript
  // function fetchNum(id:string): Promise<number>{
  //   //code...
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   });
  // }
  
  
  //JavaScript ✨ => TypeScript
  
  //Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName)
    console.log(lastName) //전달하지 않으면 undefined
  } 

  //또는
  // function printName(firstName: string, lastName: string|undefined) {
  //   console.log(firstName)
  //   console.log(lastName)
  // } 
  printName("Steve", "Jobs") //파라미터 두개를 모두 입력해줘야 한다.
  printName("jungim"); //Expected 2 arguments, but got 1.
  printName("Anna", undefined);
  //이름만 출력하는 함수를 만들고 싶다면 ->인자뒤에 물음표 전달받을수도 있고 아닐수도 있

  //Default parameter : 아무것도 전달하지않아도 기본 default message전달
  //전달하지 않으면 기본값으로 전
  function printMessage(message: string = 'default message💫') {
    console.log(message)
  }
  printMessage();

  //Rest parameter
  function addNumber(...numbers: number[]):number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumber(1, 2)) //숫자가 아닌 다른 형식의 데이터 전달 시 에러
  console.log(addNumber(1, 2, 3, 4))
  console.log(addNumber(1, 2, 3, 4, 5))
  







}