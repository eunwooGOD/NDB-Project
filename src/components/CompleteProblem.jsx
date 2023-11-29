import React from 'react'

const CompleteProblem = ({tabmenu}) => {
  return (
    <div id="mp_tab-1" className= 'mp_output'>
          <h2 className="mp_h2">풀었던 문제</h2>
          <div className="mp_output" id="mp_listSpace">
            <table id="mp_review">
              <thead>
                <tr>
                  <th>EXAM_ID</th>
                  <th>EXAM_LANGUAGE</th>
                  <th>SEARCH_WORD</th>
                </tr>
              </thead>
              <tbody>
                {/* {questions.map((question) => ( */}
                  {/* <tr key={question.EXAM_ID}> */}
                  {/* <tr></tr>
                    <td>
                      <a href={`/mypage/index/${question.EXAM_ID}`}>
                        {question.EXAM_ID}
                      </a>
                    </td>
                    <td>
                      <a href={`/mypage/index/${question.EXAM_ID}`}>
                        {question.EXAM_LANGUAGE}
                      </a>
                    </td>
                    <td>
                      <a href={`/mypage/index/${question.EXAM_ID}`}>
                        {question.SEARCH_WORD}
                      </a>
                    </td>
                  </tr> */}
                {/* ))} */}
              </tbody>
            </table>
            {/* <div className="pagination">
              {Array.from({ length: total_pages }, (_, i) => (
                <a key={i + 1} href={`/mypage?page=${i + 1}`}>
                  {i + 1}
                </a>
              ))}
            </div> */}
          </div>
        </div>
  )
}

export default CompleteProblem