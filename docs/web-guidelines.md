# MINDSHROOM.studio — web development guidelines

Záväzná referencia pri ďalšom vývoji webu. Napája vendored playbooky
(`vendor/playbooks/`, MIT — viď `ATTRIBUTIONS.md`) na konkrétne úlohy.
Pravidlo: **relevancia > objem** — použi konkrétny playbook na konkrétnu úlohu, nie všetko naraz.

## Ktorý playbook na čo

| Úloha pri webe | Playbook (`vendor/playbooks/…`) |
|---|---|
| Hero/headline, CTA, microcopy | `skills/copywriting`, `skills/marketing-psychology` |
| Úprava existujúcich textov, tón | `skills/copy-editing` |
| Konverzia stránky (hero→CTA flow, dôvera) | `skills/page-cro` |
| Stromová štruktúra stránok, interné prelinky | `skills/site-architecture` |
| Obsahová stratégia, Journal témy | `skills/content-strategy` |
| On-page SEO audit (titles, meta, H-hierarchia) | `skills/seo-audit` |
| Structured data / rich results | `skills/schema-markup` |
| SEO pre AI/answer engines | `skills/ai-seo`, `agents/cs-aeo.md` |
| UI/frontend rozhodnutia, komponenty | `agents/cs-frontend-engineer.md` |
| UX research, user flows, IA validácia | `agents/cs-ux-researcher.md` |
| Marketingový obsah (social, launch) | `agents/cs-content-creator.md` |

## Projektové mantinely (override pre generické rady playbookov)
- **Stack:** vanilla HTML/CSS/JS, žiadny build step, GitHub Pages. Playbooky orientované na React/Next prispôsob na vanilla.
- **Brand:** Space Grotesk + DM Sans; paleta Spore Red `#E8472A` / Cap Cream `#FBEED3` / Solar Orange `#F3A02A` / Moss Green `#A5BA42` / Ink `#1A1A1A`. Estetika retro/psychedelic, vysoký kontrast.
- **A11y red flag:** cream text na shroom-red má nízky kontrast — pri akejkoľvek úprave over WCAG AA (telo textu ≥ 4.5:1), inak zväčši/ztučni alebo zmeň pozadie.
- **SEO baseline:** každá stránka má unikátny `<title>` + `meta description` (už hotové); pri pridávaní obsahu doplň `schema-markup` (Organization + WebSite na home, BlogPosting v Journal).
- **Zdroj pravdy pre dizajn:** referenčné screeny `assets/03_ref-*` + `assets/README.md`.

## Ako „sa tým riadiť"
1. Pred úlohou otvor príslušný `SKILL.md` / agent `.md` a vytiahni checklist.
2. Aplikuj v rámci projektových mantinelov vyššie.
3. Pri textoch a SEO si over výsledok proti `seo-audit` + `page-cro` checklistu.
