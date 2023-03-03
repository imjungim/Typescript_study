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