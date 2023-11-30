import React from 'react'
import { Link } from 'react-router-dom'
import '@style/NavigationBar.css'
import SideBar from '@components/SideBar'
import NavMiddle from '@components/navigation/NavMiddle'
import NavRight from '@components/navigation/NavRight'

const NavigationBar = () => {
  const langList = ['html', 'css', 'javascript', 'java', 'python', 'C언어']
  return (
    <nav id="main_navbar">
      <div className="main_navLeft">
        <SideBar />
        <div className="main_nav_logo">
          <Link to=",/index">NDB</Link>
        </div>
        <NavMiddle />
      </div>
      <NavRight/>
    </nav>
  )
}

export default NavigationBar
