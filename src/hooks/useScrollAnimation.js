import { useEffect, useRef } from 'react'

function clearTransitionDelay(el) {
  if (!el.style.transitionDelay) return
  el.style.transitionDelay = ''
}

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

export function useStaggerAnimation(count, baseDelay = 0.05) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.children
          const clearDelays = []
          for (let i = 0; i < children.length; i++) {
            if (prefersReduced) {
              children[i].classList.add('visible')
            } else {
              children[i].style.transitionDelay = `${i * baseDelay}s`
              children[i].classList.add('visible')
              clearDelays.push(children[i])
            }
          }
          observer.unobserve(container)

          if (clearDelays.length > 0) {
            clearDelays[clearDelays.length - 1].addEventListener(
              'transitionend',
              () => {
                clearDelays.forEach(clearTransitionDelay)
              },
              { once: true }
            )
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [count, baseDelay])

  return containerRef
}
