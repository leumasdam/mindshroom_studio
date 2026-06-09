# MINDSHROOM.studio — website

Web pre fiktívne kreatívne štúdio **MINDSHROOM.studio** (retro · psychedelic · bold).
Postavené 1:1 podľa dodaných referenčných screenov. Vanilla **HTML + CSS + JS** (žiadny build step), pripravené na GitHub Pages.

## Stránky
| Súbor | Stránka | Referencia |
|---|---|---|
| `index.html` | Home — CREATIVE · DIGITAL · PLAYFUL | `assets/03_ref-home-laptop-mockup.png` |
| `work.html` | Work — Design systems + case studies + process | `assets/03_ref-home-design-systems.png` |
| `services.html` | Services — We build visual worlds + values + stats | `assets/03_ref-studio-visual-worlds.png` |
| `studio.html` | Studio — A small studio. Big ideas. + tím | `assets/03_ref-studio-team.png` |
| `journal.html` | Journal — Ideas worth growing | `assets/03_ref-journal.png` |
| `contact.html` | Contact — Let's create something meaningful | `assets/03_ref-contact.png` |
| `case.html` | Case study detail | `assets/03_ref-case-study-detail.png` |

## Štruktúra
```
index.html, work.html, services.html, studio.html, journal.html, contact.html, case.html
css/styles.css     — design systém (tokeny, nav, footer, komponenty, view transitions)
js/main.js         — injektuje nav + footer, mobilné menu, journal filter, form
js/decor.js        — ikony, rotujúce pečate (stamps), gears
assets/            — všetky obrázky (NN_ kategórie) + svg/ logá + README.md (asset guide)
```

## Lokálne spustenie
Statický web — stačí otvoriť `index.html`, alebo:
```
python -m http.server 8000
# → http://localhost:8000
```

## Brand
Paleta: Spore Red `#E8472A` · Cap Cream `#FBEED3` · Solar Orange `#F3A02A` · Moss Green `#A5BA42` · Ink `#1A1A1A`.
Typografia: **Space Grotesk** (nadpisy) + **DM Sans** (text).
Plný asset/brand guide: [`assets/README.md`](assets/README.md).
