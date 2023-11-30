import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Join from './pages/Join'
import Subs from './pages/Subs'
import MyPage from './pages/Mypage'
import NavigationBar from './components/NavigationBar'
import Login from './pages/Login'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div>
      <NavigationBar openModal={openModal} />
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
      {/* {isModalOpen && <SubsModal isOpen={isModalOpen} onClose={closeModal} />} */}
    </Router>
  );
}

export default App;
