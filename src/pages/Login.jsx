// src/App.jsx
import React, { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import '../style/Login.css' // Import your CSS file
import axios from 'axios';
import LoginFooter from '@components/LoginFooter'

function Login() {
  const cookies = document.cookie

  // Get specific cookie value
  const [specificCookieValue] = useCookies(['your_cookie_name'])

  console.log('All Cookies:', cookies)
  console.log('Specific Cookie Value:', specificCookieValue.your_cookie_name)
  const [userData, setUserData] = useState({})

  const handleLogin = (e) => {
    e.preventDefault()

    setUserData({
      id: id.current.value,
      pw: pw.current.value,
    })
  }
  const idRef = useRef()
  const pwRef = useRef()

  useEffect(() => {
    console.log(userData)
    if (userData.id !== undefined) {
      axios
        .post('/user/login', {
          userData: userData,
        })
        .then((res) => {
          console.log(res.data)
          if (res.data.msg === 'success') {
            alert('로그인 성공!')
            window.location.href = '/link'
          } else {
            alert('아이디 혹은 비밀번호를 확인해주세요!')
            window.location.href = '/login'
          }
        })
    }
  }, [userData])

  /** 로그인 버튼 함수 */
  const login_btn = () => {
    console.log('로그인 버튼 기능 활성화')
    axios
      .post('/user/login', {
        userId: idRef.current.value, // 아이디
        userPw: pwRef.current.value, // 비밀번호
      })
      .then((res) => {
        console.log(res)
        if (res.data.msg === 'success') {
          window.location.href = '/'
        } else {
          console.log(res.data.msg)
        }
      })
  }

  // You can replace this with your React component logic
  return (
    <div id="login_back_container">
      <div id="back_container" className="back_container">
        {/* Navigation */}
        {/*  */}
        <h1 className="h1">LOGIN to NDB</h1>
        <div className="white"></div>
        {/* Login Container */}
        <div className="login_container">
          <form
            action="/index"
            id="login-form"
            className="login_form"
            method="post"
            onSubmit={handleLogin}
          >
            <p>이메일</p>
            <input
              type="email"
              id="email"
              className="login_input"
              name="email"
              ref={idRef}
              required
            />
            <p>비밀번호</p>
            <input
              type="password"
              id="password"
              className="login_input"
              name="password"
              ref={pwRef}
              required
            />
            <span id="error-message" className="password_span hidden">
              이메일 및 비밀번호를 확인하세요.
            </span>
            <button
              type="submit"
              id="login-button"
              className="login_button"
              onClick={login_btn}
            >
              로그인
            </button>
          </form>
          {/* Account Recovery */}
          <div className="find_text">
            <a href="#" className="find_email find">
              <span> 이메일</span>
            </a>
            <span>∞</span>
            <a href="#" className="find_pass find">
              <span> 비밀번호 찾기</span>
            </a>
            <a href="/join" className="find_join find">
              <span>회원가입</span>
            </a>
          </div>
        </div>
        {/* Bottom Line */}
        <hr className="hr_left" />
        <span className="sns_span">간편로그인</span>
        <hr className="hr_right" />
        {/* Social Login Buttons */}
        <div className="sns_login_div">
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
        {/* Footer */}
        <footer>
          <LoginFooter></LoginFooter>
        </footer>
      </div>
    </div>
  )
}

export default Login
