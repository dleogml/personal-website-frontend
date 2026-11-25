import { Link } from 'react-router';
import LoginForm from '../components/LoginForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function LoginPage() {
  usePageMeta('Log in', 'Sign-in for Unbox Korea is being prepared.');

  return (
    <div className="auth-page page-width">
      <div className="auth-intro">
        <p className="eyebrow">YOUR KOREA, YOUR WAY</p>
        <h1>Welcome back.</h1>
        <p>Sign in to keep discovering Korea with Unbox Korea.</p>
        <Link className="text-link" to="/">← Back to home</Link>
      </div>
      <LoginForm />
    </div>
  );
}
