import { useEffect, useState } from 'react';
import {
  BriefcaseBusiness,
  Braces,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import drawnPortrait from './assets/DrawnArjen.png';

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
    icon: Braces,
    desc: 'Languages I use to build logic, applications and technical solutions.',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
  },
  {
    title: 'Backend',
    icon: Terminal,
    desc: 'Backend fundamentals for reliable APIs and maintainable applications.',
    items: ['Spring Boot', 'REST APIs', 'Hibernate', 'Maven', 'Postman'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    desc: 'Interfaces with attention for structure, usability and user experience.',
    items: ['Vue', 'React', 'Tailwind', 'HTML', 'CSS', 'UX/UI'],
  },
  {
    title: 'Databases',
    icon: Database,
    desc: 'Data modelling, querying and turning information into useful insight.',
    items: ['MySQL', 'MongoDB', 'Database design', 'ERD', 'Excel'],
  },
  {
    title: 'Testing & Analysis',
    icon: ShieldCheck,
    desc: 'Quality-focused work from requirements to automated test coverage.',
    items: ['Playwright', 'Manual testing', 'User stories', 'Scrum', 'Agile', 'UML', 'BPMN'],
  },
  {
    title: 'Tools',
    icon: BriefcaseBusiness,
    desc: 'Tools I use for collaboration, documentation, development and reporting.',
    items: ['Git', 'GitHub', 'Docker', 'Figma', 'Jira', 'Confluence', 'IntelliJ', 'VS Code', 'Power BI'],
  },
];

const projects = [
  {
    title: 'MSQTO',
    badge: 'Internship case study',
    summary: 'A testing and UX-focused internship project around multitenancy, workflows and software quality.',
    problem: 'Teams needed more reliable flows, clearer user interaction and better confidence in critical application paths.',
    solution: 'Improved UX/UI flows, translated requirements into user stories and added automated Playwright tests.',
    contribution: 'Project management tasks, UX/UI support, user stories, Scrum/Agile coordination and automated testing.',
    role: 'Software Tester & Software Management Intern',
    learned: 'How to combine project coordination, user stories, UX decisions and automated testing in a real business context.',
    tech: ['Playwright', 'Figma', 'Testing', 'UX/UI', 'Multitenancy', 'SQL', 'Scrum', 'Agile'],
    github: null,
    demo: null,
  },
  {
    title: 'SmartFormFill',
    badge: 'Business project',
    summary: 'A form assistance concept focused on reducing repetitive input and improving data quality.',
    problem: 'Filling in forms manually took time and increased the risk of mistakes.',
    solution: 'Designed a structured flow with clearer input handling and automatic suggestions.',
    contribution: 'Analysis, UX structure, frontend logic and test scenarios.',
    role: 'Analyst & Frontend Contributor',
    learned: 'How small UX decisions can reduce friction and make business processes easier to complete.',
    tech: ['JavaScript', 'Vue', 'Playwright', 'SQL'],
    github: null,
    demo: null,
  },
  {
    title: 'ZVK Onder den Toren Veulen',
    badge: 'Personal project',
    summary: 'A club-focused digital platform built with clarity, maintainability and simple content access in mind.',
    problem: 'The club needed one clear digital place for information and communication.',
    solution: 'Built an accessible solution with a simple structure and maintainable content flow.',
    contribution: 'Full project ownership: analysis, development, testing and iterative improvements.',
    role: 'Full Project Owner',
    learned: 'How to balance technical implementation with real users who need a simple and reliable website.',
    tech: ['React', 'GitHub', 'SQL'],
    github: 'https://github.com/Arjen-Coenegracht',
    demo: null,
  },
  {
    title: 'Connect 4',
    badge: 'Java project',
    summary: 'A game logic project focused on clean structure, edge cases and reliable rule implementation.',
    problem: 'The goal was to correctly handle game rules, win detection and edge cases.',
    solution: 'Implemented the core logic with readable code and a structured approach to validation.',
    contribution: 'Game logic, UI finishing and test-minded checks.',
    role: 'Java Developer',
    learned: 'How to think through edge cases and translate rules into maintainable code.',
    tech: ['Java', 'TypeScript'],
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
                I build reliable software with a strong focus on quality, testing, data and user experience.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/Arjen-CV.pdf" download><Download size={15} /> Download CV</a>
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
              <img src={drawnPortrait} alt="Drawn portrait of Arjen" />
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
                    <span className="project-visual" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
                  </button>
                  <div className="project-content">
                    <p className="project-badge">{project.badge}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-stack">
                      {project.tech.map((tag) => (
                        <span className="stack-pill" key={tag}>{tag}</span>
                      ))}
                    </div>
                    {isOpen && (
                      <div className="project-details">
                        <p><strong>Problem:</strong> {project.problem}</p>
                        <p><strong>Solution:</strong> {project.solution}</p>
                        <p><strong>My role:</strong> {project.role}</p>
                        <p><strong>What I did:</strong> {project.contribution}</p>
                        <p><strong>What I learned:</strong> {project.learned}</p>
                        <div className="project-actions">
                          {project.github ? (
                            <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
                          ) : (
                            <span className="project-link muted-link">GitHub private</span>
                          )}
                          {project.demo ? (
                            <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14} /></a>
                          ) : (
                            <span className="project-link muted-link">Live demo unavailable</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
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
              <span><MapPin size={16} /><span><small>Location</small>Belgium</span></span>
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
