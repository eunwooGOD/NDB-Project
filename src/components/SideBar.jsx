import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../style/SideBar.css"
import SubsModal from './SubsModal'; // SubsModal 컴포넌트의 경로를 정확하게 지정해주세요.

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    console.log('openModal 호출됨');
    setIsModalOpen(true);
    console.log('모달 상태:', isModalOpen); 
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };
	
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
        <li><a href="#" className="subs_btn_open" onClick={openModal}>구독</a></li>
      </ul>
      <SubsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default SideBar
