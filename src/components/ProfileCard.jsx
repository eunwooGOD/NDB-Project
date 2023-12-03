import React from 'react'
import '../style/MyPage.css'
import profileImage from '../assets/beomsu/profile.png'

export const ProfileCard = () => {
  return (

        <div className= {`mp_card`} onClick={() => handletabmenu(1)}>
        <div className="profile">
        <div className="mp_banner">
          <img
            src={profileImage}
            style={{
              borderRadius: '5px',
              boxSizing: 'cover',
            //   padding: '25px',
              width: '80%',
            }}
          ></img>
        </div>
          <h2 className="mp_Name" id="Mp_id">
            NSDBPRO@gmail.com
          </h2>
          <h2 className="mp_Name" id="Mp_name">
            순두부님
          </h2>
        </div>
        
      </div>

  )
}

export default ProfileCard