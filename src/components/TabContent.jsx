import React, { useState }  from 'react'

function TabContent({ tabId, member_lv, userGrade, questions, total_pages }) {
  

  return (
    <div>
    
    </div>
  )

  switch (tabId) {
    case 'mp_tab-1':
      return (
        <div id="mp_tab-1" className="mp_tab-content current">
          <h2 className="mp_h2">풀었던 문제</h2>
          <div className="mp_output" id="mp_listSpace">
            <table id="mp_review">
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
                    <td>
                      <a href={`/mypage/index/${question.EXAM_ID}`}>
                        {question.EXAM_ID}
                      </a>
                    </td>
                    <td>
                      <a href={`/mypage/index/${question.EXAM_ID}`}>
                        {question.EXAM_LANGUAGE}
                      </a>
                    </td>
                    <td>
                      <a href={`/mypage/index/${question.EXAM_ID}`}>
                        {question.SEARCH_WORD}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {Array.from({ length: total_pages }, (_, i) => (
                <a key={i + 1} href={`/mypage?page=${i + 1}`}>
                  {i + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
      )

    case 'mp_tab-2':
      return (
        <div id="mp_tab-2" className="mp_tab-content">
          <h2 className="mp_h2">개인 정보</h2>
          <div className="mp_output" id="mp_frotable">
            {/* 개인 정보 표시 및 입력 폼 등을 여기에 추가 */}
          </div>
        </div>
      )

    case 'mp_tab-3':
      return (
        <div id="mp_tab-3" className="mp_tab-content">
          <h2 className="mp_h2">결제 정보</h2>
          <div className="mp_output">
            {member_lv === 'BASIC' && (
              <img src="/img/BASIC.png" alt="BASIC Membership Image" />
            )}
            {member_lv === 'pro' && (
              <img src="/img/PRO.png" alt="PRO Membership Image" />
            )}
            {member_lv === 'STANDARD' && (
              <img src="/img/STANDARD.png" alt="STANDARD Membership Image" />
            )}
          </div>
        </div>
      )

    case 'mp_tab-4':
      return (
        <div id="mp_tab-4" classname="mp_tab-content">
          <h2 class="mp_h2">현재 등급</h2>
          <div class="mp_output" id="currentGradeInfo">
            <p>
              현재 등급: <span id="userGrade">{{ userGrade }}</span>
            </p>
          </div>
        </div>
      )

    case 'mp_tab-5':
      return <h2 class="mp_h2">탈퇴 하기</h2>

    case 'mp_tab-6':
      return (
        <div id="mp_tab-6" class="mp_tab-content">
          <h2 class="mp_h2">탈퇴 하기</h2>
          <div class="mp_output" id="mp_secession">
            <h2 class="mp_h2">문의할 사항</h2>
            <div class="mp_output" id="mp_questiontext">
              <textarea name="" cols="80" rows="20" id="mp_question"></textarea>
              <input type="text"></input>
              <div id="mp_secessionSpace">
                <p class="mp_secession">
                  아직 공부할 수 있는 문제가 많이 남아있어요!
                </p>
                <p class="mp_secession">정말로 탈퇴하실 건가요?</p>
                <p classname="mp_secession">
                  탈퇴하시면 지금까지 저장된 문제, 구독 정보, 등급이 전부
                  초기화되고 복구할 수 없습니다!
                </p>
                <button id="mp_secessionButton">탈퇴하기</button>
              </div>
            </div>
          </div>
        </div>
      )

    case 'mp_tab-7':
      return (
        <div id="mp_tab-7" class="mp_tab-content">
          <h2 class="mp_h2">계정연동</h2>
          <div>
            <p>계정 연동을 원하시면 아래의 버튼을 눌러주세요.</p>
            <button class="mp_auth-butoon google" onclick="location.href='#'">
              <img src="/img/google_img.png" alt="" class="mp_emoticon" />
            </button>
            <button class="mp_auth-butoon github" onclick="location.href='#'">
              <img src="/img/github_img.png" alt="" class="mp_emoticon" />
            </button>
            <button class="mp_auth-butoon kakao" onclick="location.href='#'">
              <img src="/img/kakao_img.png" alt="" class="mp_emoticon" />
            </button>
          </div>
        </div>
      )
    // 다른 탭에 대한 컴포넌트 추가

    default:
      return null
  }
}

export default TabContent
