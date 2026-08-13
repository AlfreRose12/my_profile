import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './TechStack.css'

const categories = [
  {
    title: 'Desarrollo Móvil',
    icons: 'flutter,androidstudio',
    perline: 2,
    techs: ['Flutter', 'Android Studio'],
  },
  {
    title: 'Frontend',
    icons: 'react,angular,js,ts',
    perline: 4,
    techs: ['React', 'Angular', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Estilos y Diseño',
    icons: 'html,css,bootstrap,figma',
    perline: 4,
    techs: ['HTML5', 'CSS3', 'Bootstrap', 'Figma'],
  },
  {
    title: 'Backend y Ciencia de Datos',
    icons: 'nodejs,express,java,anaconda,postgres,mongodb,firebase',
    perline: 4,
    techs: ['Node.js', 'Express', 'Java', 'Anaconda', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'DevOps y Deploy',
    icons: 'docker,vercel,netlify',
    perline: 3,
    techs: ['Docker', 'Vercel', 'Netlify'],
  },
  {
    title: 'Herramientas y Control de Versiones',
    icons: 'git,github,vscode,eclipse,postman,npm,pnpm,arduino',
    perline: 4,
    techs: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman', 'npm', 'pnpm', 'Arduino'],
  },
]

export default function TechStack() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(categories.length, 0.1)

  return (
    <section id="tecnologias" className="tech-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Tecnologías y Frameworks</h2>
        <p className="section-subtitle">Stack tecnológico</p>

        <div className="tech-grid" ref={gridRef}>
          {categories.map((cat) => (
            <div className="tech-category" key={cat.title}>
              <h3 className="tech-category-title">{cat.title}</h3>
              <div className="tech-icons-wrapper">
                <img
                  src={`https://skillicons.dev/icons?i=${cat.icons}&perline=${cat.perline}`}
                  alt={cat.techs.join(', ')}
                  className="tech-icons-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-note">
          <span className="note-icon">💡</span>
          <p>
            <strong>Nota:</strong> Estas son las tecnologías con las que cuento con conocimiento; algunas las he trabajado de forma individual y otras en conjunto con la IA para optimizar y agilizar los flujos de trabajo.
          </p>
        </div>
      </div>
    </section>
  )
}
