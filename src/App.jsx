import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';  // <-- импортируем
import './App.css';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/TeamPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div style={{ background: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}
