import React from 'react'
import { Link } from 'react-router-dom'
import "../style/SideBar.css"

const SideBar = () => {
  return (
    <div id="sidebar_toggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="leftside">
        <div className="user-info">
          <img
            src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
            alt="사용자 프로필 사진"
            className="user-image"
          />
          <div className="user-details">
            <p className="user-email" name="email">
              {/* {this.props.email} */}
            </p>
            <p className="user-grade" name="vip">
              {/* {this.props.memberLevel} */}
            </p>
          </div>
        </div>
        <hr />
        <Link to="/mypage" id="mypage_btn_open">
          <li>마이페이지</li>
        </Link>
        <Link to="./subs" className="subs_btn_open">
          <li>구독</li>
        </Link>
      </ul>
    </div>
  )
}

export default SideBar
