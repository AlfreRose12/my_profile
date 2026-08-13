import './Footer.css'

const navLinks = [
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#tecnologias', label: 'Tech Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/AlfreRose12',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:alfrerose.dev@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/alfrerose.dev',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">ARD</a>
            <p className="footer-tagline">Ingeniero en Desarrollo y Gestión de Software</p>
          </div>

          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <span className="footer-heading">Navegación</span>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-social">
            <span className="footer-heading">Conectemos</span>
            <div className="footer-social-icons">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.name !== 'Email' ? '_blank' : undefined}
                  rel={s.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="footer-social-icon"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Alfredo Rosas Espinosa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}