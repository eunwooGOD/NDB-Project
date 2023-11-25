import React from 'react';

const PaymentRequest = ({ amount }) => {
    const requestPay = () => {
        if (typeof window.IMP === 'undefined') {
            alert('결제 모듈 로드 실패');
            return;
        }

        
        window.IMP.init('iamport'); // 'iamport'는 가맹점 식별코드
        window.IMP.request_pay({
            pg: "inicis", // 결제 게이트웨이
            pay_method: "card", // 결제 수단
            merchant_uid: 'merchant_' + new Date().getTime(), // 주문 번호
            name: name, // 결제명
            amount: amount, // 결제 금액
            buyer_email: buyerEmail,
            buyer_name: buyerName,
            buyer_tel: buyerTel,
            buyer_addr: buyerAddr,
            buyer_postcode: buyerPostcode
        }, function (rsp) {
            if (rsp.success) {
                alert('결제가 완료되었습니다.');
                // 성공 시 로직
            } else {
                alert(`결제에 실패하였습니다. 에러내용 : ${rsp.error_msg}`);
                // 실패 시 로직
            }
        });

    };

    return (
        <button onClick={requestPay}>결제하기</button>
    );
};

export default PaymentRequest;
