<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Konwencje repozytorium (WAŻNE — przestrzegaj zawsze)

To projekt solo, ale prowadzony wg dobrych praktyk zdrowego repozytorium Git. Poniższe zasady obowiązują przy każdej zmianie w tym repo.

## Branching

- `main` — zawsze stabilna, gotowa do wdrożenia
- `develop` — gałąź integracyjna, tu trafiają scalone feature'y
- `feature/*` / `update/*` — praca nad pojedynczą zmianą, odgałęziona od `develop`, scalana z powrotem do `develop` po ukończeniu
- `develop` → `main` dopiero gdy zestaw zmian jest gotowy do "wydania"

**Nigdy nie commituj bezpośrednio na `main`.**

## Commity

- **Jeden commit = jedna logiczna, spójna zmiana.** Nie mieszaj niepowiązanych rzeczy w jednym commicie.
- Solidne, opisowe nazewnictwo commitów wg konwencji Conventional Commits:
  - `feat: dodaj sekcję Hero`
  - `fix: popraw responsywność nawigacji`
  - `refactor: wydziel komponent Navbar`
  - `chore: aktualizacja zależności`
  - `docs: aktualizacja README`

## Pull Requesty

- **Nie dotyczy.** Projekt solo — scalanie branchy odbywa się bezpośrednio (`git merge`), bez procesu PR.
