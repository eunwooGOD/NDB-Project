import React, { useState } from 'react'
import BASIC from '../assets/beomsu/BASIC.png'
import STANDARD from '../assets/beomsu/STANDARD.png'
import PRO from '../assets/beomsu/PRO.png'

const Subinfo = ({ tabmenu }) => {
  const [member_lv,setmember_lv] = useState(BASIC)
  return (
    <div id="mp_tab-3" className="mp_output">
      <h2 className="mp_h2">결제 정보</h2>
      <div className="mp_output">
        {member_lv === BASIC && (
          <img src={member_lv} alt="BASIC Membership Image" />
        )}
        {/* {member_lv === 'STANDARD' && (
          <img src={STANDARD} alt="STANDARD Membership Image" />
        )}
        {member_lv === 'pro' && (
          <img src={PRO} alt="PRO Membership Image" />
        )} */}
        
        {/* <img src="src\assets\beomsu\BASICcontrol.png" alt="" style={{marginTop: '5%'}}/> */}
      </div>
    </div>
  )
}

export default Subinfo
