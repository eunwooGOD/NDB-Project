import React, { useState, useEffect } from 'react'
import QA from './QA'

const QA_list = () => {
  const [items, setItems] = useState([])
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    const loadData = () => {
      const current_date = new Date().toISOString()
      const newItems = []
      for (let i = 1; i <= 4; i++) {
        newItems.push({
          id: i,
          title: '안녕',
          date: current_date,
        })
      }
      setItems(newItems)
    }
    loadData()
  }, [])

  const handleGotoClick = () => {
    setChecked(true)
  }
  return (
    <div className="mp_output">
      <h2>문의 사항</h2>
      {checked ? (
        <QA />
      ) : (
        <>
          <div id="QA_listtitle">
            <div>문의 번호</div>
            <div>문의 제목</div>
            <div>문의 일자</div>
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div>{item.id}</div>
                <div className="QA_secondtable">{item.title}</div>
                <div>{item.date}</div>
              </React.Fragment>
            ))}
          </div>
          <div className="QA_gotobutton">
            <button onClick={handleGotoClick}>글쓰기</button>
          </div>
        </>
      )}
    </div>
  )
}

export default QA_list
