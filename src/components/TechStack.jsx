import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import SkeletonImage from './SkeletonImage'
import './TechStack.css'

const categories = [
  {
    title: 'Aplicaciones Móviles',
    techs: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Android Studio', icon: 'androidstudio' },
    ],
  },
  {
    title: 'Sitios Web',
    techs: [
      { name: 'React', icon: 'react' },
      { name: 'Angular', icon: 'angular' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
    ],
  },
  {
    title: 'Diseño y Estilos',
    techs: [
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    title: 'Servidores y Bases de Datos',
    techs: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Java', icon: 'java' },
      { name: 'Anaconda', icon: 'anaconda' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    title: 'Servicios en la Nube',
    techs: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
    ],
  },
  {
    title: 'Herramientas',
    techs: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Eclipse', icon: 'eclipse' },
      { name: 'Postman', icon: 'postman' },
      { name: 'npm', icon: 'npm' },
      { name: 'pnpm', icon: 'pnpm' },
      { name: 'Arduino', icon: 'arduino' },
    ],
  },
]

export default function TechStack() {
  const sectionRef = useScrollAnimation()
  const gridRef = useStaggerAnimation(categories.length, 0.1)

  return (
    <section id="tecnologias" className="tech-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Tecnologías que domino</h2>
        <p className="section-subtitle">Las herramientas con las que trabajo</p>

        <div className="tech-grid" ref={gridRef}>
          {categories.map((cat) => (
            <div className="tech-category" key={cat.title}>
              <h3 className="tech-category-title">{cat.title}</h3>
              <div className="tech-list">
                {cat.techs.map((tech) => (
                  <div className="tech-item" key={tech.name}>
                    <SkeletonImage
                      src={`https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.name}
                      className="tech-icon-img"
                      loading="lazy"
                    />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-note">
          <p>
            <strong>Nota:</strong> Estas son las tecnologías con las que trabajo habitualmente; algunas las he utilizado en proyectos personales y otras en proyectos académicos o en equipo.
          </p>
        </div>
      </div>
    </section>
  )
}
