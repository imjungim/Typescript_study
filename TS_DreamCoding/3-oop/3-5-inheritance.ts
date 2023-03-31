{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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
    // ❗interface 함수 구현
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);

    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    //💫자식클래스에서 생성자를 구현하면 꼭 super를 호출
    // 부모클래스에서의 데이터도 같이 받아와서 super에 전달
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans) //생성자는 함수가 아니기때문에 super()
    }
    //상속한 클래스에서 다른 기능 추가.
    private steamMilk(): void{
      console.log('Steaming some milk...🥛')
    }

    //오버라이딩 - 자식클래스에서 부모클래스의 함수를 덮어씌움.
    makeCoffee(shots: number): CoffeeCup{
      //부모에서 만든 함수 그대로 사용시 super
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    } 
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine(23, 'LLLL');
  const coffee = latteMachine.makeCoffee(1); //CoffeeMachine을 상속받았기때문에 모든 함수 사용 가능.
  console.log(coffee)
  console.log(latteMachine.serialNumber) //serialNumber에 접근 가능 



}