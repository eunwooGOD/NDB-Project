
import React, { useState, useEffect, useRef } from 'react'
import ChatBot from './ChatBot'; // 챗봇 컴포넌트를 임포트하세요.

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

  const api_key = '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'

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
    setLoading(true)

    const messages = [
      // Your messages array
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
        // Update logic based on your original implementation
        // ...
      }

      setApiText(updatedApiText)
      setHtmlCode(updatedHtmlCode)
      setCssCode(updatedCssCode)
      setJsCode(updatedJsCode)
      console.log(
        updatedApiText,
        updatedHtmlCode,
        updatedCssCode,
        updatedJsCode,
      )
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
  const inputRef = useRef(null);

  const handleSubmit = () => {
      console.log(inputRef.current.value);
  };


  return (
    <div >
      <input ref={inputRef} type="text" style={{marginTop:'10vh'}}/>
      <button onClick={fetchDataFromAPI} style={{marginTop:'10vh'}}>test</button>
      <h2 className='font-black'>텔윈드테스투</h2>

      
      {/* 챗봇 컴포넌트 */}
      {showChatBot && <ChatBot />}

    </div>
  )
}

export default Main
