import React, { useState } from 'react'

const UserInfo = ({ tabmenu }) => {
  return (
    <div className="mp_output">
      <div className="mp_output" id="mp_frotable">
        <div>
          <h2 className="mp_h2">개인 정보</h2>
        </div>
        <div>
        <h2 className="mp_h2">현재 등급</h2>
        </div>
        <div>
        <h2 className="mp_h2">탈퇴 하기</h2>
        </div>
        {/* 개인 정보 표시 및 입력 폼 등을 여기에 추가 */}
      </div>
      <div className="mp_output" id="mp_secession">
        <div id="mp_secessionSpace">
          <button id="mp_secessionButton">탈퇴하기</button>
        </div>
      </div>
      <h2 className="mp_h2">계정연동</h2>
      <div>
        <p>계정 연동을 원하시면 아래의 버튼을 눌러주세요.</p>
        <button className="mp_auth-butoon google" onclick="location.href='#'">
          <img src="/img/google_img.png" alt="" className="mp_emoticon" />
        </button>
        <button className="mp_auth-butoon github" onclick="location.href='#'">
          <img src="/img/github_img.png" alt="" className="mp_emoticon" />
        </button>
        <button className="mp_auth-butoon kakao" onclick="location.href='#'">
          <img src="/img/kakao_img.png" alt="" className="mp_emoticon" />
        </button>
      </div>
    </div>
  )
}

export default UserInfo
