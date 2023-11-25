
import React, { useState } from 'react';
import '../style/Mypage.css';
import TabContent from '../components/TabContent';

function Mypage({ tabId, member_lv, userGrade, questions, total_pages, name, password, id }) {
  const [tabmenu, setTabmenu] = useState('');

  const handletabmenu = (e) => {
    const value = e.target.value;
    setTabmenu('mp_current');
  };

  return (
    <div className="my_main_container">
      {/* 프로필카드 */}
      <div className="mp_card">
        <div className="mp_banner">
          <div className="profile"></div>
        </div>
        <h2 className="mp_Name" id="Mp_id">id</h2>
        <span className="mp_Name" id="Mp_name">NAME</span>
      </div>

      {/* tab메뉴창 */}
      <div className="mp_tabmenu notosanskr">
        <ul className="mp_tabs notosanskr">
          <li className={`mp_tab-link current ${tabmenu}`} data-tab="mp_tab-1" onClick={handletabmenu}>풀었던 문제</li>
          <li className={`mp_tab-link notosanskr ${tabmenu}`} data-tab="mp_tab-2" onClick={handletabmenu}>개인 정보</li>
          <li className={`mp_tab-link notosanskr ${tabmenu}`} data-tab="mp_tab-3" onClick={handletabmenu}>결제 정보</li>
          {/* 다른 탭들 추가 */}
        </ul>

        {/* TabContent 컴포넌트 추가 */}
        <TabContent
          tabId={tabId}
          member_lv={member_lv}
          userGrade={userGrade}
          questions={questions}
          total_pages={total_pages}
        />
      </div>
    </div>
  );
}

export default Mypage;