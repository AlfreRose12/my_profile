import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import logoSpeira from '../assets/logo_speira.png'
import './Projects.css'

const projects = [
  {
    name: 'RetiScan',
    url: 'https://github.com/AlfreRose12/RetiScan',
    logo: 'https://res.cloudinary.com/vz2l9gh4/image/upload/w_100,h_100,c_fit,f_auto/v1785982147/OJO_RETISCAN_esb0ky.png',
    description: 'Sistema multiplataforma para la detección temprana de retinopatía diabética mediante Inteligencia Artificial, con frontend en React/Flutter y backend dockerizado.',
    tags: ['React', 'Flutter', 'Docker', 'AI'],
    status: 'En desarrollo',
    statusType: 'in-progress',
  },
  {
    name: 'Speira',
    url: 'https://github.com/AlfreRose12/Speira',
    logo: logoSpeira,
    description: 'Aplicación móvil para el monitoreo de espirulina, complementada con tecnología IoT. Proyecto de estadía de TSU desarrollado en colaboración con compañeros de carrera.',
    tags: ['Ionic', 'IoT', 'Mobile'],
    status: 'Finalizado',
    statusType: 'completed',
  },
  // {
  //   name: 'Proyecto Cliente 1',
  //   url: 'https://github.com/AlfreRose12',
  //   logo: 'https://via.placeholder.com/100?text=C1',
  //   description: 'Descripción del trabajo realizado para el cliente...',
  //   tags: ['React', 'Node.js', 'Tailwind'],
  //   status: 'En Desarrollo',
  //   statusType: 'in-progress',
  // },
  // {
  //   name: 'Proyecto Cliente 2',
  //   url: 'https://github.com/AlfreRose12',
  //   logo: 'https://via.placeholder.com/100?text=C2',
  //   description: 'Descripción del trabajo realizado para el cliente...',
  //   tags: ['Angular', 'PostgreSQL'],
  //   status: 'En Desarrollo',
  //   statusType: 'in-progress',
  // },
  // {
  //   name: 'Proyecto Cliente 3',
  //   url: 'https://github.com/AlfreRose12',
  //   logo: 'https://via.placeholder.com/100?text=C3',
  //   description: 'Descripción del trabajo realizado para el cliente...',
  //   tags: ['Flutter', 'Firebase'],
  //   status: 'En Desarrollo',
  //   statusType: 'in-progress',
  // },
]

export default function Projects() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(projects.length, 0.15)

  return (
    <section id="proyectos" className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">Trabajos recientes</p>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card-top">
                <img src={project.logo} alt={`Logo de ${project.name}`} className="project-logo" loading="lazy" />
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="project-icon">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    <span className="project-link-text">Ver en GitHub</span>
                  </div>
                </div>
                <span className={`project-status ${project.statusType}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}