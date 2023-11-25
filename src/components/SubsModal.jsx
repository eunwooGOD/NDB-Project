import React, { useState } from 'react';
import '../style/Subs.css'; // Subs.css 파일 임포트

const SubsModal = ({ requestPay, requestPay1 }) => {
    // 모달 표시 상태를 위한 state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달을 여닫는 함수
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // 구독 버튼 클릭 이벤트 핸들러
    const handleSubscribeClick = (amount) => {
        toggleModal(); // 모달을 닫습니다.
        if (amount === 5000) {
            requestPay(5000); // requestPay 함수를 호출합니다.
        } else if (amount === 7000) {
            requestPay1(7000); // requestPay1 함수를 호출합니다.
        }
    };

    return (
        <>
            {isModalOpen && <div className="overlay" onClick={toggleModal}></div>}
            <div className={`subs_modal ${isModalOpen ? 'active' : ''}`}>
                {/* 모달 내용 */}
                <div className="subs_modal_content">
                    <div className='subs_header'>
                        {/* ... 기타 모달 내용 ... */}
                        <button className="subs_button_close" onClick={toggleModal}>&times;</button>
                        {/* ... 기타 모달 내용 ... */}
                        <button onClick={() => handleSubscribeClick(5000)} id="subscribe-link2">구독하기</button>
                        {/* ... 기타 모달 내용 ... */}
                        <button onClick={() => handleSubscribeClick(7000)} id="subscribe-link3">구독하기</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubsModal;
