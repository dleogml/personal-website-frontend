export default function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p className="page-lead">{children}</p>}
    </header>
  );
}
