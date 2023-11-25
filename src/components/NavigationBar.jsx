import React, { useState } from 'react';
import SubsModal from './SubsModal'; // SubsModal 컴포넌트의 경로를 정확하게 지정해주세요.
import '../style/Subs.css';

const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달을 열기 위한 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav id="main_navbar">
      <div className="main_navLeft">
        <div id="sidebar_toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="leftside">
            <a><li>닉네임</li></a>
            <a><li>회원정보</li></a>
            <a><li>정보</li></a>
            <li><a href="#" className="subs_btn_open" onClick={openModal}>구독</a></li>
            
          </ul>
        </div>
        <div className="main_nav_logo">
          <a href="http://localhost:3003/index">NDB</a>
        </div>
        <div className="main_navMiddle">
          <div className="main_Nav_search">
            <select name="main_language" id="main_navSearchbar" className="main_searchLanguage" style={{ width: "50px", height: "30px" }}>
              <option value=" ">언어</option>
              {/* ...기타 옵션... */}
            </select>
            <input type="text" className="main_searchBar" name="main_searchBar_Name" />
            <div className="main_autocomplete"></div>
            <button type="submit" className="main_search_button" onClick={() => fetchData()}>
              {/* 아이콘은 필요에 따라 추가하세요. */}
            </button>
          </div>
        </div>
      </div>
      <div className="main_navRight">
        <ul className="popularSerch">
          {/* ...기타 리스트 아이템... */}
        </ul>
        <div className="checkbox-wrapper-2">
          <input type="checkbox" id="main_Nav_themecheck" className="sc-gJwTLC ikxBAC" onClick={() => is_checked()} />
        </div>
        <div id="main_btnWrap">
          <button type="button" className="main_signupBtn main_modalBtn">log out</button>
        </div>
      </div>

      {/* 구독 모달 */}
      <SubsModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}

export default NavigationBar;
