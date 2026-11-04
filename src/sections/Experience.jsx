import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { experience } from '../data/site';

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Practical work" />
        <div className="timeline">
          {experience.map((item) => (
            <Reveal className="timeline-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
