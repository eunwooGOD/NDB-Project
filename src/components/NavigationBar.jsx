import React from 'react'
import { Link } from 'react-router-dom'
import '../style/NavigationBar.css'
import SideBar from './SideBar'

const NavigationBar = () => {
  return (
    <nav id="main_navbar">
      <div className="main_navLeft">
        <SideBar/>
        <div className="main_nav_logo">
          <Link to=",/index">NDB</Link>
        </div>
        <div className="main_navMiddle">
          <div className="main_Nav_search">
            <select
              name="main_language"
              id="main_navSearchbar"
              className="main_searchLanguage"
              style={{ width: '50px', height: '30px' }}
            >
              <option value=" ">언어</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="javascript">javascript</option>
              <option value="java">java</option>
              <option value="python">python</option>
              <option value="c_language">C언어</option>
            </select>
            <input
              type="text"
              className="main_searchBar"
              name="main_searchBar_Name"
            />
            <div className="main_autocomplete"></div>
            <button
              type="submit"
              className="main_search_button"
              // onClick={this.props.handleSearch}
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: '#d1d1d1' }}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div className="main_navRight">
        <input type="checkbox" id="main_CheckPopularModal" />
        <ul className="main_popularSerch">
          <li>
            <span>인기 검색어</span>
          </li>
          <li>|</li>
          <li>
            <a>파이썬 반복문</a>
          </li>
        </ul>
        <div className="checkbox-wrapper-2">
          <input
            type="checkbox"
            id="main_Nav_themecheck"
            className="sc-gJwTLC ikxBAC"
            // onClick={this.props.handleThemeCheck}
          />
        </div>
        <div id="main_btnWrap">
          <form action="http://localhost:3003/login">
            <button type="submit" className="main_signupBtn main_modalBtn">
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
