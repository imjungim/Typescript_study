{
  //외부에서 설정하지 못하도록 은닉!
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //public -> 기본상태
  //private -> 외부에서 접근변경불가
  //protected -> 외부에서 접근불가지만 상속받은 자식 클래스는 접근가능

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7 
    private coffeeBeans: number = 0; 

    private constructor(coffeeBeans: number) { 
    this.coffeeBeans = coffeeBeans
    }
    
    static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans)
    }
    
    //외부에서 함수를 이용해서 내부의 상태를 변경할 수 있도록 함.
    fillCoffeeBeans(beans: number) {
      //커피추가
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
        this.coffeeBeans += beans
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  //const maker = new CoffeeMaker(32) //Constructor of class 'CoffeeMaker' is private and only accessible within the class declaration.
  //maker.fillCoffeeBeans(30) //커피콩추가
  const maker = CoffeeMaker.makeMachine(32)
 //외부에서 값변경이 가능한 상태.
 //maker.coffeeBeans = 3; //Property 'coffeeBeans' is private and only accessible within class 'CoffeeMaker'.
 // maker.coffeeBeans = -44; invalid
  


  //✨Setter, Getter -> 멤버변수처럼 사용가능
  class User {

    //❗get 키워드 사용시 함수형태가 되지만 접근할때는 멤버변수에 접근하듯 사용
    //새로운 데이터를 만들고 사용가
    get fullName(): string { //fullName 호출시점에 결합
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge; //4
    }

    set age(num:number) {
      if (num < 0) {
        console.log('0보다 큰 수 입력')
      }
      this.internalAge = num; //멤버변수 업데이
    }

    constructor(private firstName: string, private lastName: string) {
      //멤버변수로 설정 
      //firstName -> this.firstName , lastName -> this.lastName 설
    }
  }

  const user = new User('Steve', 'Jobs')

  user.age = 6 
  console.log(user) //User { firstName: 'Steve', lastName: 'Jobs', internalAge: 6 }
  // console.log(user.fullName) //Steve Jobs  ❗user.fullName 멤버변수에 접근하는것처럼 사용.
  // user.firstName = 'Ellie'
  // console.log(user.fullName) //Steve Jobs 한번 할당된 fullName은 변하지 않는다 -> get fullName() Ellie Jobs
}
