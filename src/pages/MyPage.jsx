import React, { useState} from 'react'
import '../style/Mypage.css'
import UserInfo from '../components/UserInfo'
import profileImage from '../assets/beomsu/profile.png'
import Subinfo from '../components/Subinfo'
import QA from '../components/QA'
import CompleteProblem from '../components/CompleteProblem'


function Mypage() {
 {
  const [tabmenu, setTabmenu] = useState(null)
  const handletabmenu = (e) => {
    setTabmenu(e)
    console.log('확인되었습니다.', e)
  }
  
  return (
    <div>
    <div className="my_main_container">
      <div className="mp_card">
        <div className="profile">
          <h2 className="mp_Name" id="Mp_id">
            NSDBPRO@gmail.com
          </h2>
          <h2 className="mp_Name" id="Mp_name">
            순두부님
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
      <div className='mp_tabstate'>
      <div className="mp_tabmenu notosanskr">
        <div className="mp_list">
          <ul className="mp_tabs notosanskr">
            <li
              className={`mp_tab-1 ${tabmenu === 1 ? 'current' : ''}`}
              onClick={() => handletabmenu(1)}
            >
              {' '}
              개인 정보
            </li>
            <li
              className={`mp_tab-2 ${tabmenu === 2 ? 'current' : ''}
              }`}
              id={2}
              onClick={() => handletabmenu(2)}
            >
              풀었던 문제
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
      {tabmenu === 1 && <UserInfo/>}
      {tabmenu === 2 && <CompleteProblem/>}
      {tabmenu === 3 && <Subinfo/>}
      {tabmenu === 4 && <QA/>}
      </div>
    </div>
    </div>
  )
}}

export default Mypage
