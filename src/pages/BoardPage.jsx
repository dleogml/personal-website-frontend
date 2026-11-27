import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function BoardPage() {
  usePageMeta('Community Board', 'Explore the Unbox Korea community board.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Community" title="The board is taking shape.">
        A place for curious readers to share questions, recommendations, and new ways to explore Korea.
      </PageIntro>
      <div className="info-list board-categories">
        <section className="info-row"><span className="section-number">01</span><div><h2>Ask Korea</h2><p>Questions and answers about everyday life and travel in Korea.</p></div></section>
        <section className="info-row"><span className="section-number">02</span><div><h2>Local Tips &amp; Reviews</h2><p>Practical recommendations and reviews from the community.</p></div></section>
        <section className="info-row"><span className="section-number">03</span><div><h2>Travel Buddy</h2><p>Meet fellow travelers and plan an outing together.</p></div></section>
        <section className="info-row"><span className="section-number">04</span><div><h2>K-Lounge</h2><p>A relaxed space for conversations about Korea.</p></div></section>
      </div>
    </article>
  );
}
