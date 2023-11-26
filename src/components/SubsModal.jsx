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



  // 모달 외부 클릭 핸들러
  const handleOutsideClick = (e) => {
    onClose();
  };

  // 모달 내부 클릭 핸들러
  const handleModalContentClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 중지
  };


  return (
    <>
      {isOpen ? (
        <div className="overlay overlay-active" onClick={handleOutsideClick}>
          <div className="subs_modal_content" onClick={handleModalContentClick}>
            {/* 새로운 구독창 내용 */}
            <div className="subs_header">
              <h1 id="subs_title">Member of NDB</h1>
              <button className="subs_button_close" onClick={onClose}>&times;</button>
              <p className="subs_subtitle">
                학습 능률을 높이는 방법! <br />
                "구독"으로 다양한 혜택을 누리세요! <br /><br />
                For month
              </p>
            </div>
            <div className="subs_desc_content">
              {/* BASIC 구독 옵션 */}
              <div className="content1 content-box">
                <h3>BASIC</h3>
                <div className="subs_benefit">
                  <div className="subs_price">무료</div>
                  <ul className="subs_li">
                    <li>- 버전 업그레이드</li>
                    <li>- 테마 설정</li>
                    <li>- 예제에 대한 개념 정리</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>

                    {/* 기타 항목 */}
                  </ul>
                </div>
                <div className="subs_btn">
                  <a href="http://localhost:3003/index" id="subscribe-link"><button>구독하기</button></a>
                </div>
              </div>

              {/* STANDARD 구독 옵션 */}
              <div className="content2 content-box">
                <h3>STANDARD</h3>
                <div className="subs_benefit">
                  <div className="subs_price">￦5,000</div>
                  <ul className="subs_li">
                    <li>-&nbsp; 버전 업그레이드 </li>
                    <li>-&nbsp; 테마 설정 </li>

                    <li>-&nbsp; 예제에 대한 개념 정리</li>
                    <li>-&nbsp; 배너 제거 </li>
                    <li>-&nbsp; 자사 커뮤니티 사이트 가입</li>
                    <li>-&nbsp; 추천 강의 20% 할인권</li>
                    <li>&nbsp; </li>
                    {/* 기타 항목 */}
                  </ul>
                </div>
                <div className="subs_btn">
                  <button onClick={requestPay} id="subscribe-link2">구독하기</button>
                </div>
              </div>

              {/* PRO 구독 옵션 */}
              <div className="content3 content-box">
                <h3>PRO</h3>
                <div className="subs_benefit">
                  <div className="subs_price">￦7,000</div>
                  <ul className="subs_li">
                    <li>-&nbsp; 버전 업그레이드 </li>
                    <li>-&nbsp; 테마 설정 </li>

                    <li>-&nbsp; 예제에 대한 개념 정리 </li>
                    <li>-&nbsp; 배너 제거 </li>
                    <li>-&nbsp; 자사 커뮤니티 사이트 가입</li>

                    <li>-&nbsp; 추천 강의 40% 할인권</li>
                    <li>-&nbsp; 인기 문제&개념 모음집PDF </li>
                    {/* 기타 항목 */}
                  </ul>
                </div>
                <div className="subs_btn">
                  <button onClick={requestPay1} id="subscribe-link3">구독하기</button>
                </div>
              </div>

            </div>


          </div>
        </div>
      ) : (
        <div className="overlay" onClick={handleOutsideClick}>
          <div className="subs_modal_content">
            {/* 여기서는 모달이 비활성화되었을 때의 내용을 보여주는 것 같으므로, 필요에 따라 내용 조정 */}
            <button className="subs_button_close" onClick={onClose}>&times;</button>
            <button onClick={() => handleSubscribeClick(5000)}>기본 구독</button>
            <button onClick={() => handleSubscribeClick(7000)}>프리미엄 구독</button>
          </div>
        </div>
      )}
    </>
  );
}
export default SubsModal;
