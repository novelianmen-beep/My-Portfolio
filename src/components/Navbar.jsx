import './Navbar.css';
import { CodeIcon } from './Icons';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="#home">
        M<span>.</span>Yousuf
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="nav-contact"
        href="https://github.com/novelianmen-beep"
        target="_blank"
        rel="noreferrer"
      >
        <CodeIcon />
        GitHub
      </a>
    </header>
  );
}

export default Navbar;
