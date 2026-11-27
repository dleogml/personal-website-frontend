import PageIntro from '../components/PageIntro.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function MenuDetailPage({ section, title }) {
  usePageMeta(title, `${title} — ${section} at Unbox Korea.`);

  return (
    <article className="page-width document-page">
      <PageIntro eyebrow={section} title={title} />
    </article>
  );
}
