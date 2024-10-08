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
                            <div className="time-zone"> 2024-09-19 19:00 &nbsp; </div>
                            <div className="name"> | 이름1 &nbsp;</div>
                            <div className="my-chat-img"><img src="/" ></img></div>
                        </div>
                        <div className="my-chat-content">안녕하세요.</div>
                    </div>
                </div>
                <div className="the-other-chat">
                    <div className="the-other-chat-wrap">
                        <div className="chat-info">
                            <div className="chat-img"><img src="/" ></img></div>
                            <div className="name"> &nbsp; 이름2 | </div>
                            <div className="time-zone"> &nbsp; 2024-09-19 19:00 </div>
                        </div>
                        <div className="the-other-chat-content">안녕하세요. 오늘 점심은 먹었어요?</div>
                    </div>
                </div>
                <div className="my-chat">
                <div className="my-chat-wrap">
                        <div className="chat-info">
                            <div className="time-zone"> 2024-09-19 19:00 &nbsp; </div>
                            <div className="name"> | 이름1 &nbsp;</div>
                            <div className="my-chat-img"><img src="/" ></img></div>
                        </div>
                        <div className="my-chat-content">네 저는 라면 먹었습니다.</div>
                    </div>
                </div>
                <div className="the-other-chat">
                    <div className="the-other-chat-wrap">
                        <div className="chat-info">
                            <div className="chat-img"><img src="/" ></img></div>
                            <div className="name"> &nbsp; 이름2 | </div>
                            <div className="time-zone"> &nbsp; 2024-09-19 19:00 </div>
                        </div>
                        <div className="the-other-chat-content">저는 갈비탕 먹었습니다.</div>
                    </div>
                </div>
                <div className="the-other-chat">
                    <div className="the-other-chat-wrap">
                        <div className="chat-info">
                            <div className="chat-img"><img src="/" ></img></div>
                            <div className="name"> &nbsp; 이름2 | </div>
                            <div className="time-zone"> &nbsp; 2024-09-19 19:00 </div>
                        </div>
                        <div className="the-other-chat-content">저는 도시락 먹었네요</div>
                    </div>
                </div>
                <div className="my-chat">
                    <div className="my-chat-wrap">
                        <div className="chat-info">
                            <div className="time-zone"> 2024-09-19 19:00 &nbsp; </div>
                            <div className="name"> | 이름1 &nbsp;</div>
                            <div className="my-chat-img"><img src="/" ></img></div>
                        </div>
                        <div className="my-chat-content">모든 국민은 종교의 자유를 가진다. 국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이 있거나 의장이 국가의 안전보장을 위하여 필요하다고 인정할 때에는 공개하지 아니할 수 있다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다.

대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다.</div>
                    </div>
                </div>
                <div className="the-other-chat">
                    <div className="the-other-chat-wrap">
                        <div className="chat-info">
                            <div className="chat-img"><img src="/" ></img></div>
                            <div className="name"> &nbsp; 이름2 | </div>
                            <div className="time-zone"> &nbsp; 2024-09-19 19:00 </div>
                        </div>
                        <div className="the-other-chat-content">모든 국민은 종교의 자유를 가진다. 국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이 있거나 의장이 국가의 안전보장을 위하여 필요하다고 인정할 때에는 공개하지 아니할 수 있다. 사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다.

대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다.</div>
                    </div>
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