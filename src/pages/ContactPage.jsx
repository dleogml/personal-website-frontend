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
      <section className="contact-card">
        <span className="contact-icon"><Mail size={21} /></span>
        <div><h2>Contact is coming soon</h2><p>This page does not accept or store messages yet. We’ll publish the contact details here when the inquiry channel is ready.</p></div>
      </section>
      <p className="contact-followup">For information about how this site handles data, read the <Link className="inline-link" to="/privacy">Privacy Policy</Link>.</p>
    </article>
  );
}
