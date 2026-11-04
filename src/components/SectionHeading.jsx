import Reveal from './Reveal';

function SectionHeading({ id, eyebrow, title, children }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children ? <p className="section-lead">{children}</p> : null}
    </Reveal>
  );
}

export default SectionHeading;
