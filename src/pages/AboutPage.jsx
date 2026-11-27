import { Link } from 'react-router';
import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const storyTopics = [
  { number: '01 / OUR PURPOSE', title: 'A wider window into Korea', text: 'Korea is more than its best-known landmarks. Neighborhoods, traditions, food, design, and daily life all offer a different way to understand the country. Unbox Korea brings those perspectives together in one English-language destination.' },
  { number: '02 / WHAT WE EXPLORE', title: 'Places, culture, and people', text: 'Our guides and explainers focus on places worth understanding, cultural practices in context, and the small details of everyday life. Each story should give readers a useful reason to look closer.' },
  { number: '03 / WHO IT IS FOR', title: 'Made for the curious', text: 'Whether you are planning a visit, learning about Korea from abroad, or looking at familiar places in a new way, Unbox Korea is for readers who want to go beyond the surface.' },
];

export default function AboutPage() {
  usePageMeta('About', 'Learn about Unbox Korea and read our advertising and affiliate disclosure.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="About Unbox Korea" title="See Korea beyond the familiar.">
        Unbox Korea is an independent project for curious readers who want to understand the places, culture, and everyday stories that shape Korea. We make local context easier to discover and share with readers around the world.
      </PageIntro>
      <section className="about-section" id="story-mission" aria-labelledby="story-heading">
        <h2 className="subsection-heading" id="story-heading">Our Story &amp; Mission</h2>
        <div className="content-grid">
          {storyTopics.map((topic) => <section className="content-card" key={topic.number}><span className="section-number">{topic.number}</span><h3>{topic.title}</h3><p>{topic.text}</p></section>)}
        </div>
      </section>
      <section className="about-section disclosure-section" id="disclosure" aria-labelledby="disclosure-heading">
        <h2 className="subsection-heading" id="disclosure-heading">Advertising &amp; Affiliate Disclosure</h2>
        <div className="info-list">
          <section className="info-row"><span className="section-number">01</span><div><h3>Advertising</h3><p>This site uses Google AdSense technology. Advertising may use cookies and similar identifiers; details and available choices are explained in our <Link className="inline-link" to="/privacy">Privacy Policy</Link>.</p></div></section>
          <section className="info-row"><span className="section-number">02</span><div><h3>Community and accounts</h3><p>The board, account sign-in, and customer inquiry features are not currently connected to posting, authentication, or a message service. If affiliate links are introduced, they will be identified clearly; editorial content remains independently prepared.</p></div></section>
        </div>
      </section>
    </article>
  );
}
