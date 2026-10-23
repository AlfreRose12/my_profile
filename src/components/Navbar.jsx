import { useEffect, useRef, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'
import './Navbar.css'

/*
  Menú con jerarquía: los ítems con `children` se despliegan como submenú
  (escritorio: hover/clic; móvil: acordeón). El scrollspy resalta el ítem
  o el padre de la sección visible.
*/
const links = [
  {
    label: 'Sobre mí',
    id: 'sobre-mi',
    children: [
      { href: '#filosofia', label: 'Filosofía' },
      { href: '#formacion', label: 'Educación y Certificaciones' },
    ],
  },
  { href: '#servicios', label: 'Servicios' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#entorno', label: 'Entorno' },
  {
    label: 'Proyectos',
    id: 'proyectos-menu',
    children: [
      { href: '#proyectos', label: 'Colaborativos' },
      { href: '#independientes', label: 'Independientes' },
    ],
  },
  { href: '#contacto', label: 'Contacto' },
]

// Secciones observadas por el scrollspy (incluye hero y contacto)
const sectionIds = [
  'hero',
  'filosofia',
  'formacion',
  'servicios',
  'tecnologias',
  'entorno',
  'proyectos',
  'independientes',
  'contacto',
]

// El hover solo aplica en dispositivos con puntero real (evita dobles toques en móvil)
const isHoverDevice = () => window.matchMedia('(hover: hover)').matches

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // label del submenú desplegado
  const navRef = useRef(null)
  const activeId = useActiveSection(sectionIds)

  // Sombra del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquea el scroll del body con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Al cerrar el menú móvil, cierra también el submenú
  useEffect(() => {
    if (!menuOpen) setOpenMenu(null)
  }, [menuOpen])

  // Cierra el submenú al hacer clic fuera o presionar Escape
  useEffect(() => {
    if (!openMenu) return undefined

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openMenu])

  const closeAll = () => {
    setMenuOpen(false)
    setOpenMenu(null)
  }

  const isGroupActive = (link) =>
    link.children ? link.children.some((child) => child.href === activeId) : false

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">ARD</a>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className={`navbar-item has-submenu${openMenu === link.label ? ' is-open' : ''}`}
                onMouseEnter={() => { if (isHoverDevice()) setOpenMenu(link.label) }}
                onMouseLeave={() => { if (isHoverDevice()) setOpenMenu(null) }}
              >
                <button
                  type="button"
                  className={`navbar-link-toggle${isGroupActive(link) ? ' active' : ''}`}
                  aria-expanded={openMenu === link.label}
                  aria-controls={`submenu-${link.id}`}
                  aria-current={isGroupActive(link) ? 'location' : undefined}
                  onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}
                >
                  {link.label}
                  <svg className="navbar-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <ul id={`submenu-${link.id}`} className="navbar-submenu">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        className={activeId === child.href ? 'active' : ''}
                        onClick={closeAll}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href} className="navbar-item">
                <a
                  href={link.href}
                  className={activeId === link.href ? 'active' : ''}
                  aria-current={activeId === link.href ? 'location' : undefined}
                  onClick={closeAll}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  )
}
