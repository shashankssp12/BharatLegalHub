import React, { useRef } from 'react'
import "./styles/ChatBot.css"

const ChatBot = () => {
    const ref = useRef(null);

    const handleBot = () => {
        ref.current.classList.toggle("activeChatBox");
    }

    return (
        <>
            <div className="chatBot">
                <div ref={ref} className="chatBox">
                    <div className="chatBotTitle">
                        DO YOU NEED HELP?
                    </div>
                    <div className="chatContainer">
                        <p className="bot">Hello, How can i help you</p>
                        <p className="me">I need to know about your sites</p>
                    </div>
                    <div className="msgHandler">
                        <input placeholder='Send a Message' type="text" />
                        <button className="sendMsg">Send</button>
                    </div>
                </div>
                <div onClick={handleBot} className="botToggle">
                    <div className="botContainer">

                        <img src="images/robot.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBot