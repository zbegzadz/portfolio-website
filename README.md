# Portfolio — Zaki Begzad

Persoonlijke portfoliosite gebouwd met HTML, CSS en TypeScript.

## Pagina's

- **index.html** — homepage met hero, over mij, techstack, projecten en contact
- **project.html** — uitgewerkte detailpagina voor het Schiphol Dashboard project

## Functionaliteiten

- Projectfilter op technologie (dynamisch gegenereerd vanuit de HTML tags)
- Scroll-reveal animaties via IntersectionObserver
- Hamburger menu op mobiel met ARIA-attributen
- Skip-link voor toetsenbordgebruikers

## Bestanden

```
portfoliosite/
├── index.html
├── project.html
├── style.css
├── main.ts        (bronbestand TypeScript)
└── main.js        (gecompileerd vanuit main.ts)
```

## TypeScript compileren

```bash
tsc main.ts
```

## Toegankelijkheid

- Semantische HTML elementen (header, main, nav, aside, figure, footer)
- ARIA-attributen op interactieve elementen
- Getest met Lighthouse
