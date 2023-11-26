import React, { useState } from 'react';
import '../style/Subs.css';

const SubsModal = ({ isOpen, onClose }) => {
  // 기본 요금제 결제 요청 함수
  const requestPay = () => {
    console.log("기본 구독함수 실행");
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
          onClose();// 모달 닫기
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
          onClose();// 모달 닫기
        } else {
          alert('결제에 실패하였습니다. 에러내용: ' + response.error_msg);
        }
      });
    }
  };



  // 구독 버튼 클릭 이벤트 핸들러
  const handleSubscribeClick = (amount) => {
    onClose(); // 모달을 닫습니다.
    if (amount === 5000) {
      requestPay();
    } else if (amount === 7000) {
      requestPay1();
    }
  };
  
  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={onClose}>
          <div className="subs_modal">
            <div className="subs_modal_content">
              <button className="subs_button_close" onClick={onClose}>&times;</button>
              <button onClick={() => handleSubscribeClick(5000)}>기본 구독</button>
              <button onClick={() => handleSubscribeClick(7000)}>프리미엄 구독</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubsModal;
