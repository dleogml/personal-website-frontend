import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice('Sign-in is not connected yet. No credentials were sent or saved.');
  }

  return (
    <section className="login-card">
      <div className="card-topline"><span>WELCOME BACK</span><span className="card-star">✳</span></div>
      <h2>Good to see you again</h2>
      <p className="card-subtitle">Sign in to continue discovering Korea.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <div className="input-wrap"><Mail size={17} aria-hidden="true" /><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></div>
        <div className="password-label"><label htmlFor="password">Password</label><Link to="/contact">Need help?</Link></div>
        <div className="input-wrap"><LockKeyhole size={17} aria-hidden="true" /><input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required /><button className="password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
        <label className="remember"><input type="checkbox" /> <span>Keep me signed in</span></label>
        <button className="submit-button" type="submit">Sign in <ArrowRight size={17} /></button>
      </form>
      {notice && <p className="form-notice" role="status">{notice}</p>}
      <p className="login-prototype">Authentication is not available yet. This page is a visual preview.</p>
      <div className="signup">New to Unbox Korea? <span>Account creation is coming soon.</span></div>
      <div className="card-footer"><span>MADE FOR THE CURIOUS</span><span>SEOUL · KOREA</span></div>
    </section>
  );
}
