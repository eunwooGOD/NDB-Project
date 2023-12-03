import React, { useState} from 'react'
import '../style/Mypage.css'
import UserInfo from '../components/UserInfo'
import Subinfo from '../components/Subinfo'
import QA from '../components/QA'
import CompleteProblem from '../components/CompleteProblem'
import ProfileCard from '../components/ProfileCard'



function Mypage() {
 {
  const [tabmenu, setTabmenu] = useState(0)

  const handletabmenu = (tabNumber) => {
    setTabmenu(tabNumber);
    // 특정 탭이 선택되었을 때만 mp_card를 보여줌
    if (tabNumber === 1) {
      setNonedisplay('');
    } else {
      setNonedisplay('displaynone'); // 클래스 이름 'displaynone' 확인 필요
    }
    console.log('확인되었습니다.', tabNumber);
  };
  
  return (
    <div>
    <div className="my_main_container">
      
      {/* tab메뉴창 */}
      <div className='mp_tabstate'>
      <div className="mp_tabmenu notosanskr">
        <div className="mp_list">
          <ul className="mp_tabs notosanskr">
            <li
              className={`mp_tab-2 ${tabmenu === 2 ? 'current' : ''}`}
              onClick={() => handletabmenu(2)}
            >
              {' '}
              개인 정보
            </li>
            <li
              className={`mp_tab-3 ${tabmenu === 3 ? 'current' : ''}
              }`}
              id={2}
              onClick={() => handletabmenu(3)}
            >
              풀었던 문제
            </li>
            <li
              className={`mp_tab-4  ${tabmenu === 4 ? 'current' : ''}
              }`}
              id={3}
              onClick={() => handletabmenu(4)}
            >
              결제 정보
            </li>
            <li
              className={`mp_tab-5  ${tabmenu === 5 ? 'current' : ''}
              }`}
              id={4}
              onClick={() => handletabmenu(5)}
            >
              문의 사항
            </li>
          </ul>
        </div>
        
        
      </div>
      {tabmenu === 0 && <ProfileCard />}
      {tabmenu === 2 && <UserInfo />}
      {tabmenu === 3 && <CompleteProblem/>}
      {tabmenu === 4 && <Subinfo/>}
      {tabmenu === 5 && <QA/>}
      </div>
    </div>
    </div>
  )
}}

export default Mypage
