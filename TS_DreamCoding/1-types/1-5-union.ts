{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('down') //4가지 type이 자동으로

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; //정의된 type중 하나만 사용 가능

  //FUNCTION : login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  }

  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'login success!',
      }
    }
  }
  
  //printLoginState(state: LoginState)
  //success => 🎇body
  //fail => reason

  function printLoginState(state: LoginState) {
    //코드를 작성하는 시점에는 state에 어떤게 있는지 모름.
    if ('response' in state) {
      //state 안에 response가 있다면
      console.log(`🎇${state.response.body}`)
    } else {
        console.log(`🎇${state.reason}`)
    }
  }

}