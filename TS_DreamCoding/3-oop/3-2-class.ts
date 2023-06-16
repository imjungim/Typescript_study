{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  //Class서로 관련되어 있는 데이터나 함수를 묶어두는 기능 (템플릿) -> 어떤모양의 데이터가 될지 정의하는 것.
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7 //멤버변수_변하지않는 숫자로 class로 만드는 object마다 중복적으로 생성 됨. ->메모리 낭비💫static지정 class level
    //object마다 생성되지 않는다. 사용시에는 class자체에 있는것으로 this를 쓰지 않는다. 대신 class이름으로 지정
    coffeeBeans: number = 0; //instance(object) level object마다 만들어져야 하는 변수(멤버변수)

  //생성자 class로 인스턴스(object)를 만들때 항상 처음에 호출되는 함수.
    constructor(coffeeBeans: number) { //초기값이 0이지만 원하는만큼의 커피콩을 전달 받음.32
      this.coffeeBeans = coffeeBeans
    }
    
    static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans)
    }

    //class안의 멤버변수에 접근할때는 this를 붙여준다.
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

  //데이터를 넣어 object생성
  const maker = new CoffeeMaker(32) //new -> ㅊclass의 인스턴스를 만든다. () -> 생성자 호출
  //CoffeeMaker 데이터를 담아서 object 생성
  console.log(maker) //CoffeeMaker { BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 32 } ->static 지정 후 CoffeeMaker { coffeeBeans: 32 }
  //BEANS_GRAMM_PER_SHOT: 7 class에서 정해진 변해지않음.
  const maker2 = new CoffeeMaker(20)
  console.log(maker2) //CoffeeMaker { BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 20 } -> CoffeeMaker { coffeeBeans: 20 }

  const maker3 = CoffeeMaker.makeMachine(10)
  console.log(maker3)
}
