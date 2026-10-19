import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Philosophy.css'

export default function Philosophy() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(2, 0.15)

  return (
    <section id="filosofia" className="philosophy-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Mi Filosofía de Desarrollo</h2>
        <p className="section-subtitle">Claridad, método y resultados</p>

        <p className="philosophy-intro">
          Creo firmemente que el futuro del software no radica en picar código de forma mecánica, sino en saber resolver problemas. Por eso mi forma de trabajar empieza por entender bien el problema antes de escribir una sola línea de código: procesos claros, comunicación directa y decisiones explicables.
        </p>

        <div className="philosophy-cards" ref={gridRef}>
          <div className="philosophy-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/>
                <circle cx="12" cy="15" r="2"/>
              </svg>
            </div>
            <h3>Mi Rol</h3>
            <p>
              Diseño la arquitectura del proyecto, estructuro la lógica de negocio, resuelvo los bloqueos lógicos y dicto la dirección del software.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <path d="M9 14l2 2 4-4"/>
              </svg>
            </div>
            <h3>Mi Proceso</h3>
            <p>
              Entiendo el requisito, diseño la solución, construyo y pruebo de forma iterativa, y termino entregando con acompañamiento y soporte cuando lo necesites.
            </p>
          </div>
        </div>

        <div className="philosophy-note">
          <p>
            <strong>Enfoque práctico:</strong> me enfoco en resultados medibles: diagnóstico rápido de errores, entregas iterativas y adaptación ágil a cada proyecto.
          </p>
        </div>
      </div>
    </section>
  )
}
