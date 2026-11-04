import { profile } from '../data/site';
import { GitHubIcon } from '../components/Icons';

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="hero-tag">
          <span className="dot" /> Available for opportunities
        </p>
        <h1 id="hero-title">
          Hi, I&apos;m <span className="accent-text">{profile.name}</span>
        </h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
