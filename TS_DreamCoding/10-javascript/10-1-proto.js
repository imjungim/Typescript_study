const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

//array -> Array(concat, find, filter...) -> Object 자바스크립트에 있는 모든 object는 모두 Object를 상속받는다.

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = shots => {
  //   console.log('making... ☕️');
  // };
}
// Prototype member level - proto 안에 makeCoffee가 들어있음. -> Object를 상속
// ✨ machine -> CoffeeMachine(makeCoffee) -> Object(toString(), valueOf(), watch()...) 상속 구
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making... ☕️');
};

//기본적으로 Object를 상속하고있다.
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype); //LatteMachine -> CoffeeMachine -> Object

const latteMachine = new LatteMachine(123); //milk가 숫자인지 문자인지 구별을 안해도 되는 자바스크립트💩💩
console.log(latteMachine);
latteMachine.makeCoffee(); //위 상속을 통해 latteMachine에서도 상속받은 makeCoffee()를 사용할 수 있다.

// 1. a style of OOP 객체지향
// 2. behavior reuse(inheritance) 재사용(상속)
// 3. by reusing existing objects 객체를 재사용
// -> that serve as prototype 프로토타입을 통해 구현
