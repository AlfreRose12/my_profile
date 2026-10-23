import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Education.css'

/*
  EDUCACIÓN Y CERTIFICACIONES
  Edita los arrays con tus datos reales:
  - `education`: título, institución, periodo y estado
    ('Titulado' | 'Egresado' | 'En curso').
  - `certifications`: nombre, emisor, año y `url` de la credencial
    (Credly o diploma). Si `url` está vacío, no se muestra el enlace.
*/
const education = [
  {
    title: 'Ingeniería en Desarrollo y Gestión de Software',
    institution: 'Universidad Tecnológica del Centro de Veracruz',
    period: '2023 — 2026',
    status: 'En curso',
  },
  {
    title: 'TSU en Desarrollo de Software Multiplataforma',
    institution: 'Universidad Tecnológica del Centro de Veracruz',
    period: '2021 — 2023',
    status: 'Egresado',
  },
]

const certifications = [
  {
    name: 'Nombre de la certificación',
    issuer: 'Emisor',
    year: '2025',
    url: 'https://www.credly.com/badges/ID',
  },
  {
    name: 'Nombre de la certificación',
    issuer: 'Emisor',
    year: '2024',
    url: '',
  },
]

const capIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
)

const awardIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="m15.5 12.9 1.5 9.1-5-3-5 3 1.5-9.1" />
  </svg>
)

// 'En curso' → índigo · 'Titulado' → verde · el resto ('Egresado', 'Título en trámite') → gris neutro
const statusClass = (status) => {
  if (status === 'En curso') return 'in-progress'
  if (status === 'Titulado') return 'completed'
  return 'neutral'
}

export default function Education() {
  const sectionRef = useScrollAnimation()
  const educationRef = useStaggerAnimation(education.length, 0.1)
  const certificationsRef = useStaggerAnimation(certifications.length, 0.1)

  return (
    <section id="formacion" className="education-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Educación y Certificaciones</h2>
        <p className="section-subtitle">Formación académica y credenciales que respaldan mi trabajo</p>

        <div className="education-grid">
          <div className="education-group">
            <h3 className="education-group-title">Formación académica</h3>
            <div className="education-list" ref={educationRef}>
              {education.map((item) => (
                <article className="education-card" key={item.title}>
                  <span className="education-icon">{capIcon}</span>
                  <div className="education-body">
                    <div className="education-head">
                      <h4 className="education-title">{item.title}</h4>
                      <span className={`education-status ${statusClass(item.status)}`}>{item.status}</span>
                    </div>
                    <p className="education-meta">{item.institution}</p>
                    <p className="education-period">{item.period}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="education-group">
            <h3 className="education-group-title">Certificaciones</h3>
            <div className="education-list" ref={certificationsRef}>
              {certifications.map((cert) => (
                <article className="education-card" key={`${cert.name}-${cert.year}`}>
                  <span className="education-icon">{awardIcon}</span>
                  <div className="education-body">
                    <div className="education-head">
                      <h4 className="education-title">{cert.name}</h4>
                      <span className="education-period">{cert.year}</span>
                    </div>
                    <p className="education-meta">{cert.issuer}</p>
                    {cert.url && (
                      <a
                        className="education-link"
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver credencial
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
