import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Eye, EyeOff, Globe2, LockKeyhole, Mail } from 'lucide-react';
import './styles.css';

function App() {
  const [showPassword, setShowPassword] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="landing">
      <div className="photo photo-palace" aria-hidden="true" />
      <div className="photo photo-city" aria-hidden="true" />
      <div className="photo photo-coast" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Unbox Korea 홈">
          <span className="brand-mark">U<span>K</span></span>
          <span className="brand-name">UNBOX <b>KOREA</b></span>
        </a>
        <nav className="top-links" aria-label="주요 메뉴">
          <a href="#discover">둘러보기</a>
          <a href="#about">언박스 코리아</a>
          <span className="language"><Globe2 size={15} /> KR <span className="language-divider">/</span> EN</span>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /> A WINDOW INTO KOREA <span className="eyebrow-dot">✳</span></div>
          <h1>한국의 이야기를<br /><em>열어보세요.</em></h1>
          <p>익숙한 풍경 너머, 새로운 한국을 만나는 곳.<br />문화와 사람, 그리고 오늘의 이야기를 나눠요.</p>
          <div className="scroll-cue"><span className="scroll-icon"><ArrowDown size={14} /></span> SCROLL TO DISCOVER</div>
        </div>

        <div className="login-wrap">
          <div className="login-card">
            <div className="card-topline"><span>WELCOME BACK</span><span className="card-star">✳</span></div>
            <h2>다시 만나 반가워요</h2>
            <p className="card-subtitle">로그인하고 한국의 이야기를 이어가세요.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">이메일</label>
              <div className="input-wrap"><Mail size={17} /><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></div>
              <div className="password-label"><label htmlFor="password">비밀번호</label><a href="#forgot">비밀번호를 잊으셨나요?</a></div>
              <div className="input-wrap"><LockKeyhole size={17} /><input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="비밀번호를 입력하세요" autoComplete="current-password" required /><button className="password-toggle" type="button" aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 표시'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
              <div className="form-options"><label className="remember"><input type="checkbox" /> <span>로그인 상태 유지</span></label><span className="secure-note"><span /> SECURE LOGIN</span></div>
              <button className="submit-button" type="submit">로그인 <ArrowRight size={17} /></button>
            </form>
            <div className="signup">아직 계정이 없으신가요? <a href="#signup">회원가입 <ArrowRight size={13} /></a></div>
            <div className="card-footer"><span>MADE FOR THE CURIOUS</span><span>SEOUL · KOREA</span></div>
          </div>
          <div className="card-caption"><span className="caption-rule" /> 오늘도 새로운 한국을 발견해요</div>
        </div>
      </section>

      <footer className="bottom-bar" id="discover">
        <div className="location"><span className="location-dot" /> SEOUL, SOUTH KOREA <span className="location-divider">—</span> 37° 33′ N 126° 59′ E</div>
        <div className="bottom-message">A PLACE TO DISCOVER, SHARE &amp; CONNECT</div>
        <a className="discover-link" href="#about">EXPLORE KOREA <ArrowRight size={14} /></a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
