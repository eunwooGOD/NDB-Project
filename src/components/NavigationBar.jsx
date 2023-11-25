import React from 'react'

const NavigationBar = () => {
  return (
    <nav id="navbar">
    <div className="navLeft">
      <div className="hamburger">
        <button>바</button>
      </div>
      <div className="nav_logo">
        <a href="#">NDB</a>
      </div>
    </div>
    <div className="navRight">
      
      <div>
        <form action="/login">
          <button type="submit" className="nav_login_button">Login</button>
        </form>
      </div>
      <div>
        <form action="#">
          <button type="button" className="nav_join_button">Join</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar