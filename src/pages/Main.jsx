
import React, { useState, useEffect, useRef } from 'react'
const Main = () => {
import ChatBot from './ChatBot'; // 챗봇 컴포넌트를 임포트하세요.
import CodeExam from '../components/codeExam/CodeExam'

const Main = () => {
  
   // 챗봇 표시 여부를 관리하는 상태
   const [showChatBot, setShowChatBot] = useState(true);
  const [apiText, setApiText] = useState('')
  const [htmlCode, setHtmlCode] = useState('')
  const [cssCode, setCssCode] = useState('')
  const [jsCode, setJsCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [inputString, setInputString] = useState('')
  const [selectLanguage, setSelectLanguage] = useState('')
  const inputRef = useRef()

  // let REST_API_KEY = process.env.GPT_KEY;
  const handleInputChange = (event, inputType) => {
    const value = event.target.value
    if (inputType === 'main_searchBar') {
      setInputString(value)
    } else if (inputType === 'main_searchBar2') {
      setInputString(value)
    }
  }

  const handleLanguageChange = (event, languageType) => {
    const value = event.target.value
    if (languageType === 'main_searchLanguage') {
      setSelectLanguage(value)
    } else if (languageType === 'main_searchLanguage2') {
      setSelectLanguage(value)
    }
  }

  const getCookie = (name) => {
    // Implement your getCookie function here
  }

  const fetchDataFromAPI = async () => {
  
    const api_key = import.meta.env.VITE_REACT_APP_GPT_KEY;
  
    setLoading(true)
    console.log(inputRef.current.value)
    const messages = [
      //명령 프롬프트
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content:
          'GPT, HTML, CSS, JS 언어로 ' +
          inputRef.current.value +
          '에 대해서 HTML ,CSS,JS 코드와 함께 제시해주세요. 제일먼제 문제를 제시해주세요. 주석은 한글로 작성해주세요',
      },
      {
        role: 'assistant',
        content:
          '"""HTML Code:""" 여기에 HTML 코드를 작성해주세요. 없다면 실습 문제에서 제시한 답안 HTML코드를 작성해주세요"""End HTML Code"""',
      },
      {
        role: 'assistant',
        content:
          '"""CSS Code:""" 여기에 CSS 코드를 작성해주세요. 없다면 실습 문제에서 제시한 답안 CSS코드를 작성해주세요"""End CSS Code"""',
      },
      {
        role: 'assistant',
        content:
          '"""JS Code:""" 여기에 JS 코드를 작성해주세요. 없다면 실습 문제에서 제시한 답안 JS코드를 작성해주세요"""End JS Code"""',
      },
      {
        role: 'assistant',
        content:
          '"""text:""" 여기에 제시한 코드들에 대한 설명을 작성해주세요. """End text Code"""',
      },
    ]
    const data = {
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      n: 1,
      messages: messages,
    }

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + api_key,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      const responseData = await response.json()

      const responseText = responseData.choices[0].message.content
      const splitResponse = responseText.split(
        /(```|"""HTML Code:|"""CSS Code:|"""JS Code:|"""text:)/,
      )

      let currentCode = ''
      let updatedHtmlCode = ''
      let updatedCssCode = ''
      let updatedJsCode = ''
      let updatedApiText = ''

      for (let i = 0; i < splitResponse.length; i++) {
        // 응답 데이터 가공
        if (splitResponse[i].trim().startsWith('html')) {
          currentCode = 'HTML' // 현재 작업중인 코드유형 저장장
          updatedHtmlCode = splitResponse[i].replace('html', '').trim()
        } else if (splitResponse[i].trim().startsWith('css')) {
          currentCode = 'CSS'
          updatedCssCode = splitResponse[i].replace('css', '').trim()
        } else if (splitResponse[i].trim().startsWith('javascript')) {
          currentCode = 'JS'
          updatedJsCode = splitResponse[i].replace('javascript', '').trim()
        } else if (splitResponse[i].trim().startsWith('text')) {
          currentCode = 'text'
          updatedApiText = splitResponse[i].replace('text', '').trim()
        } else {
          switch (currentCode) {
            case 'HTML':
              updatedHtmlCode += splitResponse[i].trim()
              break
            case 'CSS':
              updatedCssCode += splitResponse[i].trim()
              break
            case 'JS':
              updatedJsCode += splitResponse[i].trim()
              break
            case 'text':
              updatedApiText += splitResponse[i].trim()
          }
        }
      }
      let f_text = splitResponse[0] // 문제 설명
      console.log(splitResponse) //gpt api 전체 응답
      console.log(f_text)

      console.log(updatedApiText) //설명
      console.log(updatedHtmlCode)
      console.log(
        updatedCssCode, // Css 코드
      )
      console.log(updatedJsCode)
      // gpt 응답 데이터 가공 후 state에 할당
      setApiText(updatedApiText)
      setHtmlCode(updatedHtmlCode)
      setCssCode(updatedCssCode)
      setJsCode(updatedJsCode)
      // Additional logic if needed
    } catch (error) {
      console.error('Error fetching data from API:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleButtonClick = () => {
    fetchDataFromAPI()
  }

  // useEffect(() => {
  //   const specificCookieValue = getCookie('user-email');
  //   // Additional logic if needed
  // }, []);
  
  return (
    <div >
      <input ref={inputRef} type="text" style={{marginTop:'10vh'}}/>
      <button onClick={fetchDataFromAPI} style={{marginTop:'10vh'}}>test</button>
      <h2 className='font-black'>텔윈드테스투</h2>

      
      {/* 챗봇 컴포넌트 */}
      {showChatBot && <ChatBot />}
      <div className="main_wrap main_wrap_backImg_night">
        <div className="main_searchWrap">
          <div className="main_NavFlex">
            <div className="main_NavLangDB_Wrap">
              <div className="main_NavLangDB_Text">
                <label for="main_Nav_DB">
                  <p>DB&nbsp;</p>
                </label>
                <p>&nbsp;|&nbsp;</p>
                <label for="main_Nav_API">
                  <p>&nbsp;API</p>
                </label>
              </div>
              <div className="main_NavLangDB_Select">
                <input
                  type="radio"
                  id="main_Nav_DB"
                  className="main_Navwon"
                  name="main_Nav_RadioName"
                />
                <input
                  type="radio"
                  id="main_Nav_API"
                  className="main_Navwon"
                  name="main_Nav_RadioName"
                />
              </div>
            </div>
            <div className="main_text">
              <p>
                언어와 엔진을 설정한 후 <br />
                배우고 싶은 부분을 집중 성장 시켜보세요.
              </p>
            </div>
          </div>
          <div className="main_search main_search_night">
            <select name="main_language" id="" className="main_searchLanguage2">
              <option value=" ">언어</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="javascript">javascript</option>
              <option value="java">java</option>
              <option value="python">python</option>
              <option value="c_language">C언어</option>
            </select>
            <i className="fa-solid fa-chevron-down"></i>
            <input
              type="text"
              className="main_searchBar2"
              name="main_searchBar_Name"
              ref={inputRef}
            />
            <div className="main_autocomplete"></div>
            <button
              type="submit"
              className="main_search_button"
              onClick={handleButtonClick}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="main_TagWrap">
            <ul>
              <li>반복문</li>
              <li>if문</li>
              <li>grid</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
