import './App.css'
import photo from './assets/abide photo.jpg'

const EMAIL = 'abidekarouwe814@gmail.com'
const PHONE = '+33 7 45 72 82 16'
const PHONE_HREF = '+33745728216'
const LOCATION = '76600 Le Havre, France'

type IconName =
  | 'shield'
  | 'search'
  | 'chart'
  | 'layers'
  | 'tool'
  | 'arrow'
  | 'check'
  | 'spark'
  | 'code'
  | 'document'
  | 'factory'
  | 'education'

function Icon({
  name,
  size = 22,
}: {
  name: IconName
  size?: number
}) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5.5c0 4.4-2.7 7.7-7 9.5-4.3-1.8-7-5.1-7-9.5V6l7-3z" />
          <path d="M8.5 12l2.2 2.2 4.8-5" />
        </svg>
      )

    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l5 5" />
        </svg>
      )

    case 'chart':
      return (
        <svg {...props}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M7 15l3-4 3 2 5-7" />
        </svg>
      )

    case 'layers':
      return (
        <svg {...props}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 12l9 5 9-5" />
          <path d="M3 16l9 5 9-5" />
        </svg>
      )

    case 'tool':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4.5 4.5 0 01-5.9 5.9L4 17l3 3 4.8-4.8a4.5 4.5 0 005.9-5.9l-3 3-2-2 2-3z" />
        </svg>
      )

    case 'arrow':
      return (
        <svg {...props}>
          <path d="M5 12h13" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      )

    case 'check':
      return (
        <svg {...props}>
          <path d="M5 12l4 4L19 6" />
        </svg>
      )

    case 'spark':
      return (
        <svg {...props}>
          <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
          <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z" />
        </svg>
      )

    case 'code':
      return (
        <svg {...props}>
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 8l4 4-4 4" />
          <path d="M14 5l-4 14" />
        </svg>
      )

    case 'document':
      return (
        <svg {...props}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      )

    case 'factory':
      return (
        <svg {...props}>
          <path d="M3 21V9l6 3V8l6 4V6l6 3v12z" />
          <path d="M6 17h2" />
          <path d="M11 17h2" />
          <path d="M16 17h2" />
        </svg>
      )

    case 'education':
      return (
        <svg {...props}>
          <path d="M3 9l9-5 9 5-9 5-9-5z" />
          <path d="M7 11v5c2.7 2.2 7.3 2.2 10 0v-5" />
          <path d="M21 9v6" />
        </svg>
      )

    default:
      return null
  }
}

const expertise = [
  {
    icon: 'shield' as IconName,
    number: '01',
    title: 'Sûreté de fonctionnement',
    text: 'Identifier les défaillances, analyser leurs conséquences et structurer les risques pour rendre les systèmes plus fiables et maîtrisés.',
    tags: ['AMDEC', 'FTA', 'RAMS', 'MTBF / MTTR'],
  },
  {
    icon: 'layers' as IconName,
    number: '02',
    title: 'Sécurité fonctionnelle',
    text: 'Analyser les fonctions de sécurité, leurs scénarios dangereux et leur niveau de performance, jusqu’à leur vérification.',
    tags: ['ISO 13849', 'ISO 19014', 'ISO 12100', 'ISO 26262'],
  },
  {
    icon: 'search' as IconName,
    number: '03',
    title: 'Analyse des systèmes',
    text: 'Décomposer un système complexe, comprendre ses interfaces et transformer les informations techniques en analyses structurées.',
    tags: ['Analyse fonctionnelle', 'Risques', 'Diagnostic', 'Exigences'],
  },
  {
    icon: 'chart' as IconName,
    number: '04',
    title: 'Vérification & données',
    text: 'Structurer les résultats, vérifier les fonctions étudiées et exploiter les données pour soutenir les décisions techniques.',
    tags: ['V&V', 'SISTEMA', 'MATLAB', 'Power BI'],
  },
]

const tools = [
  {
    name: 'SISTEMA',
    description: 'Analyse et vérification des architectures de sécurité',
  },
  {
    name: 'MATLAB / Simulink',
    description: 'Modélisation, analyse et traitement de données',
  },
  {
    name: 'Python',
    description: 'Automatisation, traitement et prototypage',
  },
  {
    name: 'SCADA',
    description: 'Supervision et suivi de paramètres industriels',
  },
  {
    name: 'Power BI',
    description: 'Visualisation et exploitation des données',
  },
  {
    name: 'Excel / VBA',
    description: 'Suivi, automatisation et structuration de données',
  },
  {
    name: 'AutoCAD',
    description: 'Lecture et réalisation de documents techniques',
  },
  {
    name: 'Arduino / ESP32',
    description: 'Prototypage et expérimentation électronique',
  },
]

const projects = [
  {
    id: '01',
    category: 'SÉCURITÉ FONCTIONNELLE',
    title: 'Sécurité des excavatrices compactes',
    company: 'Volvo Construction Equipment',
    period: 'Février — Juillet 2026',
    description:
      'Travail autour de la démonstration de sécurité des excavatrices compactes : analyse des risques, fonctions de sécurité, vérification et documentation.',
    tags: ['MCSSA', 'ISO 19014', 'ISO 13849', 'AMDEC', 'FTA'],
    type: 'volvo',
  },
  {
    id: '02',
    category: 'AUTOMATISATION & IA',
    title: 'Machine intelligente de tri des déchets',
    company: 'Projet — École Polytechnique de Lomé',
    period: '2021 — 2024',
    description:
      'Projet de conception et d’amélioration d’une machine de tri utilisant ESP32-CAM et des techniques d’intelligence artificielle.',
    tags: ['ESP32-CAM', 'IA', 'AMDEC', 'Maintenance'],
    type: 'ai',
  },
  {
    id: '03',
    category: 'MAINTENANCE INDUSTRIELLE',
    title: 'Surveillance d’un poste haute tension',
    company: 'Communauté Électrique du Bénin',
    period: 'Septembre — Décembre 2023',
    description:
      'Suivi des paramètres des transformateurs, supervision SCADA, détection d’anomalies et contribution à l’analyse de criticité des équipements.',
    tags: ['SCADA', 'Transformateurs', 'AMDEC', 'Maintenance'],
    type: 'energy',
  },
  {
    id: '04',
    category: 'ÉLECTRICITÉ & CHANTIER',
    title: 'Coordination de travaux électriques',
    company: 'Expert Electric',
    period: 'Octobre — Novembre 2024',
    description:
      'Coordination d’équipes techniques, suivi du matériel, analyse des anomalies et accompagnement de travaux d’électrification.',
    tags: ['Chantier', 'Électricité', 'Suivi', 'Coordination'],
    type: 'construction',
  },
]

const experiences = [
  {
    year: '2026',
    role: 'Ingénieure Sûreté de Fonctionnement',
    company: 'Volvo Construction Equipment',
    location: 'Belley, France',
    text: 'Sécurité fonctionnelle des excavatrices compactes et amélioration de la démonstration de sécurité.',
    points: [
      'Réalisation d’analyses préliminaires de risque sur des fonctions de sécurité d’excavatrices compactes selon la méthode MCSSA, appliquée aux fonctions hydrauliques, commande moteur et à la commande des équipements de travail, afin de déterminer le MPLr requis conformément à l’ISO 19014',
      'Rédaction d’un guide interne de sécurité pour l’utilisation des machines pilotes et prototypes, en identifiant les risques associés aux différentes phases de développement et en définissant les mesures de prévention adaptées',
      'Rédaction et structuration du processus de vérification et de validation des fonctions de sécurité, avec analyse des rôles, responsabilités, flux d’informations et exigences de conformité liées à l’ISO 13849',
      'Réalisation d’AMDEC sur le Tiltrotator et sur le Door Switch, afin d’identifier les modes de défaillance, leurs causes, leurs effets et leur criticité',
      'Réalisation d’un arbre de défaillance sur le Tiltrotator, pour analyser les chaînes de causes pouvant conduire à un mouvement inattendu ou excessif de l’équipement',
      'Contribution à la construction d’une base de données de sécurité fonctionnelle (FuSa) pour les équipements EnE, afin de centraliser les composants utilisés dans les analyses et améliorer leur traçabilité et leur réutilisation',
      'Participation à l’amélioration de la cohérence et de la structuration des données de sécurité fonctionnelle, en appui aux équipes système, sécurité fonctionnelle et développement',

    ],
  },
  {
    year: '2024',
    role: 'Conductrice de travaux',
    company: 'Expert Electric',
    location: 'Lomé, Togo',
    text: 'Coordination et suivi de travaux d’électrification.',
    points: [
      'Coordination des équipes techniques',
      'Coordination des équipes de techniciens sur les chantiers d’électrification et suivi de l’avancement des travaux',
      'Participation au chantier du Campus Teleperformance R+3 dans le cadre des travaux d’électrification d’un bâtiment',
      'Intervention sur un bâtiment de la Présidence pour l’analyse et le suivi des problématiques électriques, notamment les baisses de tension et le vieillissement des câbles. ',
      'Interface avec les clients : recueil des besoins, échanges sur les contraintes du chantier et prise en compte des attentes',
      'Suivi du matériel utilisé sur les activités : disponibilité, utilisation, traçabilité et coordination des besoins d’approvisionnement',
      'Coordination avec les chefs de projet, techniciens et équipes client afin d’assurer le bon déroulement des interventions',
      'Contrôle de l’avancement des travaux et remontée des informations liées aux anomalies ou aux contraintes rencontrées sur le chantier',

    ],
  },
  {
    year: '2023',
    role: 'Technicienne maintenance',
    company: 'Communauté Électrique du Bénin',
    location: 'Lomé, Togo',
    text: 'Maintenance et surveillance d’un poste haute tension.',
    points: [
      'Relevés de température et d’huile des transformateurs',
      'Relevés quotidiens des niveaux de température ',
      'Surveillance en salle de contrôle via SCADA des grandeurs électriques (tension, courant, puissance) en entrée et sortie des lignes, et signalement des anomalies ',
      'Participation aux travaux de maintenance corrective : remplacement de câbles et de tronçons de lignes défectueux ',
      'Contrôle des points chauds sur les installations ',

    ],
  },
]

const formations = [
  {
    year: '2025 — 2026',
    title: 'Master Sûreté de Fonctionnement des Systèmes Industriels',
    place: 'Université Le Havre Normandie — France',
    icon: 'shield' as IconName,
  },
  {
    year: '2024 — 2025',
    title: 'Master Énergie Électrique, Automatique et Télécommunications',
    place: 'École Polytechnique de Lomé — Togo',
    icon: 'layers' as IconName,
  },
  {
    year: '2021 — 2024',
    title: 'Licence Professionnelle Génie Électrique',
    place: 'École Polytechnique de Lomé — Togo',
    icon: 'education' as IconName,
  },
]

function ProjectVisual({ type }: { type: string }) {
  if (type === 'volvo') {
    return (
      <div className="project-visual visual-volvo">
        <div className="machine">
          <div className="machine-cabin" />
          <div className="machine-body" />
          <div className="machine-arm" />
          <div className="machine-bucket" />
          <div className="machine-wheel wheel-one" />
          <div className="machine-wheel wheel-two" />
        </div>

        <div className="visual-label visual-label-one">
          <span>01</span>
          Safety function
        </div>

        <div className="visual-label visual-label-two">
          <span>02</span>
          Risk analysis
        </div>

        <div className="visual-grid" />
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div className="project-visual visual-ai">
        <div className="ai-camera">
          <div className="camera-lens" />
          <div className="camera-led" />
        </div>

        <div className="ai-box ai-box-one">PLASTIC</div>
        <div className="ai-box ai-box-two">METAL</div>

        <div className="ai-lines">
          <span />
          <span />
          <span />
        </div>

        <div className="ai-chip">ESP32</div>
      </div>
    )
  }

  if (type === 'energy') {
    return (
      <div className="project-visual visual-energy">
        <div className="energy-transformer">
          <div className="coil coil-one" />
          <div className="coil coil-two" />
          <div className="transformer-core" />
        </div>

        <div className="energy-line line-one" />
        <div className="energy-line line-two" />
        <div className="energy-line line-three" />

        <div className="energy-data">
          <span>T°</span>
          <strong>SCADA</strong>
          <span>V / I / P</span>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-construction">
      <div className="building">
        <div className="building-roof" />
        <div className="building-floor floor-one" />
        <div className="building-floor floor-two" />
        <div className="building-floor floor-three" />
      </div>

      <div className="construction-grid" />

      <div className="construction-tag">
        <span>R+3</span>
        Electrical works
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="site">

      {/* BACKGROUND DECORATION */}
      <div className="background-decoration">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="grid-background" />
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#top" className="brand">
          <span className="brand-mark">KA</span>
          <span className="brand-name">Karouwe Abide</span>
        </a>

        <nav className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={`mailto:${EMAIL}`} className="nav-button">
          Me contacter
          <Icon name="arrow" size={17} />
        </a>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero section-container">
          <div className="hero-content">

            <div className="hero-intro">
              <span className="status-dot" />
              <span>INGÉNIEURE SÛRETÉ DE FONCTIONNEMENT · RAMS</span>
            </div>

            <h1>
              Transformer la complexité
              <br />
              des systèmes en
              <span> décisions de sécurité.</span>
            </h1>

            <p className="hero-description">
              J’analyse les risques, les défaillances et les fonctions de
              sécurité pour contribuer à des systèmes industriels plus sûrs,
              plus fiables et mieux maîtrisés.
            </p>

            <div className="hero-actions">
              <a href="#projets" className="button button-primary">
                Découvrir mon travail
                <Icon name="arrow" size={18} />
              </a>

              <a href={`mailto:${EMAIL}`} className="button button-secondary">
                Échanger avec moi
              </a>
            </div>

            <div className="hero-keywords">
              <span>AMDEC</span>
              <span>FTA</span>
              <span>RAMS</span>
              <span>Safety</span>
              <span>V&V</span>
            </div>
          </div>

          <div className="hero-photo-area">

            <div className="photo-decoration photo-decoration-one" />
            <div className="photo-decoration photo-decoration-two" />

            <div className="photo-card">
              <div className="photo-top-label">
                <span>PROFILE</span>
                <span>01 / 01</span>
              </div>

              <div className="photo-container">
                <img
                  src={photo}
                  alt="Karouwe Abide"
                />
              </div>

              <div className="photo-bottom">
                <div>
                  <strong>Karouwe Abide</strong>
                  <span>RAMS Engineer</span>
                </div>

                <div className="photo-location">
                  <span className="mini-dot" />
                  {LOCATION}
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <div className="floating-icon">
                <Icon name="shield" size={20} />
              </div>
              <div>
                <strong>Safety</strong>
                <span>Functional safety</span>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-number">05+</span>
              <div>
                <strong>Domaines</strong>
                <span>Énergie · Automobile · Ferroviaire · Aéronautique · Industrie</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / VALUE */}
        <section className="value-section">
          <div className="section-container">

            <div className="section-heading">
              <div>
                <span className="eyebrow">CE QUE J’APPORTE</span>
                <h2>
                  Comprendre.
                  <br />
                  Analyser. <span>Sécuriser.</span>
                </h2>
              </div>

              <p>
                Mon parcours combine génie électrique, systèmes industriels
                et sûreté de fonctionnement. Je peux ainsi regarder un système
                à la fois par sa technologie, son fonctionnement et ses risques.
              </p>
            </div>

            <div className="value-grid">

              <article className="value-card">
                <div className="value-number">01</div>
                <div className="value-icon">
                  <Icon name="search" />
                </div>
                <h3>Analyser</h3>
                <p>
                  Décomposer un système complexe, identifier les fonctions,
                  rechercher les modes de défaillance et comprendre les
                  chaînes de causes.
                </p>
                <span className="value-line" />
              </article>

              <article className="value-card value-card-featured">
                <div className="value-number">02</div>
                <div className="value-icon">
                  <Icon name="shield" />
                </div>
                <h3>Sécuriser</h3>
                <p>
                  Passer de l’identification du risque à l’analyse des
                  fonctions de sécurité, leur niveau de performance et leur
                  vérification.
                </p>
                <span className="value-line" />
              </article>

              <article className="value-card">
                <div className="value-number">03</div>
                <div className="value-icon">
                  <Icon name="document" />
                </div>
                <h3>Structurer</h3>
                <p>
                  Transformer les analyses en documents, données et livrables
                  compréhensibles et réellement utilisables par les équipes.
                </p>
                <span className="value-line" />
              </article>

            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="expertise-section section-container">

          <div className="section-heading centered">
            <span className="eyebrow">EXPERTISE</span>
            <h2>
              Une approche <span>RAMS</span>
              <br />
              de bout en bout.
            </h2>
            <p>
              Des méthodes d’analyse jusqu’à la vérification des fonctions
              étudiées, avec une attention particulière portée à la
              compréhension du système.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.number}>

                <div className="expertise-card-top">
                  <span className="expertise-number">{item.number}</span>

                  <div className="expertise-icon">
                    <Icon name={item.icon} />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="expertise-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="card-arrow">
                  <Icon name="arrow" size={18} />
                </div>
              </article>
            ))}
          </div>

          {/* NORMS */}
          <div className="standards-box">
            <div className="standards-intro">
              <span className="eyebrow">RÉFÉRENTIELS</span>
              <h3>Normes rencontrées</h3>
              <p>
                Des référentiels mobilisés dans mon parcours académique et
                professionnel.
              </p>
            </div>

            <div className="standards-list">
              <span>ISO 13849</span>
              <span>ISO 19014</span>
              <span>ISO 12100</span>
              <span>ISO 26262</span>
              <span>EN 50128</span>
              <span>EN 50126</span>
              <span>EN 50129</span>
            </div>
          </div>

        </section>

        {/* PROJECTS */}
        <section id="projets" className="projects-section">

          <div className="section-container">

            <div className="section-heading projects-heading">
              <div>
                <span className="eyebrow">PROJETS & RÉALISATIONS</span>
                <h2>
                  Ce que j’ai fait
                  <br />
                  <span>dans le concret.</span>
                </h2>
              </div>

              <p>
                Derrière chaque compétence, il y a une situation réelle :
                un système à comprendre, un problème à analyser ou un
                résultat à construire.
              </p>
            </div>

            <div className="projects-list">

              {projects.map((project, index) => (
                <article
                  className={`project-card ${
                    index % 2 === 1 ? 'project-card-reverse' : ''
                  }`}
                  key={project.id}
                >

                  <div className="project-image">
                    <ProjectVisual type={project.type} />

                    <span className="project-index">
                      {project.id}
                    </span>
                  </div>

                  <div className="project-content">

                    <div className="project-category">
                      {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <div className="project-company">
                      {project.company}
                      <span>·</span>
                      {project.period}
                    </div>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-link">
                      <span>Explorer la réalisation</span>
                      <Icon name="arrow" size={18} />
                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="tools-section section-container">

          <div className="section-heading">
            <div>
              <span className="eyebrow">OUTILS & TECHNOLOGIES</span>
              <h2>
                Les outils au service
                <br />
                de <span>l’analyse.</span>
              </h2>
            </div>

            <p>
              Je privilégie l’outil en fonction du problème à résoudre :
              analyse, modélisation, automatisation, visualisation ou
              documentation.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <article className="tool-card" key={tool.name}>
                <span className="tool-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="tool-icon">
                  <Icon name="tool" size={20} />
                </div>

                <div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>

                <Icon name="arrow" size={17} />
              </article>
            ))}
          </div>

        </section>

        {/* EXPERIENCE */}
        <section id="parcours" className="experience-section">

          <div className="section-container">

            <div className="section-heading centered">
              <span className="eyebrow">EXPÉRIENCE</span>
              <h2>
                Un parcours construit
                <br />
                <span>sur le terrain.</span>
              </h2>
              <p>
                De l’électricité industrielle à la sûreté de fonctionnement,
                chaque expérience a ajouté une nouvelle façon de comprendre
                les systèmes.
              </p>
            </div>

            <div className="experience-timeline">

              {experiences.map((experience, index) => (
                <article
                  className="experience-item"
                  key={experience.year + experience.company}
                >

                  <div className="experience-marker">
                    <span>{experience.year}</span>
                    <div className="timeline-dot" />
                  </div>

                  <div className="experience-card">

                    <div className="experience-card-header">
                      <div>
                        <span className="experience-role">
                          {experience.role}
                        </span>

                        <h3>{experience.company}</h3>

                        <span className="experience-location">
                          {experience.location}
                        </span>
                      </div>

                      <span className="experience-count">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="experience-description">
                      {experience.text}
                    </p>

                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>
                          <span>
                            <Icon name="check" size={15} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                  </div>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* FORMATION */}
        <section className="education-section">

          <div className="section-container">

            <div className="education-layout">

              <div className="education-intro">
                <span className="eyebrow">FORMATION</span>

                <h2>
                  Une base
                  <br />
                  <span>électrique.</span>
                  <br />
                  Une spécialisation
                  <br />
                  <span>RAMS.</span>
                </h2>

                <p>
                  Mon parcours académique relie génie électrique, automatique,
                  télécommunications et sûreté de fonctionnement des systèmes
                  industriels.
                </p>
              </div>

              <div className="education-list">

                {formations.map((formation) => (
                  <article className="education-card" key={formation.title}>

                    <div className="education-year">
                      {formation.year}
                    </div>

                    <div className="education-icon">
                      <Icon name={formation.icon} />
                    </div>

                    <div className="education-content">
                      <h3>{formation.title}</h3>
                      <p>{formation.place}</p>
                    </div>

                    <Icon name="arrow" size={18} />

                  </article>
                ))}

              </div>

            </div>
          </div>
        </section>

        {/* PERSONAL */}
        <section className="personal-section">

          <div className="section-container">

            <div className="personal-box">

              <div className="personal-heading">
                <span className="eyebrow">AU-DELÀ DE L’INGÉNIERIE</span>

                <h2>
                  Une ingénieure,
                  <br />
                  mais surtout une
                  <span> façon de penser.</span>
                </h2>
              </div>

              <div className="personal-grid">

                <div className="personal-item">
                  <span>01</span>
                  <h3>Comprendre avant d’agir</h3>
                  <p>
                    J’aime aller au fond d’un sujet pour comprendre son
                    fonctionnement plutôt que de simplement appliquer une
                    solution.
                  </p>
                </div>

                <div className="personal-item">
                  <span>02</span>
                  <h3>Construire du concret</h3>
                  <p>
                    Les projets où l’on passe d’une idée à un prototype,
                    une analyse ou un résultat tangible sont ceux qui
                    m’attirent le plus.
                  </p>
                </div>

                <div className="personal-item">
                  <span>03</span>
                  <h3>Voir les connexions</h3>
                  <p>
                    Mon parcours entre électricité/électronique, automatisme et sûreté
                    m’a appris à regarder un problème sous plusieurs angles.
                  </p>
                </div>

                <div className="personal-item">
                  <span>04</span>
                  <h3>Apprendre en faisant</h3>
                  <p>
                    Un nouvel outil ou un nouveau système devient réellement
                    intéressant pour moi lorsqu’il peut être testé, compris
                    et appliqué.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">

          <div className="contact-glow" />

          <div className="section-container">

            <div className="contact-content">

              <span className="eyebrow">CONTACT</span>

              <h2>
                Un système à analyser ?
                <br />
                <span>Un projet à construire ?</span>
              </h2>

              <p>
                Je suis disponible pour échanger autour d’un projet en
                sûreté de fonctionnement, sécurité fonctionnelle, RAMS
                ou ingénierie des systèmes.
              </p>

              <div className="contact-actions">
                <a
                  className="contact-main-button"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                  <Icon name="arrow" size={19} />
                </a>

                <a
                  className="contact-phone"
                  href={`tel:${PHONE_HREF}`}
                >
                  {PHONE}
                </a>
              </div>

              <div className="contact-meta">
                <span>
                  <span className="mini-dot" />
                  Disponible en France
                </span>

                <span>{LOCATION}</span>
              </div>

            </div>

            <div className="contact-graphic">
              <div className="graphic-circle circle-large" />
              <div className="graphic-circle circle-medium" />
              <div className="graphic-circle circle-small" />

              <div className="graphic-center">
                <Icon name="shield" size={42} />
              </div>

              <div className="graphic-node node-one">RAMS</div>
              <div className="graphic-node node-two">SAFETY</div>
              <div className="graphic-node node-three">V&V</div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="section-container footer-inner">

          <div className="footer-brand">
            <span className="brand-mark">KA</span>

            <div>
              <strong>Karouwe Abide</strong>
              <span>Ingénieure Sûreté de Fonctionnement · RAMS</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#expertise">Expertise</a>
            <a href="#projets">Projets</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </div>

          <span className="footer-copy">
            © 2026 Karouwe Abide
          </span>

        </div>

      </footer>

    </div>
  )
}

export default App