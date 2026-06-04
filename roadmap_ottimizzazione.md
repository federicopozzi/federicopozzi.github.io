# Roadmap Ottimizzazione — federicopozzi.github.io

Priorità e effort stimato per ogni intervento. Aggiornare questo file marcando ogni task come `[x]` al completamento.

**Legenda effort:** XS < 30min · S 30–120min · M 2–4h · L 4–8h · XL > 1 giorno  
**Legenda priorità:** P1 Critico · P2 Alto · P3 Medio · P4 Basso

---

## BLOCCO 1 — HTML: Struttura invalida e broken links
> Impatto: validità del markup, indicizzazione, navigazione utente

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 1.1 | Rimuovere il doppio tag `<html>` annidato nel `<head>` presente in tutte le 13 pagine progetto (es. `<html lang=ita>` dentro `<head>`) | P1 | S | [x] |
| 1.2 | Aggiungere virgolette agli attributi `lang` (`lang=eng` → `lang="en"`, `lang=ita` → `lang="it"`) su tutte le pagine | P1 | XS | [x] |
| 1.3 | Correggere i 34+ tag `<hr />` malformati (spazio prima dello slash, inline style `margin:5px` estratto in `style.css`) | P2 | S | [x] |
| 1.4 | Correggere il `<title>` di `redpen.html` (era "Wireframe", corretto in "RedPen") | P2 | XS | [x] |
| 1.5 | Correggere i link di navigazione vuoti `<span class="an-link"></span>` in `superforma.html`, `dataviz2.html` e `dataviz3.html` | P2 | XS | [x] |
| 1.6 | Aggiungere `href` corretto al favicon su tutte le 13 pagine progetto (era `href=""`) | P2 | S | [x] |
| 1.7 | Correggere il typo "javascrpit" → "javascript" in `dataviz3.html` e `superforma.html` | P3 | XS | [x] |
| 1.8 | Corretto il tag `</div>` mancante in `castaneda.html` (chiusura `<div class="row">` prima di `</section>`) | P2 | XS | [x] |

---

## BLOCCO 2 — Immagini e Asset: Ottimizzazione peso
> Impatto diretto sul tempo di caricamento. Totale attuale: ~76 MB immagini + 40 MB PDF + 1.3 MB SVG

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 2.1 | Convertire e comprimere le PNG critiche in WebP (target 80–90% riduzione): `trama.png` 8.3MB, `cancellazione.png` 7.1MB, `sf4.png` 7.0MB, `sf1.png` 5.3MB, `sf2.png` 3.8MB, `ewallet_ewallet.png` 5.8MB, `t6.png` 3.7MB | P1 | M | [x] |
| 2.2 | Ottimizzare i JPG principali (target < 500 KB ciascuno): `viz1.jpg` 2.6MB, `w2.jpg` 2.4MB, `w7.jpg` 1.6MB, `viz2.jpg` 1.3MB, `viz3.jpg` 1.4MB | P1 | M | [x] |
| 2.3 | Convertire `cover_general.gif` (2.8 MB) e `interaction.gif` (4.9 MB) in video MP4/WebM con autoplay muted loop, o in WebP animato | P1 | M | [x] |
| 2.4 | Ottimizzare `ewallet.svg` (1.3 MB → target < 100 KB) con SVGO — ottenuto 376 KB (-71%) con precisione=1; il target 100 KB non è raggiungibile con SVGO su SVG a 596 path senza distorsione visiva | P2 | S | [x] |
| 2.5 | Aggiungere `loading="lazy"` a tutte le immagini non above-the-fold (compatibile con UIKit `uk-img`, verificare comportamento) | P2 | S | [x] |
| 2.6 | Aggiungere attributi `width` e `height` espliciti su tutti i tag `<img>` dove mancano, per evitare layout shift (CLS) | P2 | S | [x] |
| 2.7 | Comprimere i PDF pesanti se possibile (priorità su `wireframe_juggle.pdf` 19.8 MB e `ewallet.pdf` 8.1 MB) — `ewallet.pdf` ridotto 7.8→7.6MB; `wireframe_juggle.pdf` richiede Ghostscript (immagini già in JPEG/JPX, senza tool esterno impossibile ridurre ulteriormente) | P3 | S | [x] |

---

## BLOCCO 3 — Script: Dipendenze e caricamento
> Impatto: eliminazione render-blocking, riduzione richieste HTTP, pulizia dipendenze inutilizzate

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 3.1 | Rimuovere il doppio import jQuery: eliminato `jquery-1.11.1.min.js` (2012), mantenuto solo `jquery/3.4.1` | P1 | XS | [x] |
| 3.2 | Rimuovere la libreria AOS (Animate On Scroll) da tutte le pagine: importata ma mai utilizzata (rimossi CSS e JS su tutti i 14 file) | P1 | S | [x] |
| 3.3 | Aggiungere attributo `defer` a tutti i tag `<script>` non critici su tutte le 14 pagine | P1 | S | [x] |
| 3.4 | Refactoring di `main.js`: ridurre i 109 righe di handler ripetuti a un loop su array `['insta','git','telegram','twitter','vimeo','mail']` (~10 righe finali) | P2 | S | [x] |
| 3.5 | Valutare sostituzione jQuery con vanilla JS: `main.js` usa solo `.hover()`, `.addClass()`, `.removeClass()` — rimpiazzato con `addEventListener('mouseenter/mouseleave')` e `classList`; jQuery rimosso da tutti i 14 file HTML | P3 | M | [x] |
| 3.6 | Aggiungere `rel="preconnect"` per i domini CDN usati (googleapis, bootstrapcdn, jsdelivr, fontawesome) nel `<head>` di ogni pagina | P2 | S | [x] |

---

## BLOCCO 4 — CSS: Pulizia e manutenzione
> Impatto: peso CSS ridotto, manutenibilità, eliminazione dead code

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 4.1 | Rimuovere il blocco CSS commentato (34 righe marquee animation, linee 134–177 di style.css) che non viene mai usato | P3 | XS | [x] |
| 4.2 | Estratti i 34+ `style="margin:5px;"` inline degli `<hr>` in `hr { margin: 5px 0; }` in `style.css` | P3 | S | [x] |
| 4.3 | Estrarre gli altri inline style ricorrenti (`style="height:50%"`, `style="background-color: #333;"`) in classi CSS | P3 | S | [x] |
| 4.4 | `font-display: swap` già presente nell'URL Google Fonts (`&display=swap`) su tutte le pagine | P2 | XS | [x] |
| 4.5 | Aggiungere stack di fallback alle font-family (attualmente solo `sans-serif`, aggiungere font simili come `'Trebuchet MS', Arial`) | P3 | XS | [x] |
| 4.6 | Aggiungere breakpoint mancanti per tablet (768px) per migliorare la responsività intermedia | P3 | M | [x] |
| 4.7 | Sostituire i 6 ID selector `#insta`, `#git`, etc. con classi `.social-link[data-platform="insta"]` per migliore specificità | P4 | M | [ ] |

---

## BLOCCO 5 — SEO e Metadati
> Impatto: indicizzazione, condivisione social, structured data

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 5.1 | Corretti `og:image` (URL assoluto) e `twitter:image` (era vuoto) su `index.html` | P1 | XS | [x] |
| 5.2 | Aggiungere meta tag Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) su tutte le pagine progetto | P2 | M | [x] |
| 5.3 | Aggiungere tag `<link rel="canonical">` su ogni pagina per evitare duplicate content | P2 | S | [x] |
| 5.4 | Creare `sitemap.xml` con tutte le 14 URL del sito | P2 | S | [x] |
| 5.5 | Creato `robots.txt` con `User-agent: * / Allow: /` e riferimento alla sitemap | P2 | XS | [x] |
| 5.6 | Uniformare i `<title>` di tutte le pagine al pattern `"Nome Progetto — Federico Pozzi"` | P2 | S | [x] |
| 5.7 | Aggiungere JSON-LD Schema.org `Person` su `index.html` e `CreativeWork` su ogni pagina progetto | P3 | M | [x] |
| 5.8 | Aggiungere meta `twitter:card` e `twitter:image` su tutte le pagine | P3 | S | [x] |

---

## BLOCCO 6 — Accessibilità
> Impatto: usabilità, WCAG 2.1, screen reader

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 6.1 | Aggiungere testo `alt` descrittivo a tutte le immagini con `alt=""` o senza attributo alt (20+ immagini) | P2 | M | [ ] |
| 6.2 | Aggiungere `aria-label` alle icone UIKit usate come pulsanti/link senza testo visibile | P3 | S | [ ] |
| 6.3 | Verificare contrasto colore testo/sfondo con WCAG AA (specie `.an-link` e footer links) | P3 | S | [ ] |
| 6.4 | Aggiungere skip navigation link ("Salta al contenuto") come primo elemento del `<body>` su tutte le pagine — WCAG 2.4.1 | P2 | S | [ ] |
| 6.5 | Aggiungere stili `:focus-visible` espliciti per la navigazione da tastiera — WCAG 2.4.7 (attualmente il browser default potrebbe essere rimosso da Bootstrap/UIKit) | P3 | S | [ ] |
| 6.6 | Aggiungere `@media (prefers-reduced-motion: reduce)` in `style.css` per bloccare i video autoplay (ex GIF, task 2.3) e qualsiasi animazione CSS per chi ha questa preferenza di sistema | P2 | XS | [ ] |

---

## BLOCCO 7 — Architettura (avanzato, basso rischio)
> Miglioramenti strutturali a lungo termine, non bloccanti

| # | Task | Priorità | Effort | Stato |
|---|------|----------|--------|-------|
| 7.1 | Estrarre header e footer comuni in un componente riutilizzabile (tramite uno script di build minimale tipo 11ty/Vite, oppure SSI se l'hosting lo supporta) per eliminare la duplicazione su 14 pagine | P4 | XL | [ ] |
| 7.2 | Aggiungere un `<link rel="preload">` per le immagini hero above-the-fold di ogni pagina | P3 | S | [ ] |
| 7.3 | Implementare `srcset` e `sizes` per le immagini principali, servendo risoluzioni adeguate per mobile/desktop | P3 | L | [ ] |
| 7.4 | Valutare aggiunta Service Worker per cache offline delle pagine e degli asset statici | P4 | L | [ ] |
| 7.5 | Creare pagina `404.html` custom (GitHub Pages la usa automaticamente se presente nella root) — attualmente mostra la 404 generica di GitHub | P3 | S | [ ] |
| 7.6 | Aggiungere `<meta name="theme-color">` nel `<head>` di tutte le pagine (colore barra browser su mobile Chrome/Safari) | P4 | XS | [ ] |

---

## Riepilogo per fase consigliata

### Fase 1 — Quick wins ✅ COMPLETATA
Blocco 1 completo + 3.1 + 3.2 + 3.3 + 4.2 + 4.4 + 5.1 + 5.5  
_Risolti: validità HTML su 14 file, dipendenze inutili (AOS, jQuery duplicato), render-blocking scripts, favicon, broken links, typo, og:image, robots.txt_

### Fase 2 — Asset optimization ✅ COMPLETATA
Blocco 2 completo + 3.4 + 3.5 + 3.6 + 4.1 + 4.3  
_Risolti: conversione PNG→WebP, ottimizzazione JPG, GIF→video, SVGO su SVG, lazy loading, width/height, PDF compressi, refactoring main.js, jQuery rimosso, preconnect CDN, dead CSS rimosso, inline style estratti_

### Fase 3 — SEO e meta completi ✅ COMPLETATA
5.2 + 5.3 + 5.4 + 5.6 + 5.7 + 5.8  
_Risolti: Open Graph su tutte le pagine, canonical, sitemap.xml, robots.txt, title uniformi, JSON-LD, twitter card/image_

### Fase 4 — CSS e accessibilità
4.5 + 4.6 + 6.1 + 6.4 + 6.5 + 6.6  
_Tempo stimato: ~4–5 ore (4.7 opzionale, P4)_

### Fase 5 — Architettura e rifinitura
6.2 + 6.3 + 7.2 + 7.5 + 7.6 + (7.3 + 7.4 + 7.1 a discrezione)  
_Tempo stimato: variabile, pianificare separatamente_
