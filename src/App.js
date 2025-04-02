import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';



function App() {

  const { t } = useTranslation();

  return (
    <BrowserRouter basename="/MyPortfolio">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer title="Jerry Kao" description={t('contact')} />
    </BrowserRouter>
  );
}

export default App;
