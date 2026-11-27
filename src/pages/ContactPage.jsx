import { Link } from 'react-router';
import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function ContactPage() {
  usePageMeta('Help', 'Frequently asked questions, contact details, and suggestions for Unbox Korea.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Help" title="How can we help?">
        Browse frequently asked questions, contact information, and ways to share suggestions.
      </PageIntro>
      <div className="info-list">
        <section className="info-row"><span className="section-number">01</span><div><h2><Link className="inline-link" to="/help/faq">FAQ</Link></h2></div></section>
        <section className="info-row"><span className="section-number">02</span><div><h2><Link className="inline-link" to="/help/contact">Contact Us</Link></h2></div></section>
        <section className="info-row"><span className="section-number">03</span><div><h2><Link className="inline-link" to="/help/suggestions">Suggestions</Link></h2></div></section>
      </div>
      <p className="contact-followup">For information about how this site handles data, read the <Link className="inline-link" to="/privacy">Privacy Policy</Link>.</p>
    </article>
  );
}
