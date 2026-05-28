import { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Download, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import drawnPortrait from './assets/DrawnArjen.png';

const skillGroups = [
  { title: 'Programmeertalen', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C#'] },
  { title: 'Frameworks', items: ['Spring Boot', 'Vue', 'React'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'Testing', items: ['Playwright'] },
  { title: 'Tools', items: ['GitHub', 'Jira', 'Confluence', 'Linux', 'Figma', 'Salesforce', 'UIPath', 'Outsystems'] },
  { title: 'Data', items: ['Power BI'] },
];

const projects = [
  {
    title: 'SmartFormFill',
    context: 'School + bedrijfsproject',
    problem: 'Formulieren invullen kostte veel tijd en veroorzaakte fouten.',
    solution: 'Een flow ontworpen die invoer structureert en automatische suggesties geeft.',
    contribution: 'Analyse, UX-structuur, frontendlogica en testscenario’s.',
    tech: ['JavaScript', 'Vue', 'Playwright', 'SQL'],
    learned: 'Van requirements naar testbare features vertalen met duidelijke acceptatiecriteria.',
  },
  {
    title: 'Mosquito Tool',
    context: 'Stageproject',
    problem: 'Teams hadden nood aan stabiele multitenancy-ondersteuning en betrouwbare testing.',
    solution: 'UI-flows verbeterd en E2E testing uitgewerkt voor kritieke paden.',
    contribution: 'Testing met Playwright, frontend-bijdragen, analyse en documentatie.',
    tech: ['Playwright', 'Figma', 'JavaScript', 'Jira'],
    learned: 'Strakker samenwerken tussen businessverwachting en technische uitvoering.',
  },
  {
    title: 'ZVK Onder den Toren Veulen',
    context: 'Eigen project',
    problem: 'De club had geen centrale, duidelijke digitale plek.',
    solution: 'Een toegankelijke oplossing gebouwd met focus op duidelijkheid en onderhoudbaarheid.',
    contribution: 'Volledige uitwerking: analyse, development, testing en iteratieve verbeteringen.',
    tech: ['React', 'GitHub', 'SQL'],
    learned: 'Eigendomsgevoel nemen over productkwaliteit en gebruikerservaring.',
  },
  {
    title: 'Connect 4',
    context: 'Schoolproject',
    problem: 'Doel was om logica, structuur en edge cases correct af te dekken.',
    solution: 'Spelregels robuust geïmplementeerd met focus op leesbare code.',
    contribution: 'Core game logic, UI-afwerking en testdenken.',
    tech: ['Java', 'TypeScript'],
    learned: 'Consistente logica en duidelijke code-structuur maken onderhoud veel eenvoudiger.',
  },
];

const starterQuestions = [
  'Wat deed Arjen tijdens zijn stage?',
  'Welke projecten tonen Arjens sterkste vaardigheden?',
  'Welke rol past het best bij Arjens profiel?',
  'Welke technologieën gebruikt Arjen het meest?',
];

const answerBook = {
  stage:
    'Arjen werkte tijdens zijn stage aan testing, frontend, analyse, multitenancy-applicaties en samenwerking tussen business en IT.',
  projects:
    'De kernprojecten zijn SmartFormFill, Mosquito Tool, ZVK Onder den Toren Veulen en Connect 4, telkens met focus op analyse, bouwen en testen.',
  role:
    'Een rol met combinatie van development, testing en business-IT afstemming sluit het beste aan bij Arjens profiel.',
  skills:
    'Arjen werkt onder andere met Java, JavaScript, TypeScript, Python, SQL, Spring Boot, Vue, React en Playwright.',
};

function App() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { who: 'bot', text: 'Vraag gerust iets over stage, projecten, skills of toekomstige rol.' },
  ]);
  const chatMessagesRef = useRef(null);
  const cardPalette = useMemo(() => ['variant-1', 'variant-2', 'variant-3', 'variant-4'], []);

  const randomPick = (items) => items[Math.floor(Math.random() * items.length)];
  const randomCardClass = (prefix) => `${prefix}-${randomPick(cardPalette)}`;

  const skillCardClasses = useMemo(
    () => skillGroups.map(() => randomCardClass('skill')),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const projectCardClasses = useMemo(
    () => projects.map(() => randomCardClass('project')),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const infoCardClasses = useMemo(
    () => [randomCardClass('info'), randomCardClass('info'), randomCardClass('info'), randomCardClass('info')],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const hobbyCardClasses = useMemo(
    () => [randomCardClass('hobby'), randomCardClass('hobby'), randomCardClass('hobby'), randomCardClass('hobby')],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const container = chatMessagesRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  function reply(question) {
    const q = question.toLowerCase();
    if (q.includes('stage')) return answerBook.stage;
    if (q.includes('project')) return answerBook.projects;
    if (q.includes('rol') || q.includes('functie')) return answerBook.role;
    return answerBook.skills;
  }

  function sendChat() {
    const clean = chatInput.trim();
    if (!clean) return;
    setMessages((current) => [...current, { who: 'user', text: clean }, { who: 'bot', text: reply(clean) }]);
    setChatInput('');
  }

  return (
    <div className="page">
      <header className="site-header">
        <a href="#home" className="logo">Arjen Coenegracht</a>
        <nav>
          <a href="#about">Over</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projecten</a>
          <a href="#assistant">AI Chat</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Arjen Coenegracht</h1>
            <p className="hero-title">Software Development - Testing - Business & IT Alignment</p>
            <p className="hero-intro">
              Ik rond binnenkort mijn opleiding Toegepaste Informatica (Software Management) af en bouwde ervaring op in softwareontwikkeling, testing, UX/UI en databanken. Mijn ambitie is om door te groeien tot een veelzijdige IT-professional.
            </p>
            <div className="hero-actions">
              <a href="#projects">Bekijk projecten</a>
              <a href="/Arjen-CV.pdf" download><Download size={15} /> Download CV</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <img className="portrait" src={drawnPortrait} alt="Getekend portret van Arjen" />
        </section>

        <section id="about" className="content-section">
          <h2>Over Mij</h2>
          <p>
            Ik ben bijna afgestudeerd in Toegepaste Informatica met afstudeerrichting Software Management. Ik werk graag op het snijpunt van business en IT: begrijpen wat nodig is, dat vertalen naar een oplossing, en zorgen dat die ook testbaar en bruikbaar is.
          </p>
          <p>
            Mijn interesses liggen vooral in development, testing, analyse en duidelijke communicatie binnen teams. Ik werk gestructureerd, ben leergierig, en hou ervan om met feedback snel te verbeteren. Daarnaast werk ik ook zelfstandig aan projecten.
          </p>
        </section>

        <section className="content-section">
          <h2>Ambities & Toekomstvisie</h2>
          <p>
            Ik wil mezelf ontwikkelen tot een veelzijdige IT-professional met kennis van softwareontwikkeling, testing, analyse, DevOps en AI, met blijvende focus op samenwerking en impact voor gebruikers.
          </p>
        </section>

        <section id="skills" className="content-section">
          <h2>Skills & Technologieen</h2>
          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <article className={`skill-group ${skillCardClasses[index]}`} key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <h2>Projecten</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card ${projectCardClasses[index]}`}>
                <div className="project-media">
                  <span>Screenshot placeholder</span>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-context">{project.context}</p>
                  <p><strong>Probleem:</strong> {project.problem}</p>
                  <p><strong>Oplossing:</strong> {project.solution}</p>
                  <p><strong>Mijn bijdrage:</strong> {project.contribution}</p>
                  <p><strong>Wat ik leerde:</strong> {project.learned}</p>
                  <div className="tags">
                    {project.tech.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                  <a className="project-link" href="#contact">GitHub link later toevoegen</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section two-col">
          <article className={`info-card ${infoCardClasses[0]}`}>
            <h2>Werkervaring / Stage</h2>
            <p className="period">Stage - PXL Smart ICT (2026)</p>
            <p>
              Werkte aan testing, frontend, analyse, multitenancy-applicaties, Playwright testing en UX-ondersteuning via Figma.
            </p>
          </article>
          <article className={`info-card ${infoCardClasses[1]}`}>
            <h2>Opleiding</h2>
            <p className="period">Toegepaste Informatica - Software Management (2022-2026)</p>
            <p>Focus op business en IT alignment, analyse, testing, projectwerking, communicatie en procesmatig verbeteren.</p>
          </article>
        </section>

        <section className="content-section two-col">
          <article className={`info-card ${infoCardClasses[2]}`}>
            <h2>Talen</h2>
            <ul>
              <li>Nederlands - moedertaal</li>
              <li>Engels - professioneel</li>
              <li>Frans - basis</li>
            </ul>
          </article>
          <article className={`info-card ${infoCardClasses[3]}`}>
            <h2>Soft Skills</h2>
            <ul>
              <li>Analytisch denken</li>
              <li>Probleemoplossend vermogen</li>
              <li>Communicatie en samenwerken</li>
              <li>Testing mindset en documentatie</li>
              <li>Verantwoordelijkheid en leergierigheid</li>
            </ul>
          </article>
        </section>

        <section className="content-section">
          <h2>Hoe Ik Werk</h2>
          <div className="workflow">
            <span>Behoefte begrijpen</span>
            <span>Oplossing ontwerpen</span>
            <span>Ontwikkelen</span>
            <span>Testen</span>
            <span>Verbeteren</span>
          </div>
        </section>

        <section className="content-section">
          <h2>Wat Mijn Hobbies Mij Geleerd Hebben</h2>
          <div className="hobby-grid">
            <article className={`hobby-card ${hobbyCardClasses[0]}`}>
              <h3>Voetbal</h3>
              <p>Teamwork, discipline en blijven gaan onder druk. In projecten betekent dat: verantwoordelijkheid nemen en op elkaar kunnen rekenen.</p>
            </article>
            <article className={`hobby-card ${hobbyCardClasses[1]}`}>
              <h3>Gaming</h3>
              <p>Problemen in stappen ontleden en patronen herkennen. Dat helpt mij om analytisch te werken en sneller tot oplossingen te komen.</p>
            </article>
            <article className={`hobby-card ${hobbyCardClasses[2]}`}>
              <h3>Sport</h3>
              <p>Consistentie en doorzettingsvermogen. Kleine, dagelijkse progressie maakt op lange termijn het verschil.</p>
            </article>
            <article className={`hobby-card ${hobbyCardClasses[3]}`}>
              <h3>Sociaal actief</h3>
              <p>Communiceren met verschillende mensen en vlot schakelen. Handig om business en IT beter op elkaar af te stemmen.</p>
            </article>
          </div>
        </section>

        <section id="assistant" className="assistant-box">
          <div>
            <h2>AI Chat</h2>
            <p>Deze chat blijft in de site, en je kan die later koppelen aan een echte AI-backend.</p>
            <div className="starter-list">
              {starterQuestions.map((question) => (
                <button key={question} type="button" onClick={() => setChatInput(question)}>
                  {question}
                </button>
              ))}
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-messages" ref={chatMessagesRef}>
              {messages.map((message, index) => (
                <div key={`${message.who}-${index}`} className={`message ${message.who}`}>
                  {message.who === 'bot' && <Bot size={14} />}
                  <span>{message.text}</span>
                </div>
              ))}
            </div>
            <div className="chat-input-row">
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') sendChat();
                }}
                placeholder="Typ je vraag..."
              />
              <button type="button" onClick={sendChat}>stuur</button>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <div className="contact-list">
            <a href="mailto:arjen@example.com"><Mail size={16} /> arjen@example.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Share2 size={16} /> LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+32400000000"><Phone size={16} /> +32 400 00 00 00</a>
            <span><MapPin size={16} /> Heers, Belgie</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
