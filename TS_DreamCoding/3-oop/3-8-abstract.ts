{

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;//optional
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //abstract 키워드 -> CoffeMachine은 object를 자체적으로 만들 수가 없다.
  //부모클래스로서 필요한 것들을 정의해 놓은 뒤 
  abstract class CoffeeMachine implements CoffeeMaker  {
    private static BEANS_GRAMM_PER_SHOT: number = 7 
    private coffeeBeans: number = 0; 
    //자식 클래스에서 상속이 가능하도록 private -> protected로 변경
    constructor(coffeeBeans: number) { 
    this.coffeeBeans = coffeeBeans
    }
    
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //     return new CoffeeMachine(coffeeBeans) //Cannot create an instance of an abstract class.
    // }
    
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

    //extract - 자식클래스마다 다르게 구현 protected
    //추상적 메소드 -> abstract 구현사항 작성 ❌
    //abstract를 구현하는 클래스에서 extract를 따로 구현해줘야한다.
    protected abstract extract(shots: number): CoffeeCup

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);

    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans) 
    }

    private steamMilk(): void{
      console.log('Steaming some milk...🥛')
    }
    //❗abstract class를 상속하면서 구현하지 않으면 error
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }

    // makeCoffee(shots: number): CoffeeCup{

    // const coffee = super.makeCoffee(shots); //부모의 makeCoffee호출 ❗super를 호출하지 않는 실수를 할수도?! -> 그라인드, 데우기, 추출의 과정이 생략될 수 있다.
    // // 안전하게 하기 위해 abstract 사용 의도한대로 공통적인 기능을 수행하고 달라지는 부분만 꼭 구현하도록 강조가 가능하다.
    //   this.steamMilk();
    //   return {
    //     shots,
    //     hasMilk: true,
    //   }
    // } 
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    //추상메소드만 구현하면됨.
    protected extract(shots: number): CoffeeCup {
  
    return {
      shots,
      hasSugar: true,
      }
    }

  }
  
 const machines: CoffeeMaker[] = [
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  
  ]
  machines.forEach(machine => {
    console.log('------------------------------');
    machine.makeCoffee(1);
    
  })

}
