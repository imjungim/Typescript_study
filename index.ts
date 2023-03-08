//q브라우저는 자바스크립트 파일만 읽을 수 있기때문에 변환해줘야한다.
//tsc-w 입력하면 자동변환됨. ->컴파일 : tsconfig.json에서 옵션설정가능
//입력하면 자동으로 index.js파일이 생성되고 코드를 생성할때마다 자동으로 반영된다.

//1. 변수 생성시
let 이름 :string = 'kim'; //:string 이 변수에는 string(문자)type만 들어올 수 있다.
// 이름 =123; -> error
//array타입지정 배열안에 문자만 들어올 수 있음
let 두번째이름 :string[] = ['kim', 'park']
//object
let tp번째이름 :{ name? : string } = { name : 'kim'} //name? 옵션으로 들어올수도 있고 아닐수도 있고
//다양한 타입이 들어올 수 있게 하려면? Union type
let test :string | number = 123; //string 또는 number
//****타입을 변수에 담아쓸 수 있다. */ 
type 내타입 = string | number; //변수명을 대문자로 지정
let testtwo :내타입 = 123; //string 또는 number

//함수에 타입지정 가능
function 함수(x : number) : number {
  return x *2
} //무조건 넘버를 파라미터로  받고 ㅣ결과값도 넘버로

//array에 쓸 수 있는 tuple타입
type Member = [number, boolean]; //array의 첫번쨰는 number, 두번째는 boolean
let john :Member = [123, true] //숫자가 아닌 문자면 에러

//object에 타입지정해야할 속성이 너무 많으면?
type Members = {
  [key :string] : string, //글자로 된 모든 object 속성의 타입은 string
};

let hong : Members = {name : 'kim', age : '123'};

//class 타입지정가능
class User {
  name :string;
  constructor(name :string){
    this.name = name
  }
}
// ----------------------------------
//📝2.기본타입
let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon","tue","wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

//튜플 (Tuple) :인덱스별로 타입이 다를때
let b: [string, number];
b = ['z', 1] // 🆗
//b = [1, 'z'] // ❌

b[0].toLowerCase(); //🆗
//b[1].toLowerCase(); //❌

//void : 함수에서 아무것도 반환하지 않을 때 사용

function sayHello(): void{
  console.log('heeelllooo')
}
//never : 에러를 반환하거나 영원히 끝나지않는 함수 반

function showError(): never {
  throw new Error();
}

function infLoop(): never{
  while (true) {
    //do something
  }
}

//enum : 비슷한 값끼리 묶어줬을 때
//enum에 수동으로 값을 할당하지 않으면 자동으로 0부터 값이 주어진다.

enum Os {
  Window = 3,
  Ios,
  Android,
}
//특정값만 입력할 수 있게 강제하거나 입력값이 공통점이있을 때 사용
let myOs: Os; //Os인 window, Ios, android만 입력가능
myOs = Os.Window

//null , undefined
let c: null = null;
let d: undefined = undefined;

//-------------------------------------------------------------------------
//📝3. 인터페이스
//interface 프로퍼티를 정의해서 객체로 사용하고자 할때 사용
// let user:object;

// user = {
//     name:'hong',
//     age: 30,
// }

// console.log(user.name)//object에 특정 속성값에 대한 정보가 없기때문에 에러

type Score = 'A' | "B" | "C" | "F" ; //이 값만 사용가능 다른값을 넣으면 에러

interface User {
    name: string,
    age: number,
    gender?: string, //0optional
    readonly birthYear: number, //읽기전용속성 (수정불가)
    //학년
   // [grade:number] : string, // number를 키로 string을 value로 받는 프로퍼티를 여러개 받을 수 있음.
   [grade:number] : Score, 
}

let user:User = {
    name: 'hong',
    age: 32,
    birthYear: 2000,
    1 : 'A',
    2 : 'b', //Score 외 다른값은 에러
}

user.age = 20;
user.gender = 'male' //새로운 프로퍼티 추가
//user.birthYear = 1992 //읽기전용으로 수정 불가 에러

//interface 함수정의
interface Add {
    (num1:number, num2: number): number;
}

const add:Add = function(x, y){
    return x + y;
}
add(10, 20);

interface IsAdult {
    (age:number):boolean;
}

const adult: IsAdult = (age) => {
    return age > 19;
}

adult(20) //true

//class정의
//implements

interface Car {
    color:string;
    wheels:number;
    start():void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string) {
        this.color = c;
    }

    start(){
        console.log('go..')
    }
}

const dd = new Bmw("green")
console.log(dd)
dd.start(); //go..

//extends
interface Car {
    color:string;
    wheels:number;
    start():void;
}

interface Benz extends Car {
    //Car의 속성들을 그대로 사용 가능
    //추가 정의도 가능
    door:number;
    stop():void;
}

const benz:Benz = {
    door:4,
    stop(){
        console.log("stop")
    },
    color:'red',
    wheels:4,
    start(){},

}
//여러개 확장도 가능
interface Car {
    color:string;
    wheels:number;
    start():void;
}

interface Toy {
    name:string;
}

interface ToyCar extends Car,Toy {
    price: number;
}

//-------------------------------------------------
//📝4. 함수
function added(num1: number, num2: number): void {
 // return num1 + num2;
 console.log(num1 + num2)
}
//함수 매개변수에 옵셔널
function  hello(name?:string) { //name은 있어도 없어도 상관
  return `Hello, ${name || "world"}`;
}

function  helloo(name="world") { //매개변수의 디폴드값도 지정가능하다.
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello("Hong");;
const result3 = hello(123); //❌

//선택적 매개변수가 필수 매개변수 앞에 위치하면 오류
function hi(name: string, age?: number): string {
  if (age != undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(hi("Hong"));
console.log(hi("Hong", 30));

//옵셔널값을 앞에 위치시키고 싶다면
function hi2(age: number | undefined, name: string): string {
  if (age != undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(hi2(undefined, "Hong")); //명시적으로 undefined전달해서 사용
console.log(hi2(30, "Hong"));

//전달받은 파라미터를 배열로 한번에 전
function add3(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add3(1, 2, 3); //6
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) //55

//this 관련
interface User3 {
  name: string,
}

const Kim: User3 = { name: 'Kim' }

//this의 type지정
// function showName(this:User3) { 
//   console.log(this.name);
// }

//매개변수가 있을 경우
function showName(this:User3, age:number, gender:'m' | 'f') { 
  console.log(this.name, age, gender);
}

const aa = showName.bind('Kim');
aa(30, 'm'); //this다음 1,2번째 순서대로 전달

//오버로드
interface User4 {
  name: string,
  age: number,
}

function join(name: string, age: string): string;
function join(name: string, age: number):User4;
function join(name: string, age: number | string): User4 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력";
  }
}
//User4 또는 string을 반환할수도 있기때문에 에러
////오버로드 : 전달받은 매개변수의 갯수나 타입에 따라 다른동작을 하도록
const ee: User4 = join("Hong", 30);
const jane: string = join('jane', '30');

//동일한 매개변수라도 타입을 다르게 사용가능
//age매개변수의 타입이 number이거나 string -> 객체이거나 string

//-----------------------------------
//📝5. Literal Types

const userName1 = "bob" //문자열 literal type 정해진 값을 가진 변수
let userName2 = "Tom" // let은 값이 변경가능하기 때문에 type:string

type Job = 'police' | 'developer' | 'teacher';

interface User5 {
  name: string,
  job: Job;
}

const users: User5 = {
  name: "Bob",
  job: "police" //위에 Job에 선언된 값들만 사용 가능.

}

//숫자형 literal type
interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3; //1,2,3만 사용가능 (|유니온타입)
}

//Union Types
//동일한 속성의 type을 다르게 구분할 수 있는 것 -> 식별가능한 union
interface Car {
  name: "car",
  color: string,
  start(): void,
}

interface Mobile {
  name: "mobile",
  color: string,
  call(): void;
}

function gift(gift: Car | Mobile) {
  console.log(gift.color);
   //gift.start(); //Error : Property 'start' does not exist on type 'Car | Mobile'.
  if (gift.name === 'car') {
    gift.start(); //(method) Car.start(): void
  } else {
    gift.call(); //(method) Mobile.call(): void
  }
 
}

//Intersection Types
//여러타입을 합쳐서 사용
//and를 의미
//필요한 기능을 모두 가진 하나의 타입을 만든다.

interface Car2{
  name: string;
  start(): void;
}

interface Toy {
  name: string,
  color: string,
  price: number,
}
//toy와 car의 모든 속성을 적어야한다.
//하나라도 빠지면 error
const toyCar: Toy & Car2 = {
  name: "타요",
  start() { },
  color: "blue",
  price: 1000,
}

// ----------------------------------
//📝6. Class 클래스!
//TS에서는 접근제한자 지원!(Access modifier) - public, private(#), protected
//public 자식클래스, 클래스 인스턴트에서 접근 가능 (아무것도 표기하지 않고 작성 하면 기본 public)
// class Car6 {
//   //color: string; //color멤변수를 미리 선언
//   constructor(readonly color:string) {
//     this.color = color;
//   }
//   start() {
//     console.log('start')
//   }
// }

//✨
//public - 자식클래스, 클래스 인스턴스 모두 접근 가능
//protected - 자식클래스 내부에서 접근 가능, 클래스 인스턴스로는 불가
//private - 해당 클래스 내부에서만 접근 가능

// class Car6 {
//   readonly name: string = 'car';
//   color: string; //color변수를 미리 선언
//   constructor(color:string, name ) {
//     this.color = color;
//     this.name = name
//   }
//   start() {
//     console.log('start')
//     console.log(this.name)
//   }
// }

// class Bmw3 extends Car6 {
//   constructor(color: string, name) {
//     super(color, name); //부모 상속!! super가 없으면 안됨. super를 호출하지 않으면 error
//   }
//   showName() {
//     console.log(super.name);
//     //name이 private - ❌
//     //name이 protected, public - ⭕
//   }
// }

// const z4 = new Bmw3('black','zzz');
//console.log(z4.name) //name이 private -> error / public -> o
//z4.name = 'zzz' //public -> 변경도 가능
//name을 수정할 수 없게 하려면 readonly사용하고 name의 값을 변경하고 싶다면 constructor내에서 수정
//public, protected 차이 ?

// //static property - 정적멤버변수 생성
// class Car6 {
//   readonly name: string = 'car';
//   color: string;
//   static wheels = 4; //✨
//   constructor(color:string) {
//     this.color = color;
//   }
//   start() {
//     console.log('start')
//     console.log(this.name)
//     console.log(Car6.wheels) //🐥this가 아닌 class명을 적어준다.
//   }
// }

// class Bmw3 extends Car6 {
//   constructor(color: string) {
//     super(color);
//   }
//   showName() {
//     console.log(super.name);
//   }
// }
// const z4 = new Bmw3('black');
// console.log(Car6.wheels) //🐥this가 아닌 class명을 적어준다. 4

//추상class
//-> 프로퍼티와 메소드의 이름만 선언하고, 구체적인 기능은 상속받는 쪽에서 구현해줌. 
abstract class Car6 {
  color: string; 
  constructor(color:string) {
    this.color = color;
  }
  start() {
    console.log('start')
  }
  abstract doSomething():void //❗상속받는class에서 구체적으로 구현해줘야한다.
}

//const caar = new Car("red"); //추상클래스는 new를 통해서 객체를 만들 수 없다❌ 상속으로만 가능!

class Bmw3 extends Car6 { //doSomething을 구현해주지 않으면 error
  constructor(color: string) {
    super(color); 
  }
  doSomething(){ //상속받는 doSomething을 구체적으로 구현
    alert(3)
  }
}

//📝7. 제네릭 Generics <T> - t가 아닌 다른것이 와도 상관은 없음.
//클래스나 함수, 인터페이스를 다양한 타입으로 재사용할 수 있다.
//선언할때는 타입파라미터만 적고 생성하는 시점에 타입을 결정

//타입파라미터 - T를 일반적으로 사용한다. 타입을 전달받아 함수에서 사용할 수 있도
function getSize<T>(arr: T[]):number {
  return arr.length
}

//타입이 바뀌었는데 함수를 재사용하고 싶다면 함수의 오버로드 사용 또는 유니온타입사용
//타입이 여러개일수로 늘어나는 단점...
// function getSize(arr: number[] | string[] | boolean[]):number {
//   return arr.length
// }

const arr1 = [1, 2, 3];
//사용하는 쪽에서 타입을 결정
//function getSize<number>(arr: number[]): number
getSize<number>(arr1); //3

const arr2 = ["1", "2", "3"];
//function getSize<string>(arr: string[]): number
getSize<string>(arr2);

const arr3 = [true, false, false];
//function getSize<boolean>(arr: boolean[]): number
//getSize<boolean>(arr3);
getSize(arr3)//제네릭을 전달해주지 않아도 타입스크립트는 전달되는 매개변수를 보고 파악.
const arr4 = [{},{},{name:"Tim"}];
//function getSize<object>(arr: object[]): number
getSize<object>(arr4);

// ------------cut---
interface Mobile<T>{
  name: string;
  price: number;
  option: T; //any 어떤타입이 올지 모르는 상황에서 제네릭사용
}

// const m1:Mobile<object> = {
//   name:"s21",
//   price:1000,
//   option:{
//     color:'red',
//     coupon:false,
//   }
// }

//또는
const m1:Mobile<{color:string; coupon:boolean}> = {
  name:"s21",
  price:1000,
  option:{
    color:'red',
    coupon:false,
  }
}
const m2:Mobile<string> = {
  name:"s23",
  price:5000,
  option:'good',
}

//---------
interface User0 {
  name:string;
  age:number;
}

interface Car0 {
  name:string;
  color: string;
}

interface Book {
  price:number;
}

const userss: User0 = {name:"a", age:10}
const car:Car0 = {name:"bmw", color:"red"}
const book:Book = {price: 3000}

//T타입 ->name이 string인 객체
function showNames<T extends {name:string}>(data:T):string {
  return data.name
}

showNames(userss);
showNames(car)
//showName(book) name이없음