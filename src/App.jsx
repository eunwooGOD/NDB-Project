import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Join from './pages/Join'
import MyPage from './pages/MyPage'
import Login from './pages/Login'
import NavigationBar from './components/navigation/NavigationBar'
// import SubsModal from './components/SubsModal';
import './App.css'

import CodeExam from './pages/CodeExam'
import UserGraph from './pages/UserGraph'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <Router>
      <div>
        <NavigationBar openModal={openModal} />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<UserGraph></UserGraph>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
      {/* {isModalOpen && <SubsModal isOpen={isModalOpen} onClose={closeModal} />} */}
    </Router>
  )
}

export default App
