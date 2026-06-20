// als je naar beneden scrollt krijgt de nav een achtergrond zodat tekst leesbaar blijft
// zonder dit zou de witte nav tekst opgaan in lichte secties
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// scroll-reveal animaties voor elementen met de class .reveal
// ik gebruik IntersectionObserver en niet een scroll event listener omdat scroll events
// honderden keren per seconde afgaan wat de pagina merkbaar trager maakt op mobiel
// IntersectionObserver laat de browser zelf bepalen wanneer een element in beeld komt
// dat is veel efficiënter en is de aanbevolen moderne manier om dit te doen
// bron: MDN - https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // zodra het element zichtbaar is stoppen we met observen want het hoeft maar één keer te animeren
        }
    });
}, { threshold: 0.1 }); // 0.1 betekent dat het element voor minimaal 10% in beeld moet zijn voordat de animatie start

reveals.forEach(el => observer.observe(el));

// hamburger menu voor mobiel - opent en sluit het nav menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    // classList.toggle voegt de class toe als die er nog niet op zit en verwijdert hem als die er al op zit
    // de returnwaarde is true als de class er nu op zit en false als hij er net af is
    // bron: MDN - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('active');

    // aria-expanded vertelt screenreaders of een uitklapbaar element open of dicht is
    // zonder dit zouden mensen die een screenreader gebruiken niet weten of het menu zichtbaar is
    // bron: MDN aria-expanded - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
});

// menu sluit als je op een link klikt zodat je niet handmatig het menu hoeft te sluiten
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Menu openen');
    });
});

// projectfilter - maakt automatisch filterknopjes op basis van de tags in de html
// het voordeel is dat je gewoon een nieuwe tag in de html kunt zetten en de knop verschijnt vanzelf
// je hoeft de javascript dus nooit aan te passen als je een project toevoegt
// ik gebruik insertAdjacentElement zodat de filterbalk precies na de titel wordt ingevoegd
// met innerHTML zou ik de hele container overschrijven en alle projectkaarten verwijderen
// bron: MDN - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

function maakProjectFilter() {
    const kaarten = document.querySelectorAll('.project-card');
    if (!kaarten.length) return;

    const projecten = Array.from(kaarten).map(kaart => ({
        tags: Array.from(kaart.querySelectorAll('.tag'))
            .map(t => t.textContent?.trim() ?? ''),
        element: kaart,
    }));

    // alle unieke tags verzamelen uit alle projectkaarten
    // flatMap maakt van [[tag1, tag2], [tag2, tag3]] één platte array [tag1, tag2, tag2, tag3]
    // new Set gooit dan de duplicaten eruit zodat elke tag maar één keer voorkomt
    // bron: MDN Set - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // bron: MDN flatMap - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
    const alleTags = [...new Set(projecten.flatMap(p => p.tags))];

    const container = document.querySelector('.projects-inner');
    if (!container) return;

    const filterBalk = document.createElement('div');
    filterBalk.className = 'filter-bar';
    filterBalk.setAttribute('role', 'group');
    filterBalk.setAttribute('aria-label', 'Filter projecten op technologie');

    const knoppen = [];

    function maakKnop(tekst, waarde) {
        const knop = document.createElement('button');
        knop.className = 'filter-btn';
        knop.textContent = tekst;
        knop.dataset.filter = waarde;
        if (waarde === '') knop.classList.add('active');
        filterBalk.appendChild(knop);
        knoppen.push(knop);
    }

    maakKnop('Alles', '');
    alleTags.forEach(tag => maakKnop(tag, tag));

    const titel = container.querySelector('.sec-title');
    titel?.insertAdjacentElement('afterend', filterBalk);

    knoppen.forEach(knop => {
        knop.addEventListener('click', () => {
            knoppen.forEach(k => k.classList.remove('active'));
            knop.classList.add('active');

            const filter = knop.dataset.filter ?? '';
            projecten.forEach(project => {
                const zichtbaar = filter === '' || project.tags.includes(filter);
                project.element.style.display = zichtbaar ? '' : 'none';
                // aria-hidden verbergt het element ook voor screenreaders als het niet zichtbaar is
                project.element.setAttribute('aria-hidden', String(!zichtbaar));
            });
        });
    });
}

maakProjectFilter();
