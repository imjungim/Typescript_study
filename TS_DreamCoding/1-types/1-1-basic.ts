{
/**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function finds(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  //unknown (어떤 종류의 데이터가 담길지 알수없는) 💩 글쎼?
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true; //어떤타입이든 사용 가능 _

  //any 💩 뭐든 가능
  let anything: any = 0;
  anything = 'hello';

  //void : 아무것도 리턴하지 않는 상태 텅텅 void는 생략 가능
  function print(): void {
    console.log('helllllo') //출력만 할 뿐 아무것도 리턴하지 않는상태
    //return; 생략
   }
   //변수에 선언해서 사요ㅇ은 드물다
  let unusable: void = undefined; //💩

  //never :절대 리턴하지 않는 함수
  function throwError(message: string): never {
    //message -> server (log)
     throw new Error(message);
    // while (true) {
    //  // 무한루프 리턴없음
    // }
  }
  let neverEnding: never; //💩❌

  //object : 원시타입 제외 모든 object타입을 전달 가능 배열도 가능.
  let obj: object = [1,2,3,4]; //💩 조금 더 명확히 명시하여 사용.
  function acceptSomeObject(obj: object) {
  }
  acceptSomeObject({ name: 'hong' })
  acceptSomeObject({dog:'mozzi'})




}