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
}
