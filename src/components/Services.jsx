import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const services = [
  {
    title: 'Sitios Web y Páginas de Venta',
    description: 'Páginas modernas y ultra rápidas diseñadas para destacar tu negocio, transmitir confianza y convertir visitantes en clientes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/>
        <line x1="2" x2="22" y1="9" y2="9"/>
        <path d="M6 18v3m4-3v3"/>
      </svg>
    ),
  },
  {
    title: 'Aplicaciones Móviles a la Medida',
    description: 'Lleva tu negocio al teléfono de tus clientes con aplicaciones intuitivas y listas para Android y iPhone.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: 'Captura de Clientes y Formularios',
    description: 'Sistemas automáticos para recibir cotizaciones, mensajes o solicitudes de citas directo en tu correo o base de datos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
        <path d="M3 12a9 3 0 0 0 18 0"/>
      </svg>
    ),
  },
  {
    title: 'Hospedaje Seguro y Mantenimiento',
    description: 'Nos encargamos de que tu página esté siempre activa 24/7, protegida contra ataques y con tu propio dominio.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
  },
  {
    title: 'Soluciones Inteligentes con IA',
    description: 'Herramientas modernas para automatizar respuestas, procesar datos de tu negocio y mejorar la atención a tus clientes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
  },
  {
    title: 'Entrega Rápida y Soporte Continuo',
    description: 'Desarrollo acelerado para poner en marcha tu proyecto en tiempo récord, con acompañamiento técnico cuando lo necesites.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.5 8.5-5-5L2 17"/>
        <path d="M16 7h6v6"/>
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