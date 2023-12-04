import React, { useState } from 'react'
import '../style/MyPage.css'
import googlepng from '../assets/beomsu/google_img.png'
import githubpng from '../assets/beomsu/github_img.png'
import kakaopng from '../assets/beomsu/kakao_img.png'

const UserInfo = ({ tabmenu }) => {
  return (
    <div className="mp_output">
      <div className="mp_infoarea">
        <h2 className="mp_h2">개인 정보</h2>
        <div className="mp_inputarea">
          <p style={{ width: '100px' }}>이메일</p>
          <input
            type="text"
            readOnly={true}
            style={{ width: '300px', margin: 'auto' }}
          ></input>
        </div>
        <div className="mp_inputarea">
          <p style={{ width: '100px' }}>별명</p>
          <input
            type="text"
            readOnly={true}
            style={{ width: '300px', margin: 'auto' }}
          ></input>
        </div>
        <div className="mp_inputarea">
          <p style={{ width: '120px' }}>비밀번호 변경</p>
          <input type="text" style={{ width: '300px', margin: 'auto' }}></input>
        </div>
      </div>
      <h2 className="mp_h2">현재 등급</h2>
      <div className="mp_level">
        <p>현재 당신의 등급은 뉴비입니다.</p>
        <ui>
          <li><p>- 앞으로 5문제를 더 맞히시면 '콩'으로 진화합니다!</p></li>
          <li><p>- 언제나 시작이 반이죠. 조금만 더 화이팅!</p></li>
        </ui>
      </div>
      {/* 개인 정보 표시 및 입력 폼 등을 여기에 추가 */}

      {/* 회원탈퇴, 부가기능을 표시하는 곳 */}
      <div className="mp_etcsection">
        <div className="mp_output" id="mp_secession">
          <h2 className="mp_h2">탈퇴하기</h2>
          <p style={{color:'black'}}> 정말로 탈퇴하실건가요?</p>
          <button id="mp_secessionButton">탈퇴하기</button>
        </div>
        <div className="mp_socialLogin">
          <div>
            <h2 className="mp_h2">계정연동</h2>
          </div>
          <div className="mp_soicalLoginbutton">
            <button
              className="mp_auth-butoon google"
              onclick="location.href='#'"
            >
              <img src={googlepng} alt="" className="mp_emoticon" />
            </button>
            <button
              className="mp_auth-butoon github"
              onclick="location.href='#'"
            >
              <img src={githubpng} alt="" className="mp_emoticon" />
            </button>
            <button
              className="mp_auth-butoon kakao"
              onclick="location.href='#'"
            >
              <img src={kakaopng} alt="" className="mp_emoticon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
