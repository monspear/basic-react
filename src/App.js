import './App.css';
import { useState } from 'react';

function App() {
  let server_content = '서버에서 가져온 회원가입한 사용자 명단';
  let [사용자의정보, b] = useState(['사용자의 닉네임','사용자의 나이','사용자의 거주지']); // 첫번째는 내용, 두번째는 상태 변환을 도와주는 함수
  /* state 를 사용하는 이유
  일반 변수가 갑자기 변경되면 렌더링이 안되서 변경된 내용이 화면에 반영안됨.
  state는 사용하면 html 에서 자동 재렌더링이 되서 갑작스럽게 내용이 바꿔도 바로 적용이 됨.
  
  예를 들어 사이트에 +,- 버튼을 만들고 변수의 숫자를 바꾸는 것을 만든다고 하면
  일반변수는 +,- 를 눌러도 화면에는 처음 숫자가 그대로 보인다.

  하지만 state를 사용하면 버튼으로 바뀐 숫자가 화면에 바로 나타나게 되어
  클릭하면 유동적으로 화면의 숫자가 바뀌는 것을 알 수 있다.
  */

  return (
    <div className="App">
      <div className="main-nav">
        <p>연습용 실시간 채팅</p>
      </div>
      <div className="main-body">
        <div className="main-body-contents">
          <a href="/"><p>로그인</p></a>
          <a href="/"><p>회원가입</p></a> 
          <p>현재 가입한 사용자 명단</p>
          <p>{server_content}</p>
          <p>{사용자의정보[0]} | {사용자의정보[1]} | {사용자의정보[2]}{b}</p>
          <p>{사용자의정보[0]} | {사용자의정보[1]} | {사용자의정보[2]}{b}</p>
          <p>{사용자의정보[0]} | {사용자의정보[1]} | {사용자의정보[2]}{b}</p>
        </div>
      </div>
      <div className="main-footer">
        <h4>이 프로젝트는 원작자가 존재하며, 사용시 원작자의 허락이 요구됩니다.</h4>
        <h4>원작자의 동의를 구하고 싶으면 tlcks1211@gmail.com에 메일로 동의를 구하시고, 답변을 얻으시길 바랍니다.</h4>
      </div>
    </div>
  );
}

export default App;
