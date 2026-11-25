import { Link } from 'react-router';
import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function BoardPage() {
  usePageMeta('Community Board', 'The Unbox Korea community board is being prepared.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Community" title="The board is taking shape.">
        A place for curious readers to share questions, recommendations, and new ways to explore Korea.
      </PageIntro>
      <section className="empty-state">
        <span className="empty-state-mark">✳</span>
        <h2>Community posts are coming soon.</h2>
        <p>Posting and account features are still being prepared. For now, learn more about the project or check back as the community space develops.</p>
        <div className="empty-actions"><Link className="primary-link" to="/about">About Unbox Korea</Link><Link className="secondary-link" to="/contact">Customer inquiries</Link></div>
      </section>
    </article>
  );
}
