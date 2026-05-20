# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Panoramica del progetto

Portfolio personale di Federico Pozzi (Communication & Digital Designer), pubblicato su GitHub Pages all'indirizzo federicopozzi.github.io. Sito completamente statico — nessun build tool, nessun package manager, nessun bundler.

## Avvio in locale

Aprire qualsiasi file `.html` direttamente nel browser, oppure usare un server HTTP locale per evitare problemi CORS con i path relativi:

```
python -m http.server 8080
# oppure
npx serve .
```

## Roadmap di ottimizzazione

**`roadmap_ottimizzazione.md`** traccia tutti i task di ottimizzazione pendenti e completati (validità HTML, immagini, script, SEO, CSS, accessibilità, architettura), ordinati per priorità ed effort. Prima di qualsiasi intervento su questo repository, consultare quel file e marcare il task corrispondente come `[x]` al completamento.

## Architettura

Tutte le librerie esterne sono caricate via CDN (nessuna dipendenza locale da installare). Tutti gli script usano `defer`:
- Bootstrap 4.3.1 — layout e griglia
- UIKit 3.5.3 — componenti e lazy loading immagini (`uk-img` + `data-src`)
- jQuery 3.4.1 — usato solo in `main.js` per gli effetti hover sui link social
- Google Fonts: Comfortaa, Manrope (già include `&display=swap`)
- FontAwesome 6 (kit personalizzato)

`assets/css/style.css` — tutti gli stili custom. Usa unità `vw` per la tipografia responsiva e un breakpoint media query a `414px` (target iPhone). La regola `hr { margin: 5px 0; }` è definita qui.

`assets/js/main.js` — handler jQuery hover che scambiano il colore di sfondo di body/header per ogni link social. Ogni piattaforma social ha una classe CSS corrispondente (`.b-insta`, `.b-git`, `.b-telegram`, `.b-twitter`, `.b-vimeo`, `.b-mail`).

## Pattern delle pagine progetto

`index.html` linka a 13 pagine progetto (`superforma.html`, `disruptive.html`, `redpen.html`, `laLettura.html`, `dataviz.html`, `dataviz2.html`, `dataviz3.html`, `urlografo.html`, `moodboard.html`, `coding.html`, `wireframe.html`, `game.html`, `castaneda.html`). Ogni pagina condivide la stessa struttura header/footer di `index.html` e carica lo stesso stack CDN.

Gli asset statici (immagini, PDF, SVG) si trovano in `assets/img/`, `assets/svg/` e `assets/other/`. Il CV PDF è in `assets/other/Pozzi-cv.pdf`.
