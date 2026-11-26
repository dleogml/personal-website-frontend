import { useEffect, useRef, useState } from 'react';
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
  const pageRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowTop(window.scrollY > 360);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    let lockedUntil = 0;
    let touchStartY = 0;
    let touchStartX = 0;
    const getCurrentSection = () => {
      const sections = [...page.querySelectorAll('.fullpage-section')];
      const scrollPosition = window.scrollY;
      return sections.reduce((closestIndex, section, index) => {
        const sectionTop = section.getBoundingClientRect().top + scrollPosition;
        const closestTop = sections[closestIndex].getBoundingClientRect().top + scrollPosition;
        const targetTop = index === 0 ? 0 : sectionTop;
        const closestTargetTop = closestIndex === 0 ? 0 : closestTop;
        return Math.abs(targetTop - scrollPosition) < Math.abs(closestTargetTop - scrollPosition) ? index : closestIndex;
      }, 0);
    };

    const moveSection = (direction) => {
      const sections = page.querySelectorAll('.fullpage-section');
      const currentIndex = getCurrentSection();
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= sections.length) return false;

      lockedUntil = Date.now() + 1000;
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      if (nextIndex === 0) window.scrollTo({ top: 0, behavior });
      else sections[nextIndex].scrollIntoView({ block: 'start', behavior });
      return true;
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) < 20) return;
      if (Date.now() < lockedUntil) {
        event.preventDefault();
        return;
      }
      const direction = event.deltaY > 0 ? 1 : -1;
      const currentIndex = getCurrentSection();
      const sections = page.querySelectorAll('.fullpage-section');
      if ((direction > 0 && currentIndex === sections.length - 1) || (direction < 0 && currentIndex === 0)) return;
      event.preventDefault();
      moveSection(direction);
    };

    const onTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
      touchStartX = event.touches[0].clientX;
    };
    const onTouchMove = (event) => {
      const deltaY = touchStartY - event.touches[0].clientY;
      const verticalGesture = Math.abs(deltaY) > Math.abs(event.touches[0].clientX - touchStartX);
      const currentIndex = getCurrentSection();
      const sections = page.querySelectorAll('.fullpage-section');
      const atEdge = (deltaY > 0 && currentIndex === sections.length - 1) || (deltaY < 0 && currentIndex === 0);
      if (verticalGesture && !atEdge) event.preventDefault();
    };
    const onTouchEnd = (event) => {
      const deltaY = touchStartY - event.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 50 || Date.now() < lockedUntil) return;
      const currentIndex = getCurrentSection();
      const sections = page.querySelectorAll('.fullpage-section');
      if ((deltaY > 0 && currentIndex < sections.length - 1) || (deltaY < 0 && currentIndex > 0)) moveSection(deltaY > 0 ? 1 : -1);
    };

    page.addEventListener('wheel', onWheel, { passive: false });
    page.addEventListener('touchstart', onTouchStart, { passive: true });
    page.addEventListener('touchmove', onTouchMove, { passive: false });
    page.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      page.removeEventListener('wheel', onWheel);
      page.removeEventListener('touchstart', onTouchStart);
      page.removeEventListener('touchmove', onTouchMove);
      page.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="home-fullpage" ref={pageRef}>
      <section className="hero fullpage-section" id="home">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /> A WINDOW INTO KOREA <span className="eyebrow-dot">✳</span></div>
          <h1>Unbox<br /><em>Korea’s Hidden Side.</em></h1>
          <p>Go beyond the familiar and discover a new side of Korea.<br className="desktop-break" /> Stories, places, and culture—shared with the world.</p>
          <a className="hero-cta" href="#ways-to-explore">Explore Korea together <ArrowDown size={16} /></a>
        </div>
      </section>

      <section className="home-stories" id="ways-to-explore" aria-label="What you can discover with Unbox Korea">
        {stories.map((story) => (
          <article className="story-panel fullpage-section" key={story.number}>
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
    </div>
  );
}
