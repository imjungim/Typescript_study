{
  /**
   * 상속의 문제점
   * 😮‍💨상속의 깊이가 깊어질수록 관계가 복잡해진다.
   * 상속은 수직적 관계가 형성되기때문에 부모클래스를 수정 할 경우 자식클래스에도 영향을 미친다.
   * TS에서는 1개 이상의 부모클래스를 상속 할 수 없다.(오직 한개의 부모클래스만 상속 가능)
   * ✨Composition 사용
   * -> 구성요소, 구성
   * -> 필요한것을 조립해나가는 것.
   * -> 기능별(우유스팀_CheapMilkSteamer, 설탕_CandySugarMixer)로 class를 만들어 필요한 곳에서 가져다 사용하는 composition 구성.
   * -> 필요한 기능만 가져다 사용할 수 있기에 코드의 재사용성 🆙
   * ❌CafeLatteMachine, SweetCoffeeMaker, SweetCafeLatteMachine -> 모두 우유스팀_CheapMilkSteamer, CandySugarMixer를 사용하기 때문에 나중에 다른 설탕제조기를 만들었을 경우 모든 클래스에 업데이트 해야 하며,
   * 항상 우유스팀_CheapMilkSteamer만 사용하는 class로 제약이 되는 단점.
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
    constructor(coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) { 
    this.coffeeBeans = coffeeBeans
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);

    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }
  //모자란 우유 거품기
  class CheapMilkSteamer implements MilkFrother{
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

  class FancyMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...')
    }

    makeMilk(cup: CoffeeCup):CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Cold Steaming some milk...')
    }

    makeMilk(cup: CoffeeCup):CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup; //우유안넣음.
    }
  }
  
  //설탕 제조기
  class CandySugarMixer implements SugarProvider{
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

  class SugarMixer implements SugarProvider{
    private getSugar() {
      console.log('Getting some sugar from jar!?🪣')
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup; //설탕없.
    }
  }

  // -------------------



  //재사용성 🔻down

  //Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const FancyMilkMaker = new FancyMilkSteamer();
  const ColdMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //
  //원하는 용도,기능에 따라 SweetCoffeeMaker를 다르게 사용할 수 있다.
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar)
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, ColdMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);


}

