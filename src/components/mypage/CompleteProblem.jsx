import React, {useState,useEffect} from 'react'

const CompleteProblem = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const loadData = () => {

      const newItems = []
      for (let i = 1; i <= 4; i++) {
        newItems.push({
          examid: i,
          codelan: '안녕',
          inputKeyword: 1,
        })
      }
      setItems(newItems)
    }

    loadData()
  }, [])

  return (
    <div id="mp_tab-1" className= 'mp_output'>
          <h2 className="mp_h2">풀었던 문제</h2>
          <div  id="mp_listSpace">
            <div>문제 번호</div>
            <div>문제 언어</div>
            <div>검색한 키워드</div>
            {items.map((item) => (
              <React.Fragment key={item.examid}>
                <div>{item.examid}</div>
                <div className="exam_secondtable">{item.codelan}</div>
                <div>{item.inputKeyword}</div>
              </React.Fragment>
            ))}
            
          </div>
        </div>
  )
}

export default CompleteProblem