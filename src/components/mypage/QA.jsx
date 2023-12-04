import React from 'react'

const QA = () => {
  return (

      <div className='QA_area'>
        <div id="QA_title">
          <p>문의 제목</p>
          <input type="text" id='QA_titlecontent' />
        </div>
        <div id="QA_content" >
          <p>문의 내용</p>
          <textarea id="QA_Content"></textarea>
        </div>
        <div id="QA_buttonarea">
          <button>
          등록하기
          </button>
        </div>
      </div>

  )
}

export default QA
