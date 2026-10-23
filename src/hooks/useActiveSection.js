import { useEffect, useState } from 'react'

/*
  useActiveSection
  Devuelve el href (#seccion) de la sección que ocupa la banda del 35%–45%
  de la pantalla. Devuelve '' mientras el Hero está visible.

  `ids` debe ser un array estable (definido a nivel de módulo) para no
  reiniciar el observer en cada render.
*/
export default function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setActive(entry.target.id === 'hero' ? '' : `#${entry.target.id}`)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
