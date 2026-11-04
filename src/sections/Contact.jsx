import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { profile } from '../data/site';
import { GitHubIcon, MailIcon } from '../components/Icons';

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Let's work together">
          Have a project or an opportunity in mind? Get in touch.
        </SectionHeading>
        <Reveal className="contact-box">
          <div className="contact-actions">
            {profile.email ? (
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <MailIcon /> {profile.email}
              </a>
            ) : null}
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> github.com/novelianmen-beep
            </a>
          </div>
          {profile.email ? null : (
            <p className="placeholder-note">
              Email: add your address in src/data/site.js and an email button appears here.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
