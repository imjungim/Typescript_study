{
  //error의종류가 많다면?
class TimeoutError extends Error { }
class OffLineError extends Error{ }
//세부적인 error를 결정하고 싶다면 error state를 사

class NetworkClient {
  tryConnect(): void {
    throw new OffLineError('no network!'); //에러 종류에 맞는 세부적인 class
  }
}

class UserService {
  constructor(private client: NetworkClient) { }
  
  login() {
    this.client.tryConnect();
    //login......
  }
}

//어플리케이션을 실행하면 자동로그인
class App {
  constructor(private userService: UserService) { }
  run() {
    try {
      this.userService.login();
    } catch (error) { //error -> type은 any
      //show dialog to user
      // if (error instanceof OffLineError) {
      //   //type에 대한 정보가 사라져 사용불가
      // }
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
// service.login();
const app = new App(service);
app.run();

}