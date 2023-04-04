interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`)
  }

  workFullTime() {
    
  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`)
  }

  workPartTime() {
    
  }
}
// 💩세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

//제네릭이지만 아무타입이 아닌 Employee를 확장한 타입만 가능
function pay<T extends Employee>(employee: T): T{
  //employee.pay //extends Employee 하지 않은상태에서는 pay가 없음 어떤타입이든 들어 올 수있기때문에 타입에대한 정보가 없어 사용불가
  employee.pay();

  return employee;
  
}

const hong = new FullTimeEmployee();
const yoo = new PartTimeEmployee();

hong.workFullTime()
yoo.workPartTime()

const hongAfterPay = pay(hong);
const yooAfterPay = pay(yoo);
//const yooAfterPay2 = pay(13); //다른 타입전달 시 에러
//hongAfterPay. //pay만.. pay함수가 Employee fulltime? partTime? 세부정보를 잃어버림

//pay함수는 full, part상관없이 직원을 받아서 Employee 인터페이스 -> pay 다시 동일한 Employee를 전달받음
//Employee가 정보를 잃고 Employee리턴만 -> full, part 세부클래스의 정보가 없어진다.
//✨제네릭 사용
//조건을 걸어두고 제한된 범위내에서 일반화된 제네릭을 사용할 수 있다.]

//--------------------제네릭 조건 예제------------
//타입이 보장되는 함수 만들기
const obj = {
  name: 'hong',
  age: 20,
}

const obj2 = {
  animal: 🐒
}

function getValue<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key];
}
//K extends keyof T : object<T>안에 들어있는 key의 타입
//T[K] : object T에 있는 key의 value type!!리턴
console.log(getValue(obj, 'name')) //hong 두번째인자는 obj에 포함되어있는 key중 하나!
//console.log(getValue(obj, 'score')) // score? 없음. error Argument of type '"score"' is not assignable to parameter of type '"name" | "age"'
console.log(getValue(obj, 'age')) //20
console.log(getValue(obj2, 'animal')) //🐒
//console.log(obj['age'])

//✨세밀하게 제한해서 타입을 사용가능.