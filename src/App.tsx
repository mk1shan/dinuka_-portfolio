import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <Router>
      <div className="bg-[#070B14] text-white min-h-screen relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/videography" element={<Videography />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;