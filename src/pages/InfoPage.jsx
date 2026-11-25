import { Link } from 'react-router';
import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function InfoPage() {
  usePageMeta('Information', 'Learn what Unbox Korea covers, how stories are prepared, and how the site uses advertising.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Site information" title="A clear guide to Unbox Korea.">
        Find out what this site covers, how we approach stories, and where to go for privacy and community information.
      </PageIntro>
      <div className="info-list">
        <section className="info-row"><span className="section-number">01</span><div><h2>What you can discover</h2><p>Unbox Korea focuses on Korean places, culture, and everyday stories. The project is designed for readers who want more context than a quick list of popular stops.</p></div></section>
        <section className="info-row"><span className="section-number">02</span><div><h2>Editorial approach</h2><p>We aim to make original, practical guides and explainers. We will identify useful sources, add context, and keep time-sensitive details clear when publishing new stories.</p></div></section>
        <section className="info-row"><span className="section-number">03</span><div><h2>Advertising</h2><p>This site uses Google AdSense technology. Advertising may use cookies and similar identifiers; details and available choices are explained in our <Link className="inline-link" to="/privacy">Privacy Policy</Link>.</p></div></section>
        <section className="info-row"><span className="section-number">04</span><div><h2>Community and accounts</h2><p>The board, account sign-in, and customer inquiry features are being prepared. They are not currently connected to posting, authentication, or a message service.</p></div></section>
      </div>
    </article>
  );
}
