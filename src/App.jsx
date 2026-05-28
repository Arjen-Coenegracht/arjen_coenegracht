import { useEffect, useRef, useState } from 'react';
import { Bot, Download, Mail } from 'lucide-react';
import drawnPortrait from './assets/DrawnArjen.png';

const traits = [
  {
    title: 'Voetbal',
    text: 'Ik ben een grote voetbalfan. Voetbal spreekt mij aan door de combinatie van teamwork, tactiek, inzet en het samen werken naar resultaat.',
  },
  {
    title: 'Sport',
    text: 'Ik sport graag omdat het mij helpt om discipline, focus en doorzettingsvermogen te ontwikkelen. Die mentaliteit neem ik ook mee in mijn werk.',
  },
  {
    title: 'Gaming',
    text: 'Gaming heeft mijn interesse in technologie en probleemoplossing versterkt. Het leert mij strategisch denken, snel schakelen en oplossingen zoeken.',
  },
  {
    title: 'Teamwork',
    text: 'Ik werk graag in teams. Ik vind het belangrijk om ideeen te delen, feedback te krijgen en samen tot een beter resultaat te komen.',
  },
  {
    title: 'Analyse',
    text: 'Ik hou ervan om problemen te begrijpen, structuur aan te brengen en oplossingen logisch uit te werken.',
  },
  {
    title: 'Dashboards',
    text: 'Ik heb een sterke interesse in dashboards, KPI\'s en datavisualisatie. Ik vind het boeiend om data om te zetten naar duidelijke inzichten.',
  },
];

const skillSets = [
  {
    title: 'Development',
    items: ['Java', 'JavaScript', 'HTML', 'CSS', 'Vue.js', 'Spring Boot', 'REST API\'s', 'SQL'],
  },
  {
    title: 'UX/UI & Design',
    items: ['Figma', 'Wireframes', 'Prototypes', 'User flows', 'Dashboard design', 'Information architecture'],
  },
  {
    title: 'Analyse & Software Management',
    items: [
      'Requirements engineering',
      'User stories',
      'Procesanalyse',
      'KPI-analyse',
      'Functionele analyse',
      'Agile werken',
      'Low-code / No-code',
    ],
  },
  {
    title: 'Testing & Quality',
    items: ['Playwright', 'End-to-end testing', 'Testcases', 'Bugrapportage', 'GHERKIN', 'Regressietesten'],
  },
  {
    title: 'Data & Reporting',
    items: ['Power BI', 'SQL', 'Datavisualisatie', 'KPI\'s', 'Rapportering', 'Dashboardanalyse'],
  },
  {
    title: 'Tools & Collaboration',
    items: ['Jira', 'Confluence', 'GitHub', 'GitHub Projects', 'Docker', 'Visual Studio Code', 'Slack', 'Microsoft Teams', 'Salesforce'],
  },
];

const projects = [
  {
    title: 'MSQTO Management Portal',
    description:
      'Tijdens mijn stage bij PXL-Smart ICT werkte ik mee aan het MSQTO Management Portal, een beheertool voor het beheren van bevragingen en het analyseren van resultaten. Mijn focus lag op analyse, UX/UI, dashboardontwerp, testing en ondersteuning van het ontwikkelproces.',
    tags: ['UX/UI', 'Testing', 'Requirements', 'Dashboard Design', 'Playwright', 'Agile'],
  },
  {
    title: 'Dashboardprototype voor bevragingsdata',
    description:
      'Voor mijn bachelorproef onderzocht ik welke UX/UI-richtlijnen, KPI\'s en datavisualisaties geschikt zijn voor dashboards in een onderzoekscontext. Deze inzichten vertaalde ik naar een dashboardprototype met KPI-cards, trendgrafieken, voltooiingsfunnels en respondentanalyses.',
    tags: ['Dashboard', 'KPI\'s', 'Data Visualization', 'UX Research', 'Figma'],
  },
  {
    title: 'Automated testing met Playwright',
    description:
      'Binnen het MSQTO-project werkte ik mee aan geautomatiseerde end-to-end testen. Hierbij werden volledige gebruikersflows getest, waaronder het aanmaken, configureren, opslaan en heropenen van vragenlijsten.',
    tags: ['Playwright', 'Testing', 'GHERKIN', 'QA', 'Automation'],
  },
  {
    title: 'Schoolprojecten',
    description:
      'Tijdens mijn opleiding werkte ik aan verschillende projecten rond webontwikkeling, API\'s, databases en applicatieontwikkeling. Deze projecten hielpen mij om technische kennis te combineren met analyse en projectmatig werken.',
    tags: ['Java', 'Spring Boot', 'SQL', 'Web Development'],
  },
];

const starterQuestions = [
  'Welke skills heeft Arjen?',
  'Wat deed Arjen tijdens zijn stage?',
  'Welke projecten heeft Arjen gemaakt?',
  'Waarover gaat zijn bachelorproef?',
  'Heeft Arjen ervaring met testing?',
  'Welke tools gebruikt Arjen?',
];

const answerBook = {
  skills:
    'Arjen heeft sterke skills in development, UX/UI, analyse, testing en data. Denk aan Java, JavaScript, Spring Boot, Playwright, Figma, SQL, Power BI en Agile samenwerking.',
  stage:
    'Tijdens zijn stage bij PXL-Smart ICT werkte Arjen aan requirements, user stories, UX/UI in Figma, dashboardconcepten en testing met Playwright en bugrapportage.',
  projects:
    'Arjen werkte onder andere aan het MSQTO Management Portal, een dashboardprototype voor bevragingsdata, geautomatiseerde Playwright-testing en meerdere schoolprojecten.',
  thesis:
    'De bachelorproef focust op UX/UI-richtlijnen, KPI\'s en datavisualisaties voor een onderzoeksdashboard met aandacht voor filtering, respondentgedrag en uitvalanalyse.',
  testing:
    'Ja, Arjen heeft ervaring met end-to-end testing, testcases, regressietesten, GHERKIN en bugopvolging binnen een Agile context.',
  tools:
    'Arjen gebruikt onder andere Jira, Confluence, GitHub, GitHub Projects, Docker, Visual Studio Code, Slack, Microsoft Teams en Salesforce.',
};

function App() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { who: 'bot', text: 'Vraag gerust iets over mijn skills, stage, projecten of bachelorproef.' },
  ]);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const container = chatMessagesRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  function reply(question) {
    const q = question.toLowerCase();
    if (q.includes('stage')) return answerBook.stage;
    if (q.includes('project')) return answerBook.projects;
    if (q.includes('bachelor') || q.includes('proef')) return answerBook.thesis;
    if (q.includes('test')) return answerBook.testing;
    if (q.includes('tool')) return answerBook.tools;
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
          <a href="#about">Over mij</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projecten</a>
          <a href="#assistant">AI-chatbot</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-card">
          <div className="hero-copy reveal">
            <p className="eyebrow">Software Management</p>
            <h1>Hallo, ik ben Arjen 👋</h1>
            <p className="hero-subtitle">
              Software Management student met interesse in UX/UI, testing, data, dashboards en development.
            </p>
            <p className="hero-intro">
              Ik analyseer, ontwerp en test digitale oplossingen die niet alleen technisch werken, maar ook duidelijk,
              gebruiksvriendelijk en logisch opgebouwd zijn. Ik werk graag in teamverband, denk graag mee over
              structuur en gebruikerservaring, en combineer technische kennis met een analytische blik.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Bekijk mijn projecten</a>
              <a className="btn btn-ghost" href="#contact">Neem contact op</a>
            </div>
          </div>
          <img className="portrait reveal" src={drawnPortrait} alt="Getekend portret van Arjen" />
        </section>

        <section className="content-section reveal">
          <h2>Meer dan alleen code</h2>
          <p>
            Naast IT ben ik iemand die graag sport, voetbal volgt en gamet. Die interesses zeggen ook iets over hoe ik
            werk: ik hou van teamwork, strategie, discipline en probleemoplossend denken. Of het nu op het veld, in
            een game of binnen een projectteam is: ik werk graag samen naar een duidelijk doel.
          </p>
        </section>

        <section id="about" className="content-section reveal">
          <h2>Over mij</h2>
          <p>
            Ik ben Arjen Coenegracht, student Toegepaste Informatica. Binnen mijn opleiding ligt mijn focus vooral op
            softwaremanagement, analyse, UX/UI, testing en het vertalen van gebruikersnoden naar duidelijke digitale
            oplossingen.
          </p>
          <p>
            Tijdens mijn stage bij PXL-Smart ICT werkte ik mee aan het MSQTO Management Portal. Hierbij lag mijn focus
            op requirements, user stories, UX/UI-ontwerp, dashboarddesign, testing en bugrapportage. Door deze
            ervaring heb ik geleerd hoe belangrijk duidelijke communicatie, structuur en samenwerking zijn binnen een
            softwareproject.
          </p>
        </section>

        <section className="content-section reveal">
          <h2>Wat mij typeert</h2>
          <div className="trait-grid">
            {traits.map((item) => (
              <article className="trait-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section reveal">
          <h2>Skills</h2>
          <div className="skill-grid">
            {skillSets.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section reveal">
          <h2>Projecten</h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card project-split ${index % 2 === 1 ? 'project-split-reverse' : ''}`}
              >
                <div className="project-image-placeholder">
                  <span>Project screenshot placeholder</span>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal">
          <h2>Ervaring</h2>
          <article className="experience-card">
            <h3>PXL-Smart ICT - Software Management stagiair</h3>
            <p>
              Tijdens mijn stage werkte ik mee aan de analyse, het ontwerp en de validatie van het MSQTO Management
              Portal. Ik stelde user stories op, werkte UX/UI-ontwerpen uit in Figma, dacht mee over
              dashboardfunctionaliteiten en ondersteunde het testproces met Playwright en bugrapportage.
            </p>
            <ul>
              <li>Requirements analyseren</li>
              <li>User stories opstellen</li>
              <li>UX/UI ontwerpen maken</li>
              <li>Dashboardconcepten uitwerken</li>
              <li>Testcases en bugs opvolgen</li>
              <li>Samenwerken binnen een Agile team</li>
            </ul>
          </article>
        </section>

        <section className="content-section reveal">
          <h2>Bachelorproef</h2>
          <article className="thesis-card">
            <h3>
              Ontwikkeling van het MSQTO Management Portal: UX/UI-richtlijnen, KPI\'s en datavisualisaties voor een
              onderzoeksdashboard
            </h3>
            <p>
              Mijn bachelorproef onderzoekt hoe dashboards binnen een onderzoekscontext duidelijker en
              gebruiksvriendelijker kunnen worden ontworpen. De focus ligt op UX/UI-richtlijnen, relevante KPI\'s en
              geschikte datavisualisaties voor het analyseren van complexe bevragingsdata.
            </p>
            <div className="chip-list">
              <span>Dashboard UX/UI</span>
              <span>KPI\'s</span>
              <span>Datavisualisatie</span>
              <span>Bevragingsdata</span>
              <span>Filtering</span>
              <span>Respondentgedrag</span>
              <span>Voltooiingspercentages</span>
              <span>Uitvalanalyse</span>
            </div>
          </article>
        </section>

        <section id="assistant" className="assistant-box reveal">
          <div>
            <h2>Vraag iets over mij</h2>
            <p>
              Deze chatbot helpt bezoekers om snel meer te weten te komen over mijn skills, projecten, stage,
              bachelorproef en interesses.
            </p>
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
              <button type="button" onClick={sendChat}>Verstuur</button>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section reveal">
          <h2>Contact</h2>
          <p>
            Wil je samenwerken, mijn projecten bekijken of gewoon contact opnemen? Je mag mij altijd bereiken via
            e-mail, LinkedIn of GitHub.
          </p>
          <div className="contact-actions">
            <a className="btn btn-ghost" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.62 0 4.29 2.38 4.29 5.48v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z"
                />
              </svg>
              LinkedIn
            </a>
            <a className="btn btn-ghost" href="https://github.com" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.11-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.09c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.43.21 2.49.11 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.25C22 6.59 17.52 2 12 2z"
                />
              </svg>
              GitHub
            </a>
            <a className="btn btn-ghost" href="mailto:arjen@example.com"><Mail size={15} /> E-mail</a>
            <a className="btn btn-primary cv-btn" href="/Arjen-CV.pdf" download><Download size={18} /> Download CV</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
