{
  //Discriminated Union🚀
  //FUNCTION : login -> success, fail
  //✨동일한 키 state별로 다른 값을 가지도록 -> result 키에 각각 다른 값을 가지고 있다.
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  }

  type FailState = {
    result: 'fail';
    reason: string;
  }

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'login success!',
      }
    }
  }
  
  //printLoginState(state: LoginState)
  //success => 🎇body
  //fail => reason

  function printLoginState(state: LoginState) {
    state.result //"success" | "fail"
    if (state.result === 'success') {
      //state 안에 response가 있다면
      console.log(`🎇${state.response.body}`) //성공
    } else {
        console.log(`😭${state.reason}`) //실패
    }
  }
}