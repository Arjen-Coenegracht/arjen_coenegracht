import { useEffect, useState } from 'react';
import {
  ClipboardCheck,
  Database,
  Download,
  ExternalLink,
  FileCode,
  GraduationCap,
  Mail,
  Monitor,
  Phone,
  Server,
  Terminal,
  Wrench,
} from 'lucide-react';
import clubspotLogo from './assets/clubspot-logo.png';
import msqtoLogo from './assets/msqto-icon.svg';
import odtLogo from './assets/odt-logo.svg';
import portraitPhoto from './assets/arjen-coenegracht-profile.png';
import smartFormFillLogo from './assets/smartformfill.png';
import specoraLogo from './assets/specora-logo.png';

function LinkedInLogo({ size = 16 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GitHubLogo({ size = 16 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.39-3.9-1.39-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.41-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.18 1.19a10.98 10.98 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.6.24 2.78.12 3.07.75.81 1.2 1.85 1.2 3.11 0 4.45-2.71 5.43-5.29 5.72.42.36.8 1.08.8 2.18v3.23c0 .31.2.68.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

const skillGroups = [
  {
    title: 'Languages',
    icon: FileCode,
    desc: 'Languages I use to build logic, applications and technical solutions.',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
  },
  {
    title: 'Backend',
    icon: Server,
    desc: 'Backend fundamentals for reliable APIs and maintainable applications.',
    items: ['Spring Boot', 'REST APIs', 'Hibernate', 'Maven', 'Postman'],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    desc: 'Interfaces with attention for structure, usability and user experience.',
    items: ['Vue', 'React', 'Tailwind', 'HTML', 'CSS', 'UX/UI'],
  },
  {
    title: 'Databases',
    icon: Database,
    desc: 'Data modelling, querying and turning information into useful insight.',
    items: ['MySQL', 'MongoDB', 'SQL', 'ERD'],
  },
  {
    title: 'Testing & Analysis',
    icon: ClipboardCheck,
    desc: 'Quality-focused work from requirements to automated test coverage.',
    items: ['Playwright', 'Manual testing', 'User stories', 'Scrum', 'Agile', 'UML', 'BPMN'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    desc: 'Tools I use for collaboration, documentation, development and reporting.',
    items: ['Git', 'GitHub', 'Docker', 'Figma', 'Jira', 'Confluence', 'IntelliJ', 'VS Code', 'Power BI', 'Excel'],
  },
];

const projects = [
  {
    title: 'MSQTO',
    badge: 'Internship',
    summary: '',
    problem: 'MSQTO was a management portal internship project where software management and application development worked together.',
    solution: 'Supported the portal through UX/UI designs, user stories, automated tests, bug reports and Agile/Scrum coordination.',
    contribution: 'Created designs, wrote automated Playwright tests, reported bugs, followed up project progress and supported Scrum/Agile workflows.',
    role: 'Software Management Intern',
    tech: ['Figma', 'Playwright', 'UX/UI', 'Testing', 'Bug reporting', 'User stories', 'Scrum', 'Agile'],
    logo: msqtoLogo,
    github: null,
    demo: null,
  },
  {
    title: 'SmartFormFill',
    badge: 'Company collaboration',
    summary: '',
    problem: 'For a school course, we worked with a company to develop a project in a multidisciplinary team.',
    solution: 'Designed a structured flow with clearer input handling and automatic suggestions.',
    contribution: 'Translated company requirements into UX/UI designs, test scenarios and automated Playwright tests. I also reported bugs and helped track the team’s progress.',
    role: 'Software Management Student in a multidisciplinary project team',
    tech: ['Figma', 'Playwright', 'UX/UI', 'Testing', 'Bug reporting', 'Analysis', 'Scrum'],
    logo: smartFormFillLogo,
    logoClass: 'smartformfill-logo',
    github: null,
    demo: null,
  },
  {
    title: 'Specora',
    badge: 'Local productivity tool',
    summary: 'A tool for designing and documenting API contracts before implementing them in our own project.',
    problem: 'While developing our own project, we needed one clear place to define the APIs before programming them, including the responses we expected for both successful and failed requests.',
    solution: 'Created a tool where each API endpoint can be prepared in advance with its expected status codes and JSON response structures for success and error scenarios.',
    contribution: 'Helped define the workflow and structure for documenting endpoints, status codes and expected JSON responses, using AI tools to support problem solving and development.',
    role: 'Project team member and tool developer',
    tech: ['Problem solving', 'AI-assisted development'],
    logo: specoraLogo,
    logoClass: 'specora-logo',
    github: null,
    demo: null,
  },
  {
    title: 'ZVK Onder den Toren Veulen',
    badge: 'Personal project',
    summary: 'A complete club website that I designed and developed independently.',
    problem: 'The club needed one clear and accessible website for matches, players, sponsors, club news and activities.',
    solution: 'Designed and built a responsive multi-page website with clear navigation and dedicated sections for the club’s content.',
    contribution: 'Handled the entire project independently, including the visual design, site structure, front-end development, responsive styling, content integration and testing.',
    role: 'Solo designer and front-end developer',
    tech: ['Vue', 'TypeScript', 'Vite', 'CSS', 'UX/UI Design'],
    logo: odtLogo,
    logoClass: 'odt-logo',
    github: 'https://github.com/Arjen-Coenegracht/zvk_onderdentorenveulen',
    demo: 'https://www.zvk-onderdentorenveulen.be/',
    demoLabel: 'Live site',
  },
  {
    title: 'ClubSpot',
    badge: 'In development',
    summary: 'An ongoing full-stack project developed by a two-person team. More details will be shared when the project is further developed.',
    problem: 'The project requires a complete and well-structured application. As it is still in development, its purpose and specific functionality are not yet being shared publicly.',
    solution: 'Working through the full development process, from ERP analysis, UML and database design to API development, backend implementation and the complete frontend.',
    contribution: 'Collaborating in a two-person team across the entire application, including ERP flows, UML models, database structure, APIs, backend logic and frontend development.',
    role: 'Full-stack developer in a two-person team',
    tech: ['ERP', 'UML', 'Database design', 'APIs', 'Backend', 'Frontend', 'Full-stack development'],
    logo: clubspotLogo,
    logoClass: 'clubspot-logo',
    github: null,
    demo: null,
  },
];

const experience = [
  {
    date: '2022 - 2026',
    role: 'Bachelor Toegepaste Informatica',
    org: 'Software Management',
    desc: 'Graduated with a focus on business and IT alignment, analysis, testing, project work, communication and process improvement.',
  },
  {
    date: '2026',
    role: 'Internship',
    org: 'PXL Smart ICT',
    desc: 'Took on project management tasks, worked on UX/UI, wrote user stories, supported Scrum and Agile workflows and created automated tests.',
  },
  {
    date: 'Today',
    role: 'Junior IT Professional',
    org: 'Building personal projects and growing across IT domains',
    desc: 'Focused on software management, testing, analysis, data and the bridge between business needs and technical solutions.',
  },
];

function App() {
  const [openProject, setOpenProject] = useState(projects[0].title);

  useEffect(() => {
    const glow = document.querySelector('.cursor-glow');
    const moveGlow = (event) => {
      glow?.style.setProperty('--x', `${event.clientX}px`);
      glow?.style.setProperty('--y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <div className="page">
      <div className="cursor-glow" aria-hidden="true" />

      <header className="site-header">
        <a href="#home" className="nav-logo"><span>~/</span>arjen-coenegracht<span>.dev</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="code-bio" aria-label="Code profile of Arjen">
              <p><span className="c-comment">// who_am_i.ts</span></p>
              <p><span className="c-keyword">const</span> <span className="c-value">profile</span> <span className="c-punct">=</span> <span className="c-brace">{'{'}</span></p>
              <p className="indent"><span className="c-prop">name</span><span className="c-punct">:</span> <span className="c-string">"Arjen Coenegracht"</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">degree</span><span className="c-punct">:</span> <span className="c-string">"Applied Computer Science"</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">focus</span><span className="c-punct">:</span> <span className="c-string">"Software Management"</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">works_with</span><span className="c-punct">:</span> <span className="c-brace">[</span><span className="c-string">"testing"</span><span className="c-punct">,</span> <span className="c-string">"data"</span><span className="c-punct">,</span> <span className="c-string">"analysis"</span><span className="c-brace">]</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">tools</span><span className="c-punct">:</span> <span className="c-brace">[</span><span className="c-string">"Jira"</span><span className="c-punct">,</span> <span className="c-string">"Confluence"</span><span className="c-punct">,</span> <span className="c-string">"Figma"</span><span className="c-punct">,</span> <span className="c-string">"Playwright"</span><span className="c-punct">,</span> <span className="c-string">"SQL"</span><span className="c-brace">]</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">mindset</span><span className="c-punct">:</span> <span className="c-string">"always learning"</span></p>
              <p><span className="c-brace">{'}'}</span><span className="c-punct">;</span></p>
              <p><span className="c-keyword">export default</span> profile<span className="c-punct">;</span></p>
              <p><span className="c-comment">// ready to contribute</span><span className="cursor">_</span></p>
            </div>

            <div className="hero-copy">
              <h1>
                Arjen<br />
                <em>Coenegracht</em>
              </h1>
              <p className="hero-title">Software Management Graduate</p>
              <p className="hero-intro">
                I help make software more reliable through quality, testing, data and user experience.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/Arjen-CV.pdf" download="Arjen Coenegracht CV.pdf"><Download size={15} /> Download CV</a>
                <a className="btn btn-ghost" href="#projects">View Projects <ExternalLink size={15} /></a>
                <a className="btn btn-ghost" href="#contact"><Mail size={15} /> Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <p className="section-label">01 / about</p>
          <h2 className="section-title">Business, quality <span>and technology</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I combine business and IT through a Software Management background. I enjoy translating needs into
                clear requirements, user stories and practical solutions that make sense for both users and teams.
              </p>
              <p>
                My strongest interests are testing, SQL and data, because they connect quality with insight. I like
                making software reliable, understandable and useful instead of only technically complete.
              </p>
              <p>
                Next to my studies and internship, I keep building personal projects with Java Spring Boot, Vue,
                databases, APIs and automated tests to keep learning across different IT domains.
              </p>
            </div>
            <aside className="profile-card" aria-label="Profile facts">
              <img src={portraitPhoto} alt="Portrait of Arjen Coenegracht" />
            </aside>
          </div>
        </section>

        <section id="skills" className="content-section">
          <p className="section-label">02 / skills</p>
          <h2 className="section-title">Technical <span>toolkit</span></h2>
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <Icon className="skill-icon" size={24} />
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="content-section">
          <p className="section-label">03 / projects</p>
          <h2 className="section-title">Selected <span>case work</span></h2>
          <div className="projects-list">
            {projects.map((project, index) => {
              const isOpen = openProject === project.title;
              return (
                <article className={`project-card ${isOpen ? 'is-open' : ''}`} key={project.title}>
                  <button
                    className="project-toggle"
                    type="button"
                    onClick={() => setOpenProject(isOpen ? '' : project.title)}
                    aria-expanded={isOpen}
                  >
                    <span className="project-number">#{String(index + 1).padStart(3, '0')}</span>
                    <span className={`project-visual ${project.logo ? 'has-logo' : ''}`} aria-hidden="true">
                      <span className="project-icon-frame">
                        {project.logo ? (
                          <img className={project.logoClass || ''} src={project.logo} alt="" />
                        ) : (
                          <span className="project-icon-fallback">
                            {project.title.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </span>
                    </span>
                  </button>
                  <div className="project-content">
                    <p className="project-badge">{project.badge}</p>
                    <h3>{project.title}</h3>
                    {project.summary && <p>{project.summary}</p>}
                    <div className="project-stack">
                      {project.tech.map((tag) => (
                        <span className="stack-pill" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      className="project-details-toggle"
                      type="button"
                      onClick={() => setOpenProject(isOpen ? '' : project.title)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Hide details' : 'View details'}
                      <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="project-details">
                        <p><strong>Context:</strong> {project.problem}</p>
                        <p><strong>My role:</strong> {project.role}</p>
                        <p><strong>What I did:</strong> {project.contribution}</p>
                        {(project.github || project.demo || project.mockups) && (
                          <div className="project-actions">
                            {project.github && (
                              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
                            )}
                            {project.demo && (
                              <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel || 'Live Demo'} <ExternalLink size={14} /></a>
                            )}
                            {project.mockups && (
                              <span className="project-link muted-link">{project.mockups}</span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="projects-note">
            Want to know more about one of these projects? Feel free to send me a message.
          </p>
        </section>

        <section id="experience" className="content-section">
          <p className="section-label">04 / experience</p>
          <h2 className="section-title">Education and <span>experience</span></h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.date}-${item.role}`}>
                <p className="timeline-date">{item.date}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-section">
          <article className="info-card">
            <GraduationCap size={24} />
            <h2>Ambition</h2>
            <p>
              I want to keep growing as a broad IT professional by learning more about AI, security, testing,
              data, software development and project management. I like exploring how technology can create real value.
            </p>
          </article>
          <article className="info-card">
            <Terminal size={24} />
            <h2>What I bring</h2>
            <div className="workflow">
              <span>Analytical thinking</span>
              <span>Problem-solving mindset</span>
              <span>Learning mindset</span>
              <span>Business and IT alignment</span>
              <span>Project-oriented work</span>
              <span>Quality-focused testing</span>
            </div>
          </article>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-label">05 / contact</p>
          <h2 className="section-title">Let us <span>connect</span></h2>
          <div className="contact-inner">
            <div>
              <p className="contact-cta">Interested in junior roles and projects where IT creates visible value.</p>
              <p className="contact-sub">
                Interested in testing, analysis, data, software management and roles where business and IT strengthen each other.
              </p>
              <a className="btn btn-primary" href="mailto:arjencoenegracht@hotmail.com">Send an email <Mail size={15} /></a>
            </div>
            <div className="contact-list">
              <a href="mailto:arjencoenegracht@hotmail.com"><Mail size={16} /><span><small>Email</small>arjencoenegracht@hotmail.com</span></a>
              <a href="https://www.linkedin.com/in/arjen-coenegracht-0643a92a0/" target="_blank" rel="noreferrer"><LinkedInLogo size={16} /><span><small>LinkedIn</small>LinkedIn profile</span></a>
              <a href="https://github.com/Arjen-Coenegracht" target="_blank" rel="noreferrer"><GitHubLogo size={16} /><span><small>GitHub</small>GitHub profile</span></a>
              <a href="tel:+32486699881"><Phone size={16} /><span><small>Phone</small>+32 486 69 98 81</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Made with React + Vite</span>
        <div className="footer-links">
          <a href="https://github.com/Arjen-Coenegracht" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/arjen-coenegracht-0643a92a0/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:arjencoenegracht@hotmail.com">Email</a>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
