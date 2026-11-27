import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const guides = [
  ['culture', 'Culture & Etiquette', 'Understand customs, social cues, and the context behind everyday interactions.'],
  ['food', 'Food & Dining', 'Explore Korean dishes, dining customs, and practical tips for ordering.'],
  ['shopping', 'Beauty & Shopping', 'Find local shopping districts, Korean beauty essentials, and useful buying tips.'],
  ['travel', 'Travel & Transit', 'Plan your journey with neighborhood guides and public transit basics.'],
];

export default function StarterBoxPage() {
  usePageMeta('StarterBox', 'Practical starter guides for exploring Korean culture, food, shopping, and travel.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="Start exploring" title="Your StarterBox for Korea.">
        Practical starting points for getting to know Korea. Choose a topic and check back as new guides are published.
      </PageIntro>
      <div className="info-list">
        {guides.map(([id, title, description], index) => (
          <section className="info-row" id={id} key={id}>
            <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
            <div><h2>{title}</h2><p>{description}</p><p className="coming-soon">In-depth guides are coming soon.</p></div>
          </section>
        ))}
      </div>
    </article>
  );
}
