import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { aboutText, facts } from '../data/site';

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="About" title="About me" />
        <div className="about-grid">
          <Reveal className="about-text">
            {aboutText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="fact-list">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
