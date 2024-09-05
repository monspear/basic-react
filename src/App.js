import './App.css';
import { useState } from 'react';

function App() {
  let server_content = '서버에서 가져온 회원가입한 사용자 명단';
  let [사용자의정보, b] = useState(['사용자의 닉네임','사용자의 나이','사용자의 거주지']); // 첫번째는 내용, 두번째는 상태 변환을 도와주는 함수
  
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
