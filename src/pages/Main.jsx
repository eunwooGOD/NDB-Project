import React, { useState, useEffect, useRef } from 'react'
const Main = () => {
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
    <div>
      <input ref={inputRef} type="text" style={{ marginTop: '10vh' }} />
      <button onClick={handleButtonClick} style={{ marginTop: '10vh' }}>
        test
      </button>
    </div>
  )
}

export default Main
