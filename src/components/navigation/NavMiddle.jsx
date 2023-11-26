import React from 'react'

const NavMiddle = () => {
  return (
    <div className="main_navMiddle">
          <div className="main_Nav_search">
            <select
              name="main_language"
              id="main_navSearchbar"
              className="main_searchLanguage"
              style={{ width: '50px', height: '30px' }}
            >
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
  )
}

export default NavMiddle