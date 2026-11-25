import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';

const navigation = [
  { to: '/about', label: 'About' },
  { to: '/info', label: 'Info' },
  { to: '/board', label: 'Board' },
  { to: '/contact', label: 'Contact' },
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
        {navigation.map(({ to, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>

      <Link className="login-button" to="/login">Log in <ArrowRight size={15} /></Link>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="footer-brand">UNBOX KOREA</span>
      <span className="footer-message">A place to discover, share &amp; connect</span>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </nav>
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
          <div className="photo photo-city" aria-hidden="true" />
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
