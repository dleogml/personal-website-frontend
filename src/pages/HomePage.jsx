import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Compass, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const seoulClock = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Seoul',
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

export default function HomePage() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /> A WINDOW INTO KOREA <span className="eyebrow-dot">✳</span></div>
          <h1>Unbox<br /><em>Korea’s Hidden Side.</em></h1>
          <p>Go beyond the familiar and discover a new side of Korea.<br className="desktop-break" /> Stories, places, and culture—shared with the world.</p>
          <Link className="hero-cta" to="/info">Discover the project <ArrowRight size={16} /></Link>
          <div className="scroll-cue"><span className="scroll-icon"><ArrowDown size={14} /></span> MADE FOR THE CURIOUS</div>
        </div>

        <aside className="discover-panel">
          <div className="card-topline"><span>FIND YOUR WAY IN</span><span className="card-star">✳</span></div>
          <h2>A little more context changes everything.</h2>
          <p className="panel-copy">Choose a path to learn what Unbox Korea is building.</p>
          <Link className="discovery-link" to="/about"><span className="discovery-icon"><Compass size={17} /></span><span><b>Meet the project</b><small>Why we look beyond the familiar</small></span><ArrowRight size={16} /></Link>
          <Link className="discovery-link" to="/info"><span className="discovery-icon"><Sparkles size={17} /></span><span><b>How we work</b><small>Our topics and editorial approach</small></span><ArrowRight size={16} /></Link>
          <Link className="discovery-link" to="/board"><span className="discovery-icon"><MapPin size={17} /></span><span><b>Community board</b><small>See what is coming next</small></span><ArrowRight size={16} /></Link>
          <div className="panel-footer">SEOUL · KOREA <span>MADE FOR THE CURIOUS</span></div>
        </aside>
      </section>

      <div className="home-status">
        <div className="location"><span className="location-dot" /><span>SEOUL, SOUTH KOREA</span><span className="location-divider">—</span><time dateTime={now.toISOString()}>{seoulClock.format(now)} KST</time></div>
        <span className="status-message">A PLACE TO DISCOVER, SHARE &amp; CONNECT</span>
      </div>
    </>
  );
}
