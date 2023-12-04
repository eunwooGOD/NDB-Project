import React, { useState, useEffect, useRef } from 'react'
import MainSearch from '../components/main/MainSearch'
import '../style/Main.css'

const Main = () => {
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
  const inputRef = useRef(null)

  const handleSubmit = () => {
    console.log(inputRef.current.value)
  }

  return (
    <div>
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
            />
            <div className="main_autocomplete"></div>
            <button
              type="submit"
              className="main_search_button"
              onclick="user_Btn()"
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
