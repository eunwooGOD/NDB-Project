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
    const value = e.target.innertext
    console.log('확인되었습니다.', value)
   };
  

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
     <div className='mp_list'>
     <ul className="mp_tabs notosanskr">
       <li
         className={'mp_tab-1'}
         onClick={ handletabmenu}
       >
         풀었던 문제
       </li>
       <li
         className={'mp_tab-2'}
         id={2}
         onClick={(e) => handletabmenu}
       >
         개인 정보
       </li>
       <li
         className={`mp_tab-3 ${tabmenu}`}
         id={3}
         onClick={(e) => handletabmenu}
       >
         결제 정보
       </li>
       <li
         className={`mp_tab-5 ${tabmenu}`}
         id={4}
         onClick={(e) => handletabmenu}
       >
         문의 사항
       </li>
     </ul>
     </div>
    </div>
        {/* TabContent 컴포넌트 추가
        <TabContent
          data-tab={tabId}
          member_lv={member_lv}
          userGrade={userGrade}
          questions={questions}
          total_pages={total_pages}
        /> */}
      </div>
  )
}

export default Mypage
