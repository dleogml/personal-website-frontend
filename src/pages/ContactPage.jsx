import { Mail } from 'lucide-react';
import { Link } from 'react-router';
import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function ContactPage() {
  usePageMeta('Customer Inquiries', 'The Unbox Korea customer inquiry channel is being prepared.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Customer inquiries" title="We’re preparing our contact channel.">
        We want to make it easy to ask a question or share feedback. The customer inquiry channel is still being set up.
      </PageIntro>
      <section className="contact-card" id="contact">
        <span className="contact-icon"><Mail size={21} /></span>
        <div><h2>Contact is coming soon</h2><p>This page does not accept or store messages yet. We’ll publish the contact details here when the inquiry channel is ready.</p></div>
      </section>
      <section className="help-section" id="faq">
        <h2>Frequently asked questions</h2>
        <p>We are preparing answers to common questions about our guides, community, and the site.</p>
        <p className="coming-soon">FAQ coming soon.</p>
      </section>
      <section className="help-section" id="suggestions">
        <h2>Suggestions</h2>
        <p>We plan to open a channel for content and feature suggestions when the inquiry service is ready.</p>
        <p className="coming-soon">Suggestions are not being collected yet.</p>
      </section>
      <p className="contact-followup">For information about how this site handles data, read the <Link className="inline-link" to="/privacy">Privacy Policy</Link>.</p>
    </article>
  );
}
