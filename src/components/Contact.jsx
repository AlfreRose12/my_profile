import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Contact.css'

const googleFormUrl = 'https://forms.gle/9BVisMe6CuYS1cFUA'

const contactMethods = [
  {
    name: 'Formulario de Cotización',
    url: googleFormUrl,
    label: 'Platícame sobre tu proyecto',
    description: 'Llena un breve formulario en 1 minuto para entender tu idea y preparar tu propuesta visual.',
    highlight: 'Recomendado',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    cta: 'Llenar formulario',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alfrerose.dev',
    label: '@alfrerose.dev',
    description: 'Escríbeme por mensaje directo si tienes dudas puntuales o prefieres platicar directo.',
    highlight: 'Respuesta rápida',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
    cta: 'Enviar mensaje',
  },
]

export default function Contact() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(contactMethods.length, 0.15)

  return (
    <section id="contacto" className="contact-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">¿Listo para iniciar tu proyecto?</h2>
        <p className="section-subtitle">Cuéntame tu idea y te preparo una propuesta a la medida</p>

        <div className="contact-grid" ref={gridRef}>
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-highlight">{method.highlight}</span>
              <div className="contact-icon">{method.icon}</div>
              <h3 className="contact-name">{method.name}</h3>
              <p className="contact-description">{method.description}</p>
              <span className="contact-label">{method.label}</span>
              <span className="contact-cta">
                {method.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}