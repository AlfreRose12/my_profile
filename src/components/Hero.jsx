import logo from '../assets/icono_personal.png'
import ParticleBackground from './ParticleBackground'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          <img src={logo} alt="Alfredo Rosas" className="hero-logo" />
        </div>

        <h1 className="hero-name">
          Hola, soy <span className="hero-name-highlight">Alfre Rose</span>
          <span className="hero-cursor">|</span>
        </h1>

        <p className="hero-subtitle">
          Desarrollo Web & Soluciones Digitales
        </p>

        <p className="hero-tagline">
          Transformo ideas en páginas web y herramientas modernas impulsadas por <span className="highlight">IA</span> para hacer crecer tu negocio.
        </p>

        {/* Botones de Llamada a la Acción (CTA) */}
        <div className="hero-cta-container">
          <a href="#servicios" className="hero-btn primary-btn">
            Ver Servicios
          </a>
          <a href="#contacto" className="hero-btn secondary-btn">
            Cotizar Proyecto
          </a>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <a href="#filosofia" className="hero-scroll-indicator" aria-label="Desplazarse hacia abajo">
        <span className="scroll-arrow"></span>
      </a>

      <div className="hero-gradient" />
    </section>
  )
}