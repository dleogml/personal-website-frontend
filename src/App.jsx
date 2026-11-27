import { Navigate, Route, Routes } from 'react-router';
import SiteLayout from './components/SiteLayout.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BoardPage from './pages/BoardPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import StarterBoxPage from './pages/StarterBoxPage.jsx';
import NoticePage from './pages/NoticePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="info" element={<Navigate to="/about" replace />} />
        <Route path="starterbox" element={<StarterBoxPage />} />
        <Route path="notice" element={<NoticePage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        <Route path="about.html" element={<Navigate to="/about" replace />} />
        <Route path="privacy-policy.html" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
