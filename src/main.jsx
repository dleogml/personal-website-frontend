import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Eye, EyeOff, Globe2, LockKeyhole, Mail } from 'lucide-react';
import './styles.css';

const seoulClock = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Seoul',
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

function App() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="landing">
      <div className="photo photo-city" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Unbox Korea home">
          <img className="brand-mark" src="/logo-icon.png" alt="" />
          <span className="brand-name">UNBOX <b>KOREA</b></span>
        </a>
        <nav className="top-links" aria-label="Main navigation">
          <a href="#discover">Discover</a>
          <a href="#about">About us</a>
          <span className="language"><Globe2 size={15} /> EN</span>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /> A WINDOW INTO KOREA <span className="eyebrow-dot">✳</span></div>
          <h1>Unbox<br /><em>Korea’s Hidden Side.</em></h1>
          <p>Go beyond the familiar and discover a new side of Korea.<br />Stories, places, and culture—shared with the world</p>
          <div className="scroll-cue"><span className="scroll-icon"><ArrowDown size={14} /></span> SCROLL TO DISCOVER</div>
        </div>

        <div className="login-wrap">
          <div className="login-card">
            <div className="card-topline"><span>WELCOME BACK</span><span className="card-star">✳</span></div>
            <h2>Good to see you again</h2>
            <p className="card-subtitle">Sign in to continue discovering Korea.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              <div className="input-wrap"><Mail size={17} /><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></div>
              <div className="password-label"><label htmlFor="password">Password</label><a href="#forgot">Forgot password?</a></div>
              <div className="input-wrap"><LockKeyhole size={17} /><input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required /><button className="password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
              <div className="form-options"><label className="remember"><input type="checkbox" /> <span>Keep me signed in</span></label><span className="secure-note"><span /> SECURE LOGIN</span></div>
              <button className="submit-button" type="submit">Sign in <ArrowRight size={17} /></button>
            </form>
            <div className="signup">New to Unbox Korea? <a href="#signup">Create an account <ArrowRight size={13} /></a></div>
            <div className="card-footer"><span>MADE FOR THE CURIOUS</span><span>SEOUL · KOREA</span></div>
          </div>
          <div className="card-caption"><span className="caption-rule" /> Find something new in Korea today</div>
        </div>
      </section>

      <footer className="bottom-bar" id="discover">
        <div className="location"><span className="location-dot" /><span>SEOUL, SOUTH KOREA</span><span className="location-divider">—</span><time dateTime={now.toISOString()}>{seoulClock.format(now)} KST</time></div>
        <div className="bottom-message">A PLACE TO DISCOVER, SHARE &amp; CONNECT</div>
        <a className="discover-link" href="#about">EXPLORE KOREA <ArrowRight size={14} /></a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
