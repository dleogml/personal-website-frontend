import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const stories = [
  {
    number: '01',
    eyebrow: 'CULTURE & PLACES',
    title: 'See the Korea you came to discover.',
    description: 'Find the local customs, unexpected places, and cultural details that make Korea feel closer.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=2200&q=85',
    alt: 'A traditional Korean palace and courtyard',
  },
  {
    number: '02',
    eyebrow: 'EVERYDAY KOREA',
    title: 'Feel more at home, one day at a time.',
    description: 'Get practical tips for getting around, finding what you need, and settling into everyday life.',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=2200&q=85',
    alt: 'A lively street in Seoul, South Korea',
  },
  {
    number: '03',
    eyebrow: 'PEOPLE & COMMUNITY',
    title: 'Make your Korea experience a shared one.',
    description: 'Share what you have learned, meet people on a similar journey, and find a community that understands.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=85',
    alt: 'Friends spending time together outdoors',
  },
];

export default function HomePage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowTop(window.scrollY > 360);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /> A WINDOW INTO KOREA <span className="eyebrow-dot">✳</span></div>
          <h1>Make yourself<br /><em>at home in Korea.</em></h1>
          <p>Discover the culture, find the everyday answers, and connect with people who understand what it is like to find your feet in Korea.</p>
          <a className="hero-cta" href="#ways-to-explore">Explore Korea together <ArrowDown size={16} /></a>
        </div>
      </section>

      <section className="home-stories" id="ways-to-explore" aria-label="What you can discover with Unbox Korea">
        {stories.map((story) => (
          <article className="story-panel" key={story.number}>
            <img className="story-image" src={story.image} alt={story.alt} loading="lazy" />
            <div className="story-content">
              <span className="story-number">{story.number}</span>
              <p className="story-eyebrow">{story.eyebrow}</p>
              <h2>{story.title}</h2>
              <p className="story-description">{story.description}</p>
            </div>
          </article>
        ))}
      </section>

      <button className={`back-to-top${showTop ? ' is-visible' : ''}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={18} />
      </button>
    </>
  );
}
