{
  /**
   * 상속의 문제점
   * 😮‍💨상속의 깊이가 깊어질수록 관계가 복잡해진다.
   * 상속은 수직적 관계가 형성되기때문에 부모클래스를 수정 할 경우 자식클래스에도 영향을 미친다.
   * TS에서는 1개 이상의 부모클래스를 상속 할 수 없다.(오직 한개의 부모클래스만 상속 가능)
   * ✨Composition 사용
   * -> 구성요소, 구성
   * -> 필요한것을 조립해나가는 것.
   */

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
    constructor(beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ){ //steamMilk()는 이제 필요없고 외부로부터 필요한 요소(milkFrother)를 받아옴.
      super(beans) 
    }

    makeCoffee(shots: number): CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee)
    } 
  }
  //모자란 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('Steaming some milk...')
    }

    makeMilk(cup: CoffeeCup):CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  
  //설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from jar!')
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    getSugar() {
      console.log('Getting some sugar🍭')
    }
    //오버라이딩
    makeCoffee(shots: number): CoffeeCup{
      const coffee = super.makeCoffee(shots);
      this.getSugar();
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  //class SweetCafeLatteMachine extends SweetCoffeeMaker, CafeLatteMachine {} //Classes can only extend a single class.
  
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
  //공통된 api를 호출가능
  //부모의 클래스를 상속한 자식클래스가 부모클래스의 함수를 다른방식으로 다양하게 구성하여 다형성을 구현

}

