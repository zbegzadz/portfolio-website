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

## Toegankelijkheid

- Semantische HTML elementen (`header`, `main`, `nav`, `aside`, `figure`, `footer`)
- Skip-link naar hoofdinhoud met `tabindex="-1"` op `<main>`
- ARIA-attributen op interactieve elementen (`aria-expanded`, `aria-label`, `aria-hidden`)
- Focus-stijlen via `:focus-visible` op alle klikbare elementen
- Mobiel menu verborgen via `visibility: hidden` zodat screenreaders het niet lezen als het dicht is
- Animaties uitgeschakeld via `prefers-reduced-motion`
- `.visually-hidden` utility class voor screenreader-only tekst
- Getest met Lighthouse

## Bestanden

```
portfoliosite/
├── index.html
├── project.html
├── style.css
├── main.ts        (bronbestand TypeScript)
├── main.js        (gecompileerd vanuit main.ts)
└── media/
    └── barry-lyndon.gif
```

## TypeScript compileren

```bash
tsc main.ts
```
