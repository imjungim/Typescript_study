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
function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

const hong = new FullTimeEmployee();
const yoo = new PartTimeEmployee();

hong.workFullTime()
yoo.workPartTime()

const hongAfterPay = pay(hong);
const yooAfterPay = pay(yoo);
hongAfterPay. //pay만.. pay함수가 Employee fulltime? partTime? 세부정보를 잃어버림

//pay함수는 full, part상관없이 직원을 받아서 Employee 인터페이스 -> pay 다시 동일한 Employee를 전달받음
//Employee가 정보를 잃고 Employee리턴만 -> full, part 세부클래스의 정보가 없어진다.
//✨제네릭 사용