import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Join from './pages/Join';
import Subs from './pages/Subs';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import NavigationBar from './components/NavigationBar';
import SubsModal from './components/SubsModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div>
        <NavigationBar onSubscribeClick={openModal} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
      {isModalOpen && <SubsModal onClose={closeModal} />}
    </Router>
  );
}

export default App;
