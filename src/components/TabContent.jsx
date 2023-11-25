import React from 'react';

function TabContent({ tabId, member_lv, userGrade, questions, total_pages }) {
  switch (tabId) {
    case 'mp_tab-1':
      return (
        <div id="mp_tab-1" className="mp_tab-content current">
          <h2 className='mp_h2'>풀었던 문제</h2>
          <div className="mp_output" id="mp_listSpace">
            <table id='mp_review'>
              <thead>
                <tr>
                  <th>EXAM_ID</th>
                  <th>EXAM_LANGUAGE</th>
                  <th>SEARCH_WORD</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question) => (
                  <tr key={question.EXAM_ID}>
                    <td><a href={`/mypage/index/${question.EXAM_ID}`}>{question.EXAM_ID}</a></td>
                    <td><a href={`/mypage/index/${question.EXAM_ID}`}>{question.EXAM_LANGUAGE}</a></td>
                    <td><a href={`/mypage/index/${question.EXAM_ID}`}>{question.SEARCH_WORD}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {Array.from({ length: total_pages }, (_, i) => (
                <a key={i + 1} href={`/mypage?page=${i + 1}`}>{i + 1}</a>
              ))}
            </div>
          </div>
        </div>
      );

    case 'mp_tab-2':
      return (
        <div id="mp_tab-2" className="mp_tab-content">
          <h2 className='mp_h2'>개인 정보</h2>
          <div className="mp_output" id="mp_frotable">
            {/* 개인 정보 표시 및 입력 폼 등을 여기에 추가 */}
          </div>
        </div>
      );

    case 'mp_tab-3':
      return (
        <div id="mp_tab-3" className="mp_tab-content">
          <h2 className='mp_h2'>결제 정보</h2>
          <div className="mp_output">
            {member_lv === "BASIC" && (
              <img src="/img/BASIC.png" alt="BASIC Membership Image" />
            )}
            {member_lv === "pro" && (
              <img src="/img/PRO.png" alt="PRO Membership Image" />
            )}
            {member_lv === "STANDARD" && (
              <img src="/img/STANDARD.png" alt="STANDARD Membership Image" />
            )}
          </div>
        </div>
      );

    // 다른 탭에 대한 컴포넌트 추가

    default:
      return null;
  }
}

export default TabContent;