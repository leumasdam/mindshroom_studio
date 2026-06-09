# Vendored playbooks — attributions

Curated, **read-only reference** marketing / SEO / UX / UI playbooks. These are NOT installed as
active Claude Code config (`.claude/skills`, `.claude/agents`) — they live here as guidance the team
follows manually. To make any of them auto-active, copy the chosen folder into `.claude/skills/` or the
chosen `.md` into `.claude/agents/` yourself (a deliberate, reviewed step).

## Sources (both MIT licensed)

### Corey Haines — marketing skill library
- Repo: https://github.com/ndxtraders/Corey-Haines-marketing-skills
- License: MIT © 2025 Corey Haines
- Used: `skills/` (SKILL.md + references only) → `vendor/playbooks/skills/`
  - `copywriting`, `copy-editing`, `page-cro`, `seo-audit`, `schema-markup`,
    `site-architecture`, `marketing-psychology`, `content-strategy`, `ai-seo`

### Alireza Rezvani — claude-skills
- Repo: https://github.com/alirezarezvani/claude-skills
- License: MIT © 2025 Alireza Rezvani
- Used: 4 agent definitions → `vendor/playbooks/agents/`
  - `cs-frontend-engineer.md` (UI / frontend), `cs-ux-researcher.md` (UX),
    `cs-aeo.md` (SEO / answer-engine optimization), `cs-content-creator.md` (marketing content)

Curated subset only — not the full 337-skill / 30-agent library. Pick relevance over volume.
Full MIT license texts are in each source repo's `LICENSE`.
