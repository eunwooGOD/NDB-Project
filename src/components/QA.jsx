import React from 'react'

const QA = () => {
  return (
    <div className="mp_output">
      <h2>문의 사항</h2>
      <div className="QAarea">
        <p>문의 제목</p>
        <input type="text" id="QA_title" />
      </div>
      <div className='QAarea'>
        <p>문의 내용</p>
        <textarea name="" id="QA_content" width="80%"></textarea>
      </div>
    </div>
  )
}

export default QA
