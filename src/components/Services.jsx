import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const services = [
  {
    title: 'Aplicaciones Móviles',
    description: 'Aplicaciones intuitivas para Android e iOS que llevan tu negocio al bolsillo de tus clientes, desde la idea hasta su publicación.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: 'Páginas Web Profesionales',
    description: 'Sitios modernos, rápidos y responsivos, diseñados para destacar tu negocio, generar confianza y convertir visitantes en clientes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/>
        <line x1="2" x2="22" y1="9" y2="9"/>
        <path d="M6 18v3m4-3v3"/>
      </svg>
    ),
  },
  {
    title: 'Invitaciones Digitales',
    description: 'Invitaciones digitales con animaciones, música de fondo, confirmación de asistencia y gestión de invitados, con temática personalizada y lista para compartir con tus invitados.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    title: 'Sistema de Agendamiento',
    description: 'Reservas y citas en línea con confirmaciones automáticas, para que tus clientes agenden contigo sin llamadas ni mensajes perdidos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Integración con WhatsApp',
    description: 'Botones y enlaces de contacto directo en tu sitio para que tus clientes te escriban por WhatsApp al instante, sin copiar números ni buscar datos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
]

export default function Services() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(services.length, 0.1)

  return (
    <section id="servicios" className="services-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Servicios</h2>
        <p className="section-subtitle">Soluciones digitales para impulsar tu negocio</p>

        <div className="services-grid" ref={gridRef}>
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}