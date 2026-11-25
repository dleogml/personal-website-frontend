import { Link } from 'react-router';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFoundPage() {
  usePageMeta('Page Not Found', 'This Unbox Korea page could not be found.');

  return (
    <section className="page-width not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>This page is off the map.</h1>
      <p>Let’s take you back to a place you can explore.</p>
      <Link className="primary-link" to="/">Back to home</Link>
    </section>
  );
}
