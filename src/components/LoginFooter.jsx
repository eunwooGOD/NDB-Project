import React from 'react'
import { Link } from 'react-router-dom'

const LoginFooter = () => {
  return (
    <div>
      
      <p>
        Created with <i className="fa fa-heart"></i> by
        <Link
          target="_blank"
          to="https://www.notion.so/NSD-_NDB-3e67330ff9764a33a959d728dfd35c1c"
        >
          순두부아니다
        </Link>
        - 인공지능사관학교 순두부들에 대해 알고 싶다면
        <Link
          target="_blank"
          to="https://www.notion.so/NSD-_NDB-3e67330ff9764a33a959d728dfd35c1c"
        >
          여기
        </Link>
        에서 읽어보세요.
      </p>
    </div>
  )
}

export default LoginFooter
