import './ProjectCard.css';
import { ExternalIcon, GitHubIcon, PlayIcon } from './Icons';

// One reusable card for every project in src/data/projects.js
function ProjectCard({ project }) {
  const { title, category, description, stack, features, image, video, demo, repo } = project;

  return (
    <article className="project-card">
      <div className="project-media">
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <span>Screenshot needed</span>
            <small>Add a screenshot of {title}</small>
          </div>
        )}
      </div>

      <div className="project-body">
        <p className="project-category">{category}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <ul className="chip-list" aria-label={`${title} technology stack`}>
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {features.length > 0 ? (
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p className="placeholder-note">Key features: placeholder, add the real features.</p>
        )}

        <div className="project-actions">
          {demo ? (
            <a className="btn btn-primary btn-small" href={demo} target="_blank" rel="noreferrer">
              Live demo <ExternalIcon size={16} />
            </a>
          ) : (
            <span className="link-missing">Live demo link needed</span>
          )}
          {video && (
            <a className="btn btn-ghost btn-small" href={video} target="_blank" rel="noreferrer">
              <PlayIcon size={16} /> Watch demo
            </a>
          )}
          {repo ? (
            <a className="btn btn-ghost btn-small" href={repo} target="_blank" rel="noreferrer">
              <GitHubIcon size={16} /> Code
            </a>
          ) : (
            <span className="link-missing">GitHub link needed</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
