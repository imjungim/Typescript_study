{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  }
  type SuccessState = {
    result: 'success';
  }
  type ResultState = SuccessState | NetworkErrorState;

class NetworkClient { //성공과 실패를 예상 가능 
    tryConnect(): ResultState {
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