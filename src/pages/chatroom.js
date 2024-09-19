import React, { useState } from "react";
import '../css/chatroom.css';

function Chatroom(){

    let [userChatContent, setUserChatContent] = useState({
        chatContent : ""
    });

    return(
        <div className="chatroom-wrap">
            <div className="chatroom-content">
                <div className="my-chat">
                    <div className="my-chat-wrap">
                        <div className="chat-info">
                            <div className="time-zone">2024-09-19 19:00</div>
                            <div className="name"> 이름1</div>
                            <div className="my-chat-img"><img src="/" ></img></div>
                        </div>
                        <div className="my-chat-content">안녕하세요.</div>
                    </div>
                </div>
                <div className="the-other-chat">
                    <p>안녕하세요. 오늘 점심은 먹었어요?</p>
                </div>
                <div className="my-chat">
                    <p>네 저는 라면 먹었어요.</p>
                </div>
                <div className="the-other-chat">
                    <p>저는 갈비탕먹었습니다.</p>
                </div>
                <div className="the-other-chat">
                    <p>전 도시락 먹었네요.</p>
                </div>
            </div>
            <div className="chat-write">
                <form>
                    <input type="text"></input>
                    <button type="submit">보내기</button>
                </form>
            </div>
        </div>
    );
};
export default Chatroom;