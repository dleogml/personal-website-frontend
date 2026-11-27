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
      <section className="empty-state" id="ask-korea">
        <span className="empty-state-mark">✳</span>
        <h2>Community posts are coming soon.</h2>
        <p>Posting and account features are still being prepared. For now, learn more about the project or check back as the community space develops.</p>
        <div className="empty-actions"><Link className="primary-link" to="/about">About Unbox Korea</Link><Link className="secondary-link" to="/contact">Customer inquiries</Link></div>
      </section>
      <div className="info-list board-categories">
        <section className="info-row" id="local-tips"><span className="section-number">02</span><div><h2>Local Tips &amp; Reviews</h2><p>Share practical recommendations and reviews when community posting opens.</p></div></section>
        <section className="info-row" id="travel-buddy"><span className="section-number">03</span><div><h2>Travel Buddy</h2><p>Meet fellow travelers and plan an outing together when this feature is available.</p></div></section>
        <section className="info-row" id="k-lounge"><span className="section-number">04</span><div><h2>K-Lounge</h2><p>A relaxed space for conversations about Korea is planned for the community board.</p></div></section>
      </div>
    </article>
  );
}
