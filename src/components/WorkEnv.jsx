import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './WorkEnv.css'

export default function WorkEnv() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(2, 0.15)

  return (
    <section id="entorno" className="workenv-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Mi Entorno de Trabajo</h2>
        <p className="section-subtitle">Infraestructura y configuración</p>

        <div className="workenv-grid" ref={gridRef}>
          <div className="workenv-card">
            <div className="workenv-card-header">
              <img
                src="https://skillicons.dev/icons?i=arch,windows"
                alt="Arch Linux, Windows"
                className="workenv-icons"
                loading="lazy"
              />
            </div>
            <h3>Entorno Local (Dual-Boot)</h3>
            <ul className="workenv-details">
              <li>
                <span className="detail-label">Distribución Principal:</span>
                {' '}CachyOS, una distribución basada en Arch Linux.
              </li>
              <li>
                <span className="detail-label">Distribución Secundaria:</span>
                {' '}Windows 11, instalado para uso dual-boot.
              </li>
              <li>
                <span className="detail-label">Editor Principal:</span> Visual Studio Code
              </li>
            </ul>
          </div>

          <div className="workenv-card">
            <div className="workenv-card-header">
              <img
                src="https://skillicons.dev/icons?i=debian"
                alt="Debian"
                className="workenv-icons workenv-icons-sm"
                loading="lazy"
              />
            </div>
            <h3>Infraestructura y Nube</h3>
            <ul className="workenv-details">
              <li>
                <span className="detail-label">Servidores Remotos:</span>
                {' '}Despliegue, administración y configuración de servicios en entornos productivos (VPS) con Debian.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
