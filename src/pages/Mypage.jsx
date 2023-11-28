import React, { useState} from 'react'
import '../style/Mypage.css'
import TabContent from '../components/TabContent'
import profileImage from '../assets/beomsu/profile.png'


function Mypage() {[
  tabId,
  member_lv,
  userGrade,
  questions,
  total_pages,
  password,
  id,]
} {
  const [tabmenu, setTabmenu] = useState(null)
  const handletabmenu = (e) => {
    setTabmenu(e === tabmenu ? null : e)
    console.log('확인되었습니다.', e)

  }

  return (
    <div className="my_main_container">
      {/* 프로필카드 */}
      <div className="mp_card">
        <div className="profile">
          <h2 className="mp_Name" id="Mp_id">
            id
          </h2>
          <h2 className="mp_Name" id="Mp_name">
            NAME
          </h2>
        </div>
        <div className="mp_banner">
          <img
            src={profileImage}
            style={{
              borderRadius: '5px',
              boxSizing: 'cover',
              padding: '25px',
              width: '40%',
            }}
          ></img>
        </div>
      </div>

      {/* tab메뉴창 */}
      <div className="mp_tabmenu notosanskr">
        <div className="mp_list">
          <ul className="mp_tabs notosanskr">
            <li
              className={`mp_tab-1 ${tabmenu === 1 ? 'current' : ''}`}
              onClick={() => handletabmenu(1)}
            >
              {' '}
              풀었던 문제
            </li>
            <li
              
              className={`mp_tab-2 ${tabmenu === 2 ? 'current' : ''}
              }`}
              id={2}
              onClick={() => handletabmenu(2)}
            >
              개인 정보
            </li>
            <li
              
              className={`mp_tab-3  ${tabmenu === 3 ? 'current' : ''}
              }`}
              id={3}
              onClick={() => handletabmenu(3)}
            >
              결제 정보
            </li>
            <li
              className={`mp_tab-5  ${tabmenu === 4 ? 'current' : ''}
              }`}
              id={4}
              onClick={() => handletabmenu(4)}
            >
              문의 사항
            </li>
          </ul>
        </div>
      </div>
      TabContent 컴포넌트 추가
        <TabContent
          tabID={tabId}
          member_lv={member_lv}
          userGrade={userGrade}
          questions={questions}
          total_pages={total_pages}
        />
    </div>
  )
}

export default Mypage
