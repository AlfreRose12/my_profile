import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SkeletonImage from './SkeletonImage'
// Reutiliza las clases de carrusel de Projects.css y solo sobreescribe el fondo
import './Projects.css'
import './IndependentWork.css'

/*
  TRABAJOS INDEPENDIENTES
  Estructura idéntica a Projects.jsx: solo necesitas editar el array `projects`
  de abajo (nombre, enlace, logo, descripción, etiquetas y estado).
  ⚠️ Los dos elementos de ejemplo son marcadores: reemplázalos antes de publicar.
*/


const projects = [
  {
    name: 'Invitación Digital para Fiesta Infantil',
    url: 'https://github.com/AlfreRose12/invitacion_mateo',
    demoUrl: 'https://invitacionmateo.alfrerosedev.com',
    logo: '/logo_invitacion.svg',
    description: 'Invitación digital interactiva para una fiesta infantil con temática de Pororo el pingüino, contando con animaciones, música de fondo y confirmación de asistencia.',
    tags: ['React', 'Supabase'],
    status: 'Finalizado',
    statusType: 'completed',
  },
  {
    name: 'Invitación Digital para Festejo Familiar',
    url: 'https://github.com/AlfreRose12/invitacion_freddy',
    demoUrl: 'https://invitacionfreddy.alfrerosedev.com',
    logo: '/logo_invitacion.svg',
    description: 'Invitación digital interactiva para un festejo familiar con temática de Mazinger Z, contando con animaciones, música de fondo y confirmación de asistencia.',
    tags: ['React', 'Supabase'],
    status: 'Finalizado',
    statusType: 'completed',
  },
]

export default function IndependentWork() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useScrollAnimation()

  const next = () => setCurrent((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  const goTo = (index) => setCurrent(index)

  const getSlideClass = (index) => {
    if (index === current) return 'project-card carousel-card active'
    return 'project-card carousel-card hidden'
  }

  return (
    <section id="independientes" className="projects-section independent-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Trabajos Independientes</h2>
        <p className="section-subtitle">Entregas rápidas a medida</p>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(calc(50% - ${current} * (var(--carousel-card-w) + var(--carousel-gap)) - var(--carousel-card-w) / 2))`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className={getSlideClass(index)}
                >
                  <div className="project-card-top">
                    <SkeletonImage
                      src={project.logo}
                      alt={`Logo de ${project.name}`}
                      className="project-logo"
                      frameClassName="project-logo-frame"
                      radius="var(--radius-md)"
                      loading="lazy"
                    />
                    <div className="project-info">
                      <h3 className="project-name">{project.name}</h3>
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

                  <div className="project-actions">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn primary"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <path d="M15 3h6v6"/>
                          <path d="M10 14 21 3"/>
                        </svg>
                        Demo en Vivo
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn ghost"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/>
                          <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                        Ver en GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Siguiente">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
