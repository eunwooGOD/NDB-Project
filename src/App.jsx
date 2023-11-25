import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Join from './pages/Join'
import Subs from './pages/Subs'
import MyPage from './pages/Mypage'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
