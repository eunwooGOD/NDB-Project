import React from 'react'

const NavRight = () => {
  return (
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
  )
}

export default NavRight