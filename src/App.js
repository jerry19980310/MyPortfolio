import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppBar from './pages/AppBar';
import SwipeableTemporaryDrawer from './pages/test';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
