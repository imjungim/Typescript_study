{
  /**
   * Type Aliases
   * 원하는 새로운 타입을 직접 정의 
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;

  type Student = {
    //object형태도 가능
    name: string;
    age: number;
  }

  const student: Student = {
    name: 'ellie',
    age: 20,
  }

/**
 * String Literal Types
 */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; //name 외 다른 문자열 할당은 불가 error
  type JSON = 'json'
  const json: JSON = 'json'

  type Boal = true;
  const isCat: Boal = true;
  //const isCat: Boal = false; //error
}