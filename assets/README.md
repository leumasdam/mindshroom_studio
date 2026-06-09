# MINDSHROOM.studio — asset kit + build guide

Vizuálna identita kreatívneho štúdia **MINDSHROOM.studio** (retro / psychedelic / bold).
Tento priečinok je **stavebnica na web**: referenčné screeny subpages + komponenty + ikony + patterny + textúry + SVG logá.

> **Zdroj pravdy = `01_brand-board-*` + `SVG/`.** Všetko je naplocho v jednom priečinku;
> **číselný prefix `NN_` = kategória** (po zoradení podľa názvu sa držia pokope).

---

## Brand špecifikácia

- **Charakter:** playful · psychedelic · bold · urban · creative · digital. Retro-70s groovy + moderný grotesk.
- **Logo:** brandmark = dve huby tvoriace oblúk „M" so spórami (oči). Wordmark `MINDSHROOM` + `.studio`.
- **Paleta** (presné hodnoty z brand case-study):
  | token | hex | použitie |
  |---|---|---|
  | `--ms-red` (Spore Red) | `#E8472A` | primárna, plochy, CTA |
  | `--ms-red-deep` | `#C83A1F` | hover/tiene červenej |
  | `--ms-cream` (Cap Cream) | `#FBEED3` | pozadia, text na červenej |
  | `--ms-cream-soft` | `#F3E7CE` | sekundárne svetlé plochy |
  | `--ms-orange` (Solar Orange) | `#F3A02A` | akcent, bannery |
  | `--ms-green` (Moss Green) | `#A5BA42` | akcent, ikony, „spóry" |
  | `--ms-ink` (Ink Black) | `#1A1A1A` | text, dark plochy |
- **Typografia:** display/nadpisy = **Space Grotesk** (700–800, tight tracking ~ -0.03em), body = **DM Sans**.
- **Layout motív:** červené vonkajšie pozadie + zaoblená vnútorná karta (`border-radius: 28px`, padding 8–12px). Home je full-bleed červená.

---

## Stránky webu ↔ referenčné screeny (`03_ref-*`)

| Route | Stránka | Referencia | Pozadie |
|---|---|---|---|
| `/` | **Home** | `03_ref-home-laptop-mockup` — CREATIVE · DIGITAL · PLAYFUL | full-bleed červená |
| `/work` | **Work** | `03_ref-home-design-systems` — „Design systems…" + case studies + process | krém v ráme |
| `/services` | **Services** | `03_ref-studio-visual-worlds` — „We build visual worlds…" + values + stats | červená |
| `/studio` | **Studio** | `03_ref-studio-team` — „A SMALL STUDIO. BIG IDEAS. KIND HEARTS." + tím + how we work | krém v ráme |
| `/journal` | **Journal** | `03_ref-journal` — „IDEAS WORTH GROWING." + grid článkov | krém v ráme |
| `/contact` | **Contact** | `03_ref-contact` — „LET'S CREATE SOMETHING MEANINGFUL." + formulár | krém v ráme |
| `/case` | **Case study** | `03_ref-case-study-detail` — Mindshroom case study | krém v ráme |

Navigácia: `Work · Services · Studio · Journal` + tlačidlo **Let's Connect** → Contact. Logo → Home.

---

## Kategórie assetov

| Prefix | Kategória | Obsah / použitie |
|---|---|---|
| `01_` | brand-boards | Brand guidelines (paleta, type, logo). Referencia. |
| `02_` | logo | App icon / favicon (logo na červenej dlaždici). |
| `03_ref-*` | reference screens | **Ukážkové screeny subpages** — predloha na 1:1 build (viď tabuľka vyššie). |
| `04_` | web-components | Service karty (Branding, Web Design, Motion, Creative Direction) — 1:1 predloha. |
| `05_` | posters | Plagáty / social vzory. |
| `06_` | case-study-mockups | Mockupy prác (Verde, Grow, Kinetic Rhythm, Moss Mode, Orbit Bloom) → Work grid. |
| `07_` | mockups-merch | Grid aplikácií identity. |
| `08_` | icons | Transparentné ikony (eye, mushroom, flower, rocket, globe, play, calendar, cube, sparkle, hexagon, sprout) — lime/red. |
| `09_` | graphic-elements | Dekor: swirl/halftone shapes, badge „seal", sticker sheet + ilustrácie (mushroom-squiggle line, gills macro, journal mushrooms). |
| `10_` | patterns | Bezšvíkové tileable patterny. |
| `11_` | textures | Fotografické textúry (plaster, gills, canvas, plastic, leather, concrete). |
| `SVG/` | vektory | `mindshroom_logo`, `_brandmark`, `_logo_transparent` (biele, na červené), `mushroom_solo`, `mushrooms`, `bg_shape_logo`. **Preferuj SVG pred rastrom v UI.** |

---

## Ako stavať (postup)

1. **Layout & copy** ber z `03_ref-*` — sú to hotové predlohy sekcií (nav, hero, grids, process, footer).
2. **Logo** = `SVG/` (brandmark + wordmark); na krémovom pozadí červená verzia, na červenom krémová/biela.
3. **Komponenty** (service karty) → `04_*`. **Ikony** → `08_*`. **Portfólio/Work** → `06_*`.
4. **Pozadia & akcenty:** `10_*` (patterny) + `11_*` (textúry, grain) + `09_*` (swirl/badge/ilustrácie).
5. Drž paletu a Space Grotesk / DM Sans. Estetika: bold, groovy, vysoký kontrast (cream text na červenej).
6. Web prechody: View Transitions API (slide medzi stránkami) s fallbackom.

> Pozn.: exact-byte duplikáty a súbory označené `IGNORE` boli odstránené; reálny obsah sa nestratil.
