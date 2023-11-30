import React, { useState } from 'react';
import SubsModal from '../components/SubsModal'; // SubsModal 컴포넌트를 임포트합니다.
import '../style/Subs.css'; // Subs.css를 임포트합니다.

const SubsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 결제 요청 함수
  const requestPay = () => {
    console.log("구독함수 실행");
    if (window.IMP) {
      const IMP = window.IMP;
      IMP.init('iamport'); // 'iamport'는 가맹점 식별코드
      IMP.request_pay({
        pg: "inicis",
        pay_method: "card",
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '결제테스트',
        amount: 5000,
        buyer_email: 'iamport@siot.do',
        buyer_name: '김도형',
        buyer_tel: '010-1234-5678',
        buyer_addr: '광주인공지능사관학교NSDB',
        buyer_postcode: '123-456'
      }, response => {
        if (response.success) {
          alert('결제가 완료되었습니다.');
          setIsModalOpen(false); // 모달 닫기
        } else {
          alert('결제에 실패하였습니다. 에러내용: ' + response.error_msg);
        }
      });
    }
  };

  // PRO 요금제 결제 요청 함수
  const requestPay1 = () => {
    console.log("PRO 구독함수 실행");
    if (window.IMP) {
      const IMP = window.IMP;
      IMP.init('iamport');
      IMP.request_pay({
        pg: "inicis",
        pay_method: "card",
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: 'PRO 결제테스트',
        amount: 7000,
        buyer_email: 'iamport@siot.do',
        buyer_name: '김도형',
        buyer_tel: '010-1234-5678',
        buyer_addr: '광주인공지능사관학교NSDB',
        buyer_postcode: '123-456'
      }, response => {
        if (response.success) {
          alert('PRO 구독이 완료되었습니다.');
          setIsModalOpen(false); // 모달 닫기
        } else {
          alert('결제에 실패하였습니다. 에러내용: ' + response.error_msg);
        }
      });
    }
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
