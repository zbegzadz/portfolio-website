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
├── main.ts                              (bronbestand TypeScript)
├── main.js                              (gecompileerd vanuit main.ts)
├── tsconfig.json
├── media/
│   └── barry-lyndon.gif
└── documentation/
    ├── Conceptsheet_ZakiBegzad.docx
    ├── Kleurenpalette_ZakiBegzad.docx
    ├── Toegankelijkheidsplan_ZakiBegzad.docx
    └── UXUI_Document_ZakiBegzad.docx
```

## TypeScript compileren

```bash
tsc
```
