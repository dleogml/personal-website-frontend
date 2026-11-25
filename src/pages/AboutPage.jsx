import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const topics = [
  { number: '01 / OUR PURPOSE', title: 'A wider window into Korea', text: 'Korea is more than its best-known landmarks. Neighborhoods, traditions, food, design, and daily life all offer a different way to understand the country. Unbox Korea is being built to bring those perspectives together in one English-language destination.' },
  { number: '02 / WHAT WE EXPLORE', title: 'Places, culture, and people', text: 'Our planned guides and explainers focus on places worth understanding, cultural practices in their context, and the small details of everyday life. Each story should give readers a useful reason to look closer, not just another list of things to do.' },
  { number: '03 / OUR APPROACH', title: 'Useful context, carefully shared', text: 'We aim to publish original writing that is clear, respectful, and practical. When a story depends on current details or historical claims, we intend to check reliable sources and make the context easy for readers to follow.' },
  { number: '04 / WHO IT IS FOR', title: 'Made for the curious', text: 'Whether you are planning a visit, learning about Korea from abroad, or looking at familiar places in a new way, Unbox Korea is for readers who want to go beyond the surface and keep discovering.' },
];

export default function AboutPage() {
  usePageMeta('About', 'Meet Unbox Korea and learn about the places, culture, and stories the project explores.');

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow="About the project" title="See Korea beyond the familiar.">
        Unbox Korea is an independent project for curious readers who want to understand the places, culture, and everyday stories that shape Korea. We want to make local context easier to discover and share with readers around the world.
      </PageIntro>
      <div className="content-grid">
        {topics.map((topic) => <section className="content-card" key={topic.number}><span className="section-number">{topic.number}</span><h2>{topic.title}</h2><p>{topic.text}</p></section>)}
      </div>
      <aside className="editorial-note">Unbox Korea is in its early public stage. We are developing the site around original, useful stories and guides; new editorial pages will be added as they are ready.</aside>
    </article>
  );
}
