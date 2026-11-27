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
import MenuDetailPage from './pages/MenuDetailPage.jsx';

const menuPages = [
  ['starterbox/culture', 'StarterBox', 'Culture & Etiquette'],
  ['starterbox/food', 'StarterBox', 'Food & Dining'],
  ['starterbox/shopping', 'StarterBox', 'Beauty & Shopping'],
  ['starterbox/travel', 'StarterBox', 'Travel & Transit'],
  ['board/ask-korea', 'Board', 'Ask Korea'],
  ['board/local-tips', 'Board', 'Local Tips & Reviews'],
  ['board/travel-buddy', 'Board', 'Travel Buddy'],
  ['board/k-lounge', 'Board', 'K-Lounge'],
  ['notice/updates', 'Notice', 'Site Updates'],
  ['notice/events', 'Notice', 'Events & Picks'],
  ['about/story-mission', 'About', 'Our Story & Mission'],
  ['about/disclosure', 'About', 'Advertising & Affiliate Disclosure'],
  ['help/faq', 'Help', 'FAQ'],
  ['help/contact', 'Help', 'Contact Us'],
  ['help/suggestions', 'Help', 'Suggestions'],
];

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
        <Route path="help" element={<ContactPage />} />
        <Route path="contact" element={<Navigate to="/help" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        {menuPages.map(([path, section, title]) => <Route key={path} path={path} element={<MenuDetailPage section={section} title={title} />} />)}
        <Route path="about.html" element={<Navigate to="/about" replace />} />
        <Route path="privacy-policy.html" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
