import React, { useState, useEffect } from 'react';
import '../style/ChatBot.css'; // CSS 파일 임포트

function ChatBot() {
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);
    const api_key = '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'; // OpenAI API 키

    const toggleChat = () => {
        setIsChatVisible(!isChatVisible);
        setIsReviewFormVisible(false);
    };

    const openChat = () => {
        setIsChatVisible(true);
        setIsReviewFormVisible(false);
    };

    const openReview = () => {
        setIsReviewFormVisible(true);
        setIsChatVisible(false);
    };

    const back = () => {
        setIsChatVisible(false);
        setIsReviewFormVisible(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (userInput.trim() === "") return;
    
        const newMessage = { role: 'user', content: userInput };
        setMessages(messages => [...messages, newMessage]);
        setUserInput("");
    
        // 사용자 메시지를 GPT로 전달하여 답변 받기
        const data = {
            model: 'gpt-3.5-turbo',
            temperature: 0.5,
            n: 1,
            messages: [
                { role: 'system', content: 'You are now chatting with the AI.' },
                ...messages,
                { role: 'user', content: userInput }
            ],
        };
    
        fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + api_key,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('API 요청 실패');
            }
            return response.json();
        })
        .then(responseData => {
            const botResponse = { role: 'bot', content: responseData.choices[0].message.content.trim() };
            setMessages(messages => [...messages, botResponse]);
        })
        .catch(error => {
            console.error('API 요청 중 에러 발생:', error);
        });
    };

    // messages 배열이 업데이트될 때마다 sendMessage를 호출하여 답변을 얻음
    useEffect(() => {
        if (messages[messages.length - 1]?.role === 'user') {
            sendMessage();
        }
    }, [messages]);

    return (
        <div>
            <div className="chat-toggle-button" onClick={toggleChat}>👀</div>

            <div className={`chat-container ${isChatVisible || isReviewFormVisible ? 'open' : ''}`}>
                {/* 챗봇 헤더 */}
                <div className="chat-header">
                    <div className="header-title" onClick={toggleChat}>X</div>
                    <button onClick={back} style={{ display: isChatVisible || isReviewFormVisible ? 'block' : 'none' }}>〈</button>
                    <div className="chat-logo">NDB</div>
                </div>

                {/* 버튼 컨테이너 */}
                <div className="button-container" style={{ display: !isChatVisible && !isReviewFormVisible ? 'block' : 'none' }}>
                    <p>안녕하세요.<br />NDB입니다.<br />무엇을 도와드릴까요?</p>
                    <button onClick={openChat}>질문하기</button>
                    <button onClick={openReview}>별점 리뷰하기</button>
                </div>

                {/* 챗봇 몸체 */}
                <div className="chat-body" style={{ display: isChatVisible ? 'block' : 'none' }}>
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}>
                            <div className="content">{message.content}</div>
                        </div>
                    ))}
                </div>

                {/* 사용자 입력창 */}
                <div className="chat-input" style={{ display: isChatVisible ? 'flex' : 'none' }}>
                    <input type="text" value={userInput} placeholder="메시지를 입력하세요" onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown} />
                    <button onClick={sendMessage}>전송</button>
                </div>

                {/* 별점 리뷰 폼 */}
                <form className="mb-3" style={{ display: isReviewFormVisible ? 'block' : 'none' }}>
                    {/* 별점 리뷰 폼 내용을 여기에 구현 */}
                </form>
            </div>
        </div>
    );
}

export default ChatBot;
