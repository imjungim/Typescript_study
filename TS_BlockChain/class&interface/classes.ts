//class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName:string,
  ) {}
//}

// const nico = new Player("nico", "last", "니꼬");
// nico.firstName //private이기 떄문에 작동 안됨
// nico.nickName //public으로 이것만 작동

//추상 클래스(Abstract Class)
// ❗오직 다른 클래스가 상속받을 수 있는 클래스
//❗추상 클래스는 직접 새로운 인스턴스를 만들 수 는 없다.
// abstract class User2 {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickName:string,
//   ) {}
// }

// class Player extends User2 {

// }

// const nico = new User2("nico", "last", "니꼬"); //❌경고 추상클래스의 인스턴스는 만들 수 없음
// const nico2 = new Player("jungim", "hong", "정임")
// nico2.nickName //접근 가능

//추상 클래스안의 메소드와 추상 메소드??
// 추상 클래스 안에서는 추상 메소드를 만들 수 있다.
// 추상메소드는 구현하지말고 메소드의 call signature만 적어둬야 한다
// 추상 메소드는 추상 클래스를 상속받는 모든것들이 구현을 해야하는 메소드를 의미한다.
// abstract class User2 {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     private nickName:string,
//   ) { }
//   //추상클래스 안 메소드 생성
//   //❗메소드를 클래스 안에서 구현

//   abstract getNickName():void //call signature만 가지고 있음.

//   private getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// class Player extends User2 {
//   //getNickName을구현
//   getNickName() {
//       //console.log(this.nickName) private속성이기때문에 안됨.
//       //❗property를 private으로 만들었다면 그 클래스를 상속했을지라도 그 프로퍼티에 접근 불가.
    
//   }
// }

// const nico = new Player("nico", "last", "니꼬"); //상속받아서 사용 가능
// nico.getFullName() //🙆‍♂️ but 이 메소드를 private으로 만들면 더이상 작동하지 않음


//private property의 경우 당연히 인스턴스 밖에서 접근이 불가하며, 다른 자식 클래스에서도 접근할 수 없다.
//(User2 class의 인스턴스나 메소드에서만 접근할 수 있다.)
//추상클래스는 인스턴스화 ❌

//만약 필드가 외부로부터는 보호되지만 다른 자식 클래스에서 사용되기를 원한다면 protected를 사용

abstract class User2 {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName:string,
  ) { }

  abstract getNickName():void //call signature만 가지고 있음.

  private getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Player extends User2 {
  //getNickName을구현
  getNickName() {
      console.log(this.nickName) //✨protected 속성이기때문에 User.nickname에 접근할수있다.
      //❗property를 private으로 만들었다면 그 클래스를 상속했을지라도 그 프로퍼티에 접근 불가.
    
  }
}

const nico = new Player("nico", "last", "니꼬"); //상속받아서 사용 가능
nico.getFullName() 

// 📌접근 가능한 위치

// 구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
// private 　 　　　⭕　　　　　　　❌　　　　　❌
// protected 　　　⭕　　　　　　　⭕　　　　　❌
// public　　　　　⭕　　　　　　　⭕　　　　　⭕