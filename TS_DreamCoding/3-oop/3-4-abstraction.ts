{
  /** abstraction 
   * 인터페이스가 너무 복잡할 때 사용할 수 있는 함수가 너무 많은 상태 -> 추상화를 통해 정말 필요한것만 노출해서 사용.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
    
  }

  //class는 interface의 규격을 따른다.
  //❗interface에서 규약된 모든 함수를 구현해야한다. makeCoffee
  // makeCoffee를 구현 하지 않으면 error 확인  -> Class 'CoffeeMachine' incorrectly implements interface 'CoffeeMaker'.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
    private static BEANS_GRAMM_PER_SHOT: number = 7 
    private coffeeBeans: number = 0; 

    private constructor(coffeeBeans: number) { 
    this.coffeeBeans = coffeeBeans
    }
    
    static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans)
    }
    
    fillCoffeeBeans(beans: number) {
    //커피추가
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans
    }

    clean() {
      console.log('cleaning the machine...')
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...')
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕`)
      return {
      shots,
      hasMilk: false,
      }
      
    }
    // ❗interface 함수 구현
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);

    }
  }

  const maker:CoffeeMachine = CoffeeMachine.makeMachine(32)
  maker.fillCoffeeBeans(32)
  maker.makeCoffee(2)
  //maker. //maker.extract, makeCoffee, preheat, grindBeans, fillCoffeeBeans 커피를 만들기 위해 호출할 수 있는 함수가 多 -> 추상화를 통해 인터페이스를 간편하게
  //추상화?
  //1. 접근제어자를 통해서 (encapsulation)
  //    - makeCoffee,fillCoffeeBeans 두가지 함수만 사용가능 
  maker.makeCoffee(2)
  maker.fillCoffeeBeans(20)
  
  //2. interface 사용
  //interface에서 정의된 것만 사용이 가능하다.
  // const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32)
  // maker2.fillCoffeeBeans(32) // CoffeeMaker 인터페이스에는 존재하지 않기때문에 사용불가 error
  // maker2.makeCoffee(2)
  
  // const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32)
  // maker2.fillCoffeeBeans(32) 
  // maker2.makeCoffee(2)
  // maker2.clean();


  class AmateurUser {
    constructor(private machine: CoffeeMaker) {    
    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee)
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) { }
        makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
          console.log(coffee)
          this.machine.fillCoffeeBeans(45);
          this.machine.clean();
    }
  }

  const maker3:CoffeeMachine = CoffeeMachine.makeMachine(32)
  const amateur = new AmateurUser(maker) //CoffeeMaker
  const pro = new ProBarista(maker) //CommercialCoffeeMaker

  amateur.makeCoffee();
  // const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32)
  // maker2.fillCoffeeBeans(32) 
  // maker2.makeCoffee(2)
  // maker2.clean();

}