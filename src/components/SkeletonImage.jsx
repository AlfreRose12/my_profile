import { useState } from 'react'
import './SkeletonImage.css'

/*
  SkeletonImage
  Envuelve un <img> externo (skillicons, Cloudinary) con un placeholder tipo
  "skeleton" que se muestra mientras la imagen carga. Al terminar de cargar
  (o si falla), el skeleton se retira y la imagen aparece con un fundido suave.

  - `radius`: mismo redondeo que la imagen (ej. var(--radius-md) en .project-logo).
  - El frame NO usa overflow:hidden para no recortar el hover scale(1.1) de TechStack.
  - El frame toma el tamaño del <img>, que ya lo define su clase CSS → sin CLS.
*/
export default function SkeletonImage({
  src,
  alt,
  className = '',
  frameClassName = '',
  radius = '0px',
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(false)

  // onLoad y onError: en ambos casos retiramos el skeleton (si falla, no queda girando)
  const hideSkeleton = () => setLoaded(true)

  const frameClasses = frameClassName ? `skeleton-frame ${frameClassName}` : 'skeleton-frame'
  const imgClasses = `skeleton-img ${loaded ? 'is-loaded' : 'is-loading'}${className ? ` ${className}` : ''}`

  return (
    <span className={frameClasses} style={{ borderRadius: radius }}>
      <img
        {...imgProps}
        src={src}
        alt={alt}
        className={imgClasses}
        onLoad={hideSkeleton}
        onError={hideSkeleton}
      />
      {!loaded && (
        <span className="skeleton-shimmer" style={{ borderRadius: radius }} aria-hidden="true" />
      )}
    </span>
  )
}
