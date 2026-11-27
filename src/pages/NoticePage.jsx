import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NoticePage() {
  usePageMeta('Notice', 'Site updates, events, and picks from Unbox Korea.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Notice" title="Updates from Unbox Korea.">
        Follow changes to the site and find events and recommendations as this project grows.
      </PageIntro>
      <div className="info-list">
        <section className="info-row" id="updates"><span className="section-number">01</span><div><h2>Site Updates</h2><p>We will share feature and content updates here as they become available.</p><p className="coming-soon">No updates yet.</p></div></section>
        <section className="info-row" id="events"><span className="section-number">02</span><div><h2>Events &amp; Picks</h2><p>Events and hand-picked recommendations will be collected here.</p><p className="coming-soon">Coming soon.</p></div></section>
      </div>
    </article>
  );
}
