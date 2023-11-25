import React, { useState } from 'react';
import SubsModal from '../components/SubsModal';

const SubsPage = () => {
  // 모달 표시 상태를 위한 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 결제 요청 함수
  const requestPay = (amount) => {
    // 여기에 결제 요청 로직을 구현합니다.
    // 예: API 호출 등
    console.log(`구독 요청 - 가격: ${amount}`);
    // 결제 성공 시 다른 로직을 수행할 수 있습니다.
    // 예: 페이지 이동, 알림 표시 등
    alert('결제가 완료되었습니다.');
    setIsModalOpen(false); // 모달을 닫습니다.
  };

  // PRO 요금제 결제 요청 함수
  const requestPay1 = (amount) => {
    // 여기에 결제 요청 로직을 구현합니다.
    // 예: API 호출 등
    console.log(`PRO 구독 요청 - 가격: ${amount}`);
    // 결제 성공 시 다른 로직을 수행할 수 있습니다.
    // 예: 페이지 이동, 알림 표시 등
    alert('PRO 구독이 완료되었습니다.');
    setIsModalOpen(false); // 모달을 닫습니다.
  };

  // 모달을 여닫는 함수
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button onClick={toggleModal}>구독 모달 열기</button>
      {isModalOpen && <SubsModal requestPay={requestPay} requestPay1={requestPay1} />}
    </div>
  );
};

export default SubsPage;
