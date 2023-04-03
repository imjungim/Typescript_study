{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;//optional
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker  {
    private static BEANS_GRAMM_PER_SHOT: number = 7 
    private coffeeBeans: number = 0; 
    //자식 클래스에서 상속이 가능하도록 private -> protected로 변경
    constructor(coffeeBeans: number) { 
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

    makeCoffee(shots: number): CoffeeCup{

      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    } 
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    //오버라이딩
    makeCoffee(shots: number): CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }
  
  const sweet = new SweetCoffeeMaker(16)
  console.log(sweet.makeCoffee(2))
  // const machines = [
  //   new CoffeeMachine(16),
  //   new CafeLatteMachine(16, '1'),
  //   new SweetCoffeeMaker(16),
  //   new CoffeeMachine(16),
  //   new CafeLatteMachine(16, '1'),
  //   new SweetCoffeeMaker(16),
  
  // ]
  // machines.forEach(machine => {
  //   console.log('------------------------------');
  //   machine.makeCoffee(1);
    
  // })

}




