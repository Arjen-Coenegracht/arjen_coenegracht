import { useEffect } from 'react';
import {
  BriefcaseBusiness,
  Braces,
  Code2,
  Database,
  Download as Downloaden,
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

const vaardigheidsgroepen = [
  {
    title: 'Programmeertalen',
    icon: Braces,
    desc: 'Talen waarmee ik applicaties, logica en technische oplossingen uitwerk.',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    title: 'Applicatieontwikkeling',
    icon: Terminal,
    desc: 'Backend, API en frontend samenbrengen tot bruikbare applicaties.',
    items: ['Spring Boot', 'REST API', 'Postman', 'Vue', 'React', 'UX/UI'],
  },
  {
    title: 'Testen',
    icon: ShieldCheck,
    desc: 'Kritieke paden afdekken, edge cases vinden en kwaliteit concreet maken.',
    items: ['Manueel testen', 'Playwright', 'E2E-testen', 'API-testen', 'Testscenario\'s', 'Bugrapportage'],
  },
  {
    title: 'Data en rapportage',
    icon: Database,
    desc: 'Data begrijpen, structureren en vertalen naar inzichten die bruikbaar zijn voor de business.',
    items: ['SQL', 'Databankontwerp', 'ERD', 'Power BI', 'Excel', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Analyse en processen',
    icon: BriefcaseBusiness,
    desc: 'Businessnoden analyseren, processen modelleren en werkbaar vertalen naar software.',
    items: ['Functionele analyse', 'User stories', 'Scrum', 'Agile', 'UML', 'BPMN'],
  },
  {
    title: 'Tools en platformen',
    icon: Terminal,
    desc: 'Samenwerking, documentatie en platformen ondersteunen binnen een bedrijfscontext.',
    items: ['Figma', 'Jira', 'Confluence', 'GitHub', 'Salesforce', 'UIPath', 'Outsystems', 'Linux'],
  },
];

const projecten = [
  {
    title: 'SmartFormFill',
    badge: 'Businessproject',
    problem: 'Formulieren invullen kostte veel tijd en veroorzaakte fouten.',
    solution: 'Een flow die invoer structureert en automatische suggesties geeft.',
    contribution: 'Analyse, UX-structuur, frontendlogica en testscenario\'s.',
    tech: ['JavaScript', 'Vue', 'Playwright', 'SQL'],
  },
  {
    title: 'Mosquito Tool',
    badge: 'Stageproject',
    problem: 'Teams hadden nood aan stabiele multitenancy-ondersteuning en betrouwbaar testen.',
    solution: 'UI-flows verbeterd en E2E-testen uitgewerkt voor kritieke paden.',
    contribution: 'Testen met Playwright, frontend-bijdragen, analyse en documentatie.',
    tech: ['Playwright', 'Figma', 'JavaScript', 'Jira'],
  },
  {
    title: 'ZVK Onder den Toren Veulen',
    badge: 'Eigen project',
    problem: 'De club had geen centrale, duidelijke digitale plek.',
    solution: 'Een toegankelijke oplossing gebouwd met focus op duidelijkheid en onderhoudbaarheid.',
    contribution: 'Volledige uitwerking: analyse, ontwikkeling, testen en iteratieve verbeteringen.',
    tech: ['React', 'GitHub', 'SQL'],
  },
  {
    title: 'Connect 4',
    badge: 'Java project',
    problem: 'Doel was om logica, structuur en edge cases correct af te dekken.',
    solution: 'Spelregels robuust geimplementeerd met focus op leesbare code.',
    contribution: 'Kernlogica van het spel, UI-afwerking en testdenken.',
    tech: ['Java', 'TypeScript'],
  },
];

const traject = [
  {
    date: '2022 - 2026',
    role: 'Bachelor Toegepaste Informatica',
    org: 'Afstudeerrichting Software Management',
    desc: 'Afgestudeerd met focus op business en IT-afstemming, analyse, testen, projectwerking, communicatie en procesmatig verbeteren.',
  },
  {
    date: '2026',
    role: 'Stage - PXL Smart ICT',
    org: 'Praktijkervaring in Software Management',
    desc: 'Nam projectmanagementtaken op en werkte mee aan UX/UI, het opstellen van user stories en het organiseren van het werk binnen een Scrum- en Agile-context. Daarnaast schreef ik geautomatiseerde testen om de kwaliteit van de applicatie te ondersteunen.',
  },
  {
    date: 'Heden',
    role: 'Junior IT-professional',
    org: 'Software Management, analyse en testing',
    desc: 'Richt zich op de brug tussen business en IT, met aandacht voor analyse, testing, projectwerking, duidelijke communicatie en continue verbetering.',
  },
];

function App() {
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
        <nav aria-label="Hoofdnavigatie">
          <a href="#over-mij">over mij</a>
          <a href="#vaardigheden">vaardigheden</a>
          <a href="#projecten">projecten</a>
          <a href="#traject">traject</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="code-bio" aria-label="Code profiel van Arjen">
              <p><span className="c-comment">// who_am_i.ts</span></p>
              <p><span className="c-keyword">const</span> <span className="c-value">profile</span> <span className="c-punct">=</span> <span className="c-brace">{'{'}</span></p>
              <p className="indent"><span className="c-prop">naam</span><span className="c-punct">:</span> <span className="c-string">"Arjen Coenegracht"</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">diploma</span><span className="c-punct">:</span> <span className="c-string">"Toegepaste Informatica"</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">focus</span><span className="c-punct">:</span> <span className="c-string">"Software Management"</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">werkt_met</span><span className="c-punct">:</span> <span className="c-brace">[</span><span className="c-string">"ontwikkeling"</span><span className="c-punct">,</span> <span className="c-string">"testen"</span><span className="c-punct">,</span> <span className="c-string">"analyse"</span><span className="c-brace">]</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">tools</span><span className="c-punct">:</span> <span className="c-brace">[</span><span className="c-string">"Java"</span><span className="c-punct">,</span> <span className="c-string">"Spring Boot"</span><span className="c-punct">,</span> <span className="c-string">"Vue"</span><span className="c-punct">,</span> <span className="c-string">"SQL"</span><span className="c-punct">,</span> <span className="c-string">"Jira"</span><span className="c-brace">]</span><span className="c-punct">,</span></p>
              <p className="indent"><span className="c-prop">beschikbaar_voor</span><span className="c-punct">:</span> <span className="c-string">"junior IT-kansen"</span></p>
              <p><span className="c-brace">{'}'}</span><span className="c-punct">;</span></p>
              <p><span className="c-keyword">export default</span> profile<span className="c-punct">;</span></p>
              <p><span className="c-comment">// klaar om bij te dragen</span><span className="cursor">_</span></p>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">Beschikbaar voor kansen</p>
              <h1>
                Arjen<br />
                <em>Coenegracht</em>
              </h1>
              <p className="hero-title">Softwareontwikkeling - Testen - Business en IT-afstemming</p>
              <p className="hero-intro">
                Afgestudeerd in Toegepaste Informatica - Software Management, met focus op ontwikkeling, testen,
                UX/UI, analyse en de brug tussen business en IT.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projecten">Bekijk projecten <ExternalLink size={15} /></a>
                <a className="btn btn-ghost" href="/Arjen-CV.pdf" download><Downloaden size={15} /> CV downloaden</a>
              </div>
            </div>
          </div>
        </section>

        <section id="over-mij" className="content-section over-mij-sectie">
          <p className="section-label">01 / over mij</p>
          <h2 className="section-title">De persoon <span>achter de code</span></h2>
          <div className="over-mij-grid">
            <div className="over-mij-tekst">
              <p>
                Mijn achtergrond in Software Management heeft me een brede kijk gegeven op software en de manier waarop
                technologie, processen en gebruikers samenkomen. Ik heb geleerd niet alleen te kijken naar hoe een
                toepassing gebouwd wordt, maar ook naar wat er nodig is, hoe gebruikers ermee werken en hoe je kwaliteit
                bewaakt van analyse tot oplevering.
              </p>
              <p>
                Ik zie mezelf als iemand die de brug slaat tussen business en IT. Ik denk graag functioneel mee over
                oplossingen, maar duik ook zonder probleem de technische kant in wanneer dat nodig is. Die combinatie
                helpt me om noden snel te begrijpen, realistische oplossingen uit te werken en vlot te schakelen
                tussen gebruikers, processen en technologie.
              </p>
              <p>
                Mijn interesse ligt vooral bij testen, SQL en data, omdat daar voor mij de link zit tussen kwaliteit,
                inzicht en concrete meerwaarde. Ik haal voldoening uit software niet alleen werkend te maken, maar ook
                betrouwbaar, logisch en bruikbaar.
              </p>
              <p>
                Ook buiten mijn opleiding ben ik me blijven verdiepen in IT. Zo bouw ik eigen applicaties, bijvoorbeeld met een
                Java Spring Boot-backend en een Vue-frontend, inclusief databank, API's en testen. Op die manier blijf
                ik mezelf technisch uitdagen en verbreed ik mijn kennis in ontwikkeling, data en softwarekwaliteit.
              </p>
              <p>
                Mijn sterkte ligt in de combinatie van analytisch denken, technisch inzicht, leergierigheid en
                gestructureerd werken. Ik werk graag aan oplossingen die niet alleen technisch kloppen, maar ook echt
                waarde hebben voor de gebruiker of organisatie.
              </p>
            </div>
            <aside className="profile-card" aria-label="Profielgegevens">
              <img src={drawnPortrait} alt="Getekend portret van Arjen" />
              <div>
                <div className="stat-number">2026</div>
                <div className="stat-label">afgestudeerd in toegepaste informatica</div>
              </div>
              <div>
                <div className="stat-number">4</div>
                <div className="stat-label">uitgelichte projecten</div>
              </div>
              <div>
                <div className="stat-number">3</div>
                <div className="stat-label">programmeertalen</div>
              </div>
            </aside>
          </div>
        </section>

        <section id="vaardigheden" className="content-section">
          <p className="section-label">02 / vaardigheden</p>
          <h2 className="section-title">Waar ik <span>mee werk</span></h2>
          <div className="vaardigheden-grid">
            {vaardigheidsgroepen.map((group) => {
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

        <section id="projecten" className="content-section">
          <p className="section-label">03 / projecten</p>
          <h2 className="section-title">Projecten die <span>richting geven</span></h2>
          <div className="projecten-lijst">
            {projecten.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="project-number">#{String(index + 1).padStart(3, '0')}</span>
                <div>
                  <p className="project-badge">{project.badge}</p>
                  <h3>{project.title}</h3>
                  <p><strong>Probleem:</strong> {project.problem}</p>
                  <p><strong>Oplossing:</strong> {project.solution}</p>
                  <p><strong>Mijn bijdrage:</strong> {project.contribution}</p>
                  <div className="project-stack">
                    {project.tech.map((tag) => (
                      <span className="stack-pill" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a className="project-link" href="#contact">Vraag details <ExternalLink size={14} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="traject" className="content-section">
          <p className="section-label">04 / traject</p>
          <h2 className="section-title">Mijn <span>traject</span></h2>
          <div className="timeline">
            {traject.map((item) => (
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
            <h2>Ambitie</h2>
            <p>
              Verder groeien als brede IT-professional door voortdurend bij te leren over softwareontwikkeling,
              AI, security, testing, analyse en projectmatig werken. Ik wil nieuwe technologieen begrijpen,
              praktisch toepassen en blijven ontdekken waar IT echte waarde kan creëren.
            </p>
          </article>
          <article className="info-card">
            <Terminal size={24} />
            <h2>Wat ik meebreng</h2>
            <div className="workflow">
              <span>Analytisch denken</span>
              <span>Leergierigheid</span>
              <span>Business en IT verbinden</span>
              <span>Projectmatig werken</span>
              <span>Kwaliteitsgericht testen</span>
            </div>
          </article>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-label">05 / contact</p>
          <h2 className="section-title">Laten we <span>connecten</span></h2>
          <div className="contact-inner">
            <div>
              <p className="contact-cta">Beschikbaar voor junior rollen en projecten waar IT waarde zichtbaar maakt.</p>
              <p className="contact-sub">
                Vooral geinteresseerd in ontwikkeling, testen, analyse en rollen waar business en IT elkaar versterken.
              </p>
              <a className="btn btn-primary" href="mailto:arjencoenegracht@hotmail.com">Stuur een e-mail <Mail size={15} /></a>
            </div>
            <div className="contact-list">
              <a href="mailto:arjencoenegracht@hotmail.com"><Mail size={16} /><span><small>e-mail</small>arjencoenegracht@hotmail.com</span></a>
              <a href="https://www.linkedin.com/in/arjen-coenegracht-0643a92a0/" target="_blank" rel="noreferrer"><LinkedInLogo size={16} /><span><small>linkedin</small>LinkedIn profiel</span></a>
              <a href="https://github.com/Arjen-Coenegracht" target="_blank" rel="noreferrer"><GitHubLogo size={16} /><span><small>github</small>GitHub profiel</span></a>
              <a href="tel:+32486699881"><Phone size={16} /><span><small>telefoon</small>+32 486 69 98 81</span></a>
              <span><MapPin size={16} /><span><small>locatie</small>Heers, Belgie</span></span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>2026 Arjen Coenegracht - ontworpen en gebouwd met zorg</span>
        <a href="#home">terug naar boven</a>
      </footer>
    </div>
  );
}

export default App;
