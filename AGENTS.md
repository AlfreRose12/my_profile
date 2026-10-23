# AGENTS.md

Guía para agentes de IA (y personas) que vayan a trabajar en este repositorio.
Última verificación: 2026-10-18 (lint y build en verde).

---

## 1. Qué es este proyecto

Portafolio personal de **Alfredo Rosas Espinosa** (`@alfrerose.dev`), Ingeniero en Desarrollo y
Gestión de Software. Es una **SPA estática de una sola página**: sin router, sin backend, sin base
de datos. Todo el contenido vive en secciones ancladas por hash (`#servicios`, `#proyectos`...) que
se navegan con scroll suave.

- **Idioma:** todo el contenido visible, los comentarios del código y la documentación están en
  **español**. Mantén ese idioma en textos, docs y mensajes de commit.
- **Repo:** `https://github.com/AlfreRose12/my_profile` — rama única `main`.
- **Producción:** `https://alfrerosedev.com/` (dominio propio; el deploy vive en Vercel). La marca
  declarada en el README es `alfrerose.dev` (ver §7 sobre dominios).

---

## 2. Stack y comandos

| Área | Elección |
| --- | --- |
| UI | React 19 (componentes de función + hooks, JSX) |
| Bundler | Vite 8 + `@vitejs/plugin-react` |
| Estilos | CSS plano, **un `.css` por componente** (sin Tailwind, sin CSS-in-JS, sin preprocesador) |
| Linter | `oxlint` con plugin `react` (config en `.oxlintrc.json`) |
| Paquetes | **pnpm** (lockfile v9). No uses npm ni yarn |
| TypeScript | No hay. `@types/react` solo sirve para IntelliSense en el editor |
| Router / estado global | No hay ni hace falta. **No añadas** react-router, Redux, etc. |
| Tests / CI / formatter | **No existen.** No inventes scripts de test ni configs de Prettier salvo que se pida |
| Motor | `node`: `^20.19.0 \|\| >=22.12.0` |

### Comandos

```bash
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo (Vite, puerto 5173)
pnpm lint      # oxlint
pnpm build     # build de producción en dist/
pnpm preview   # sirve dist/ en local
```

> **Nota de entorno:** en esta máquina los shims de `node_modules/.bin/*` quedan sin bit de
> ejecución (el proyecto vive en un disco `fuseblk`/NTFS), por lo que `pnpm lint`/`pnpm build`
> fallan con *"Permiso denegado"* (exit 126). Alternativa que funciona:
> `node node_modules/vite/bin/vite.js build` y `node node_modules/oxlint/bin/oxlint`.

**Estado verificado:** `oxlint` → 0 avisos / 0 errores · `vite build` → OK (~450 ms, ~215 kB JS,
25 kB CSS, 41 módulos).

---

## 3. Estructura del repositorio

```
index.html              # único HTML: metadatos SEO/OG/Twitter + mount #root
vercel.json             # build de Vercel + cabeceras de seguridad (CSP) ← ver §6
vite.config.js          # config por defecto (solo plugin react)
.oxlintrc.json          # reglas: react/rules-of-hooks = error
public/                 # se copia tal cual a dist/ (sin hash)
  banner_personal.jpg   # imagen OG 1200x630
  icono_personal.ico    # favicon
  robots.txt            # SEO (domenio hardcodeado)
  sitemap.xml           # SEO (dominio hardcodeado)
src/
  main.jsx              # createRoot + StrictMode
  App.jsx               # ⭐ composición/orden de todas las secciones
  App.css               # .section-container / .section-title / .section-subtitle
  index.css             # ⭐ tokens globales (:root), reset, scrollbar, tipografía
  hooks/
    useScrollAnimation.js  # useScrollAnimation() y useStaggerAnimation()
  assets/               # imágenes importadas desde JS (Vite las hashea)
  components/           # un componente + su CSS con el mismo nombre
    Navbar, Hero, ParticleBackground, Philosophy, Services, TechStack,
    WorkEnv, Projects, IndependentWork, Contact, Footer, BackToTop
    # IndependentWork reutiliza Projects.css (carrusel) + su propio
    # IndependentWork.css solo para cambiar el fondo de la sección
dist/                   # build local (ignorado por git — no commitear)
README.md               # doc pública del proyecto
```

**Orden visual de secciones** (definido en `src/App.jsx`):

`Navbar` → `main` [`Hero`, `Philosophy`, `Services`, `TechStack`, `WorkEnv`, `Projects`,
`IndependentWork`, `Contact`] → `Footer` → `BackToTop`.

La navegación es por anclas: `Navbar.jsx` y `Footer.jsx` contienen las listas de enlaces
(`#filosofia`, `#servicios`, `#tecnologias`, `#entorno`, `#proyectos`, `#independientes`,
`#contacto`).
`src/index.css` aplica `section[id] { scroll-margin-top: 72px }` para compensar el navbar fijo.

---

## 4. Convenciones de código

### Componentes

- Un componente por archivo en `src/components/`, en PascalCase, **con su `.css` homónimo**
  importado desde el propio componente (`import './Hero.css'`).
- `export default function Nombre()` (un único export por archivo; oxlint tiene
  `react/only-export-components` en warn).
- **El contenido está hardcodeado** como `const`/arrays al inicio de cada archivo:
  `services` (Services.jsx), `projects` (Projects.jsx **e** IndependentWork.jsx),
  `categories` (TechStack.jsx), `contactMethods` (Contact.jsx), `links` (Navbar.jsx),
  `navLinks`/`socials` (Footer.jsx).
  Para cambiar textos o agregar proyectos/servicios, **edita esos arrays**; no crees JSON, CMS ni
  archivos de datos aparte.
- **Cards de proyectos con acciones condicionales:** cada elemento de `projects` acepta `url`
  (repo de GitHub) y `demoUrl` (deploy estático/producción). En la fila `.project-actions` solo
  se renderiza el botón cuyo campo tenga valor (string vacío = botón oculto). Por eso el card
  es un `<div>` y no un `<a>` (no se puede anidar `<a>`); estilos `.project-btn` en `Projects.css`
  (heredados por IndependentWork). `demoUrl` está vacío en los 3 proyectos de equipo: sin
  despliegues estáticos aún.
- **Iconos:** SVG *inline* con trazo Feather (`stroke="currentColor"`, `strokeWidth` 1.5 o 2).
  No se usan librerías de iconos → no instales `react-icons` ni similares.
- **Imágenes externas permitidas:** `https://skillicons.dev` (iconos de tecnologías/entorno) y
  `https://res.cloudinary.com` (logos de proyectos). Ambos dominios están en la CSP (§6).
- Imágenes locales: se importan desde JS (`import logo from '../assets/icono_personal.png'`).

### Estilos

- **Tokens globales en `src/index.css` (`:root`)**: paleta (`--color-primary: #ADFF2F` verde lima,
  fondo `#0F172A` / `#020617`, tarjetas glass con `--color-bg-card` + `backdrop-filter`),
  tipografía (`--font-sans` Inter, `--font-mono` JetBrains Mono), radios, sombras, transiciones,
  `--section-gap: 100px`, `--container-max: 900px`. **Usa variables, nunca colores hex sueltos.**
- Layout estándar de sección: `.section-container` (max 1200px) + `.section-title` +
  `.section-subtitle`, definidos en `src/App.css`.
- Fondos alternos: secciones sobre `--color-bg-darker` (Philosophy, TechStack, Projects) sobre el
  `--color-bg` base; tarjetas `background: var(--color-bg-card)` + borde
  `1px solid var(--color-glass-border)` + `border-radius: var(--radius-lg)`.
- Clases planas con estilo `seccion-elemento` (no hay BEM ni CSS Modules).
- **Breakpoints:** `768px` (todas las secciones), `480px` (casi todas), `420px` (solo Hero).

### Animaciones de scroll — ⚠️ parte crítica

Hay dos hooks en `src/hooks/useScrollAnimation.js` que añaden la clase `.visible` cuando el
elemento entra en pantalla con `IntersectionObserver`:

- `const ref = useScrollAnimation()` → se asigna al `<section>` (`ref={sectionRef}`).
- `const ref = useStaggerAnimation(count, delay)` → se asigna al contador de tarjetas; añade
  `transitionDelay` escalonado a cada hijo y lo limpia al terminar la última transición.

**Contrato con el CSS:** el componente debe declarar el estado inicial
(`opacity: 0; transform: translateY(30px); transition: ...`) y el estado final `.visible`
(`opacity: 1; transform: translateY(0)`). Ambos hooks respetan `prefers-reduced-motion`
añadiendo `.visible` de inmediato.

Gotchas conocidas:

1. **Si una sección usa `ref={sectionRef}` pero su CSS no define `.visible`, queda invisible**
   (opacity 0) para el usuario. Comprueba siempre el par de reglas en el `.css` de la sección.
2. No existe **ningún** `@media (prefers-reduced-motion)` en el CSS, pese al comentario que dice
   lo contrario al final de `src/index.css`. El respeto a reduced-motion es solo vía JS.
3. `ParticleBackground.jsx` (canvas de 35 partículas enlazadas, color `rgba(168,196,74,...)`):
   su rama de `prefersReduced` es un **no-op** (ambas ramas llaman `draw()`), así que la
   animación corre siempre. Si tocas ese archivo, no asumas que el reduced-motion funciona.
4. Los listeners de scroll (`Navbar`, `BackToTop`) usan `{ passive: true }` y limpian en el
   `return` del `useEffect`; conserva ese patrón.

### Accesibilidad y rendimiento

- `aria-label` en todo botón puramente iconográfico (flechas del carrusel, hamburguesa,
  BackToTop) y en `<nav aria-label="...">`.
- Enlaces externos: `target="_blank" rel="noopener noreferrer"`.
- `<html lang="es">`; `loading="lazy"` en imágenes externas.
- Metas de viewport y theme-color en `index.html`.

---

## 5. Cómo agregar una nueva sección (checklist)

1. Crear `src/components/Seccion.jsx` + `src/components/Seccion.css`.
2. Usar el patrón de sección: `<section id="miancla" className="seccion-section" ref={sectionRef}>`
   con `.section-container`, `h2.section-title` y `p.section-subtitle`.
3. Si se quiere animación: usar `useScrollAnimation`/`useStaggerAnimation` **y** escribir en el
   CSS el estado inicial + `.visible` (ver §4).
4. Registrar el componente en `src/App.jsx` en la posición visual deseada.
5. Agregar el enlace en `Navbar.jsx` (`links`) y/o `Footer.jsx` (`navLinks`).
   ⚠️ Hoy están **desfasados a propósito**: el Navbar no incluye `#contacto` y el Footer no
   incluye `#entorno`. Si modificas uno, revisa el otro para que la navegación siga coherente.
6. Si la sección muestra imágenes de un dominio nuevo → añadirlo al `img-src` de `vercel.json`.
7. Validar: lint + build + revisión visual en 375 px, 768 px y escritorio.

---

## 6. Seguridad: cabeceras y CSP (`vercel.json`)

`vercel.json` define el build (`pnpm build` / `pnpm install` / salida `dist`) y cabeceras
globales: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, HSTS preload,
`Referrer-Policy`, `Permissions-Policy` y esta **Content-Security-Policy**:

```
default-src 'self';
script-src 'self';                      ← nada de scripts inline ni CDN de JS
img-src 'self' data: https://skillicons.dev https://res.cloudinary.com;
style-src 'self' 'unsafe-inline';       ← permite el style inline dinámico del carrusel
connect-src 'self';                     ← sin llamadas a APIs externas desde el front
frame-ancestors 'none'; base-uri 'self'
```

Implicaciones que debes respetar:

- **No** introducir scripts inline, Google Analytics, tags, ni librerías desde CDN (se romperían).
- **No** hacer `fetch()` a APIs de terceros (`connect-src 'self'`). El formulario de cotización es
  un enlace simple a Google Forms (`https://forms.gle/...` en `Contact.jsx`), no un iframe/embed.
- Cualquier **dominio de imagen nuevo** debe agregarse a `img-src`, si no, la imagen no cargará
  en producción aunque funcione en `pnpm dev`.

---

## 7. Despliegue y SEO

- **Vercel** despliega desde `main` con la config de `vercel.json`. Al ser SPA sin rutas no hay
  `rewrites` ni `cleanUrls`.
- `dist/` está en `.gitignore` y **no está trackeado**: nunca lo subas a git (a diferencia de
  `public/`, que sí se commitea).
- En Vercel, `alfrerosedev.com` es el **dominio principal**; `www.alfrerosedev.com` y
  `alfrerosedev.vercel.app` **redirigen** al apex (configuración del panel, no del repo).
- Si cambia el dominio, hay que actualizar **4 lugares** que hoy hardcodean
  `https://alfrerosedev.com/`:
  1. `index.html` → `canonical`, `og:url`, `og:image`, `twitter:url`, `twitter:image`
  2. `public/sitemap.xml` → `<loc>` y `<lastmod>`
  3. `public/robots.txt` → `Sitemap:`
  4. `README.md` (menciona la marca `alfrerose.dev`)
- `public/banner_personal.jpg` es la imagen compartida en redes (1200×630, JPEG).
- El título del sitio es `alfrerose.dev` y el `theme-color` es `#1A1E2E`.

---

## 8. Estado conocido / deuda técnica

Cosas que parecen errores pero están ahí (oportunidades, no bloqueos — confirma antes de
"arreglarlas"):

- `src/assets/logo_personal.png` existe pero **no se usa** en ningún componente.
- La clase utilitaria `.card-base` de `src/index.css` **no se aplica** en ningún componente.
- `src/index.css` termina con un comentario colgante ("Section Container (from App.css)") sin
  contenido debajo; el layout real está en `App.css`.
- `--radius-md: 40px` es en realidad un radio tipo *pill* (el nombre engaña).
- `BackToTop` aparece a partir de `window.scrollY > 2800` (número mágico ligado a la altura
  actual de la página; si alargás el contenido, reconsidera el umbral).
- Las fuentes `'Inter'` y `'JetBrains Mono'` están declaradas en los tokens pero **no se cargan**
  (no hay `@font-face` ni `<link>` a Google Fonts): el sitio usa `system-ui`/monospace.
- No hay tests, CI, Prettier ni TypeScript; la única validación automática es oxlint.
- Existen pocos commits en el historial, con estilo *Conventional Commits* en español
  (`feat: ...`, `fix: ...`).

---

## 9. Reglas para agentes de IA

1. **Habla español** en el contenido, comentarios, docs y mensajes de commit.
2. Usa **pnpm** para todo (instalar, scripts). Si agregas una dependencia, actualiza
   `pnpm-lock.yaml` y deja `package.json` consistente.
3. **No agregues dependencias sin necesidad.** El proyecto es React + nada más; cualquier
   librería nueva (iconos, animación, utilidades) debe justificarse.
4. **No rompas la CSP** de `vercel.json` (§6): sin CDNs de JS, sin fetch a APIs externas, y
   registrando en `img-src` todo dominio de imagen nuevo.
5. Toda sección animada necesita el par CSS `estado inicial` + `.visible`; verifica que el
   contenido sea visible tras el cambio (§4).
6. Respeta los tokens de `src/index.css`: no dupliques colores, radios ni tiempos mágicos.
7. Nunca subas `dist/`, `node_modules/` ni archivos locales (`*.local`) a git.
8. Commits con *Conventional Commits* en español: `feat:`, `fix:`, `docs:`, `style:`,
   `refactor:`, `chore:`.
9. Antes de dar por terminada una tarea: `pnpm lint` (o `node node_modules/oxlint/bin/oxlint`)
   y `pnpm build` (o `node node_modules/vite/bin/vite.js build`) en verde, y revisión del
   resultado en `pnpm dev` al menos a 768 px y en móvil.
10. Si editas textos del portafolio, conserva el tono: primera persona, profesional y cercano,
    orientado a servicios de desarrollo. **No menciones la IA de forma explícita** en Hero,
    Filosofía ni en la nota de Tecnologías: es una decisión de marca vigente (el sitio se hizo
    con ayuda de IA, pero no se promociona). En "Proyectos Destacados" las menciones a IA son
    características reales de cada proyecto y sí se conservan.
11. No reescribas `README.md` ni este `AGENTS.md` salvo que el cambio de proyecto lo justifique;
    si añades convenciones nuevas, decláralas aquí.
