import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';

const navigation = [
  { to: '/starterbox', label: 'StarterBox', children: [
    ['Culture & Etiquette', '/starterbox/culture'], ['Food & Dining', '/starterbox/food'],
    ['Beauty & Shopping', '/starterbox/shopping'], ['Travel & Transit', '/starterbox/travel'],
  ] },
  { to: '/board', label: 'Board', children: [
    ['Ask Korea', '/board/ask-korea'], ['Local Tips & Reviews', '/board/local-tips'],
    ['Travel Buddy', '/board/travel-buddy'], ['K-Lounge', '/board/k-lounge'],
  ] },
  { to: '/notice', label: 'Notice', children: [
    ['Site Updates', '/notice/updates'], ['Events & Picks', '/notice/events'],
  ] },
  { to: '/about', label: 'About', children: [
    ['Our Story & Mission', '/about/story-mission'], ['Advertising & Affiliate Disclosure', '/about/disclosure'],
  ] },
  { to: '/help', label: 'Help', children: [
    ['FAQ', '/help/faq'], ['Contact Us', '/help/contact'], ['Suggestions', '/help/suggestions'],
  ] },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Unbox Korea home">
        <img className="brand-mark" src="/logo-icon.png" alt="" />
        <span className="brand-name">UNBOX <b>KOREA</b></span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav id="primary-navigation" className={`top-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {navigation.map(({ to, label, children }) => (
          <div className="nav-group" key={to}>
            <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}<ChevronDown className="nav-chevron" size={12} aria-hidden="true" />
            </NavLink>
            <div className="nav-dropdown">
              {children.map(([childLabel, childTo]) => <Link key={childTo} to={childTo}>{childLabel}</Link>)}
            </div>
          </div>
        ))}
      </nav>

      <Link className="login-button" to="/login">Log in <ArrowRight size={15} /></Link>
    </header>
  );
}

function SiteFooter() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const koreaTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hour12: true,
  }).format(now);

  return (
    <footer className="site-footer">
      <time className="footer-time" dateTime={now.toISOString()}>SEOUL, KOREA · {koreaTime} KST</time>
      <Link className="footer-brand" to="/" aria-label="Unbox Korea home">UNBOX KOREA</Link>
      <Link className="footer-privacy" to="/privacy">Privacy Policy</Link>
    </footer>
  );
}

export default function SiteLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`app-shell${isHome ? ' landing' : ''}`}>
      {isHome && (
        <>
          <div className="grain" aria-hidden="true" />
        </>
      )}
      <SiteHeader />
      <main className={`route-main${isHome ? ' home-main' : ''}`}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
