// src/App.jsx
import React from 'react'
import { useCookies } from 'react-cookie'
import '../style/Login.css' // Import your CSS file

function Login() {
  const cookies = document.cookie

  // Get specific cookie value
  const [specificCookieValue] = useCookies(['your_cookie_name'])

  console.log('All Cookies:', cookies)
  console.log('Specific Cookie Value:', specificCookieValue.your_cookie_name)

  // You can replace this with your React component logic
  return (
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
        >
          <p>이메일</p>
          <input
            type="email"
            id="email"
            className="login_input"
            name="email"
            required
          />
          <p>비밀번호</p>
          <input
            type="password"
            id="password"
            className="login_input"
            name="password"
            required
          />
          <span id="error-message" className="password_span hidden">
            이메일 및 비밀번호를 확인하세요.
          </span>
          <button type="submit" id="login-button" className="login_button">
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
        <p>
          Created with <i className="fa fa-heart"></i> by{' '}
          <a
            target="_blank"
            href="https://www.notion.so/NSD-_NDB-3e67330ff9764a33a959d728dfd35c1c"
          >
            순두부아니다
          </a>{' '}
          - 인공지능사관학교 순두부들에 대해 알고 싶다면{' '}
          <a
            target="_blank"
            href="https://www.notion.so/NSD-_NDB-3e67330ff9764a33a959d728dfd35c1c"
          >
            여기
          </a>{' '}
          에서 읽어보세요.
        </p>
      </footer>
    </div>
  )
}

export default Login
