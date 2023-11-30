import React, { useState } from 'react'
import LoginFooter from '../components/LoginFooter'
import '../style/Join.css' // Import your CSS file

const Join = () => {
  // 유저정보 데이터전달
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
  })
  const [isModalVisible, setModalVisible] = useState(false)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleJoinButtonClick = async (e) => {
    e.preventDefault() // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:3002/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setModalVisible(true)
      } else {
        alert('Error sending data to the server')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleCloseButtonClick = () => {
    setModalVisible(false)
  }

  const handleWindowClick = (event) => {
    const modal = document.getElementById('modal')

    if (event.target === modal) {
      setModalVisible(false)
    }
  }

  return (
    <html lang="ko">
      <head>{/* ... Head content remains unchanged ... */}</head>
      <body>
        <div id="back_container" className="back_container">
          <h1 className="h1">JOIN NDB</h1>
          <p>
            NDB공부예제 사이트에 오신걸 환영합니다! 회원가입을 진행해 주세요
          </p>
          <div className="white"></div>
          <div className="join_container">
            <form action="/join" className="join_form" method="post">
              <div className="join_box">
                <p>이름</p>
                <input
                  type="text"
                  className="join_input"
                  name="name"
                  required
                />
                <p>이메일</p>
                <input
                  type="email"
                  className="join_input"
                  name="email"
                  required
                />
                <p>비밀번호</p>
                <input
                  type="password"
                  className="join_input"
                  name="pass"
                  required
                />
              </div>
              <div className="box_agreement">
                <ul>
                  <input type="checkbox" name="checkbox" required />
                  <span className="join_agreement">
                    <a href="#">이용약관</a> 및 <a href="#">개인정보</a>{' '}
                    보호정책에 동의합니다.
                  </span>
                </ul>
              </div>

              <button
                type="submit"
                className="join_button"
                onClick={handleJoinButtonClick}
              >
                Create Account
              </button>
              <div className="join_line">
                <hr className="join_hr_left" />
                <span className="join_sns_span">간편로그인</span>
                <hr className="join_hr_right" />
              </div>
            </form>
            <div className="join_sns_login_div">
              <form action="/auth/google" className="sns_form">
                <button
                  id="google_button"
                  className="google_button sns_button"
                ></button>
              </form>
              <form action="/auth/kakao" className="sns_form">
                <button className="kakao_button sns_button"></button>
              </form>
              <form action="/auth/github" className="sns_form">
                <button className="git_button sns_button"></button>
              </form>
            </div>
            <footer>
              <LoginFooter></LoginFooter>
            </footer>
            <div className="find_text"></div>
          </div>

          <div className="sns_join_div">
            {/* ... Social login buttons content remains unchanged ... */}
          </div>

          <div
            className="modal"
            id="modal"
            style={{ display: isModalVisible ? 'block' : 'none' }}
          >
            <div className="modal-content">
              <span className="close" onClick={handleCloseButtonClick}>
                &times;
              </span>
              <h4>
                🎉 회원가입이 완료되었습니다!! 로그인입력후 사이트를
                이용해주세요.
              </h4>

              <form action="http://localhost:3003/login">
                <button type="submit" className="madal-login-button">
                  로그인하기
                </button>
              </form>
            </div>
          </div>
          <footer>{/* ... Footer content remains unchanged ... */}</footer>
        </div>
        <script src="/js/joinmodal.js"></script>
      </body>
    </html>
  )
}

export default Join
