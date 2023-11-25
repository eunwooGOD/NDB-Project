import React, { useState } from 'react';
import PaymentRequest from '../components/Payment'; // 결제 요청 컴포넌트

const SubsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <button onClick={toggleModal}>구독하기</button>
            {isModalOpen && (
                <div className="subs_modal">
                    <PaymentRequest amount={5000}  />
                    <button onClick={toggleModal}>닫기</button>
                </div>
            )}
        </div>
    );
};

export default SubsPage;
