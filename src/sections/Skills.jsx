import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { skillGroups } from '../data/site';

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Skills" title="Technical skills">
          The tools I use to build and ship full-stack applications.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="chip-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
