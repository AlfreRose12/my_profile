import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './Philosophy.css'

export default function Philosophy() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(2, 0.15)

  return (
    <section id="filosofia" className="philosophy-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Mi Filosofía de Desarrollo</h2>
        <p className="section-subtitle">Transparencia e Inteligencia Artificial</p>

        <p className="philosophy-intro">
          Creo firmemente que el futuro del software no radica en picar código de forma mecánica, sino en saber resolver problemas. Por ello, mi flujo de trabajo está optimizado mediante el uso de Inteligencia Artificial.
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
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </div>
            <h3>El Rol de la IA</h3>
            <p>
              Utilizo modelos de lenguaje avanzados como copilotos para la escritura, la refactorización y la aceleración del código fuente.
            </p>
          </div>
        </div>

        <div className="philosophy-note">
          <span className="note-icon">💡</span>
          <p>
            Esta mentalidad de <strong>Desarrollo Asistido por IA</strong> me permite ser altamente eficiente, diagnosticar errores en tiempo record y adaptarme a nuevas tecnologias con agilidad.
          </p>
        </div>
      </div>
    </section>
  )
}
