import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NoticePage() {
  usePageMeta('Notice', 'Site updates, events, and picks from Unbox Korea.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Notice" title="Updates from Unbox Korea.">
        Site updates, events, and recommendations from Korea.
      </PageIntro>
      <div className="info-list">
        <section className="info-row" id="updates"><span className="section-number">01</span><div><h2>Site Updates</h2><p>Feature and content updates from Unbox Korea.</p></div></section>
        <section className="info-row" id="events"><span className="section-number">02</span><div><h2>Events &amp; Picks</h2><p>Events and hand-picked recommendations from Korea.</p></div></section>
      </div>
    </article>
  );
}
