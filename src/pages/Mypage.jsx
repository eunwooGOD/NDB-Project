import React, { useState } from 'react'
import '../style/Mypage.css'
import TabContent from '../components/TabContent'
import profileImage from '../assets/beomsu/profile.png'

function Mypage({
  tabId,
  member_lv,
  userGrade,
  questions,
  total_pages,
  name,
  password,
  id,
}) {
  const [tabmenu, setTabmenu] = useState('')
  const handletabmenu = (e) => {
    const value = e.target.className
    value == '풀었던 문제' ? setTabmenu('current') : setTabmenu('notosanskr')
    console.log('클릭되었습니다', tabmenu)
  }

  return (
    <div className="my_main_container">
      {/* 프로필카드 */}
      <div className="mp_card">
      <div className="profile">
            <h2 className="mp_Name" id="Mp_id">
              id
            </h2>
            <span className="mp_Name" id="Mp_name">
              NAME
            </span>
          </div>
        <div className="mp_banner">
          <img
            src={profileImage}
            style={{ borderRadius: '5px', boxSizing: 'cover', padding:'25px', width:'60%'}}
          ></img>
        </div>
      </div>

      {/* tab메뉴창 */}
      <div className="mp_tabmenu notosanskr">
        <ul className="mp_tabs notosanskr">
          <li
            className={`mp_tab-link ${tabmenu}`}
            data-tab="mp_tab-1"
            onClick={handletabmenu}
          >
            풀었던 문제
          </li>
          <li
            className={`mp_tab-link notosanskr ${tabmenu}`}
            data-tab="mp_tab-2"
            onClick={handletabmenu}
          >
            개인 정보
          </li>
          <li
            className={`mp_tab-link notosanskr ${tabmenu}`}
            data-tab="mp_tab-3"
            onClick={handletabmenu}
          >
            결제 정보
          </li>
          <li
            className={`mp_tab-link notosanskr ${tabmenu}`}
            data-tab="mp_tab-4"
            onClick={handletabmenu}
          >
            현재 등급
          </li>
          <li
            className={`mp_tab-link notosanskr ${tabmenu}`}
            data-tab="mp_tab-5"
            onClick={handletabmenu}
          >
            문의 사항
          </li>
          <li
            className={`mp_tab-link notosanskr ${tabmenu}`}
            data-tab="mp_tab-6"
            onClick={handletabmenu}
          >
            탈퇴 하기
          </li>
          <li
            className={`mp_tab-link notosanskr ${tabmenu}`}
            data-tab="mp_tab-7"
            onClick={handletabmenu}
          >
            계정 연동
          </li>
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
  )
}

export default Mypage
