# F1 Racer Roadmap

## Open Product Work

- Extend cockpit themes beyond the first color/badge layer if more personality
  is desired per friend.

## Technical Follow-Ups

- **Repository migration**: per the [repository architecture
  decision](decisions.md#repository-architecture-171), F1 Racer moves to
  [`ottobit/f1-racer`](https://github.com/ottobit/f1-racer). History
  extracted and paths adapted locally; blocked on the Claude GitHub App
  gaining push access to the new repo, and on GitHub Pages being enabled
  there (Settings → Pages → Deploy from branch → `master` → `/`, manual —
  no tool covers it). After that: point `portfolio-arcade`'s
  `assets/js/games.js`/`index.html` at the new Pages URL instead of the
  local `games/f1-racer/` path, and move the remaining open F1 issues
  (#170, #172, #173, #143, #144, #152, #177) to the new repo.
- #170: multiplayer backend (rooms, race sync, broadcast voice) — moves to
  `ottobit/f1-racer` with the rest; still an independently deployed service
  either way (GitHub Pages is static regardless of which repo hosts it).
- #143: reduce the remaining responsibilities in `main.js` where extraction
  lowers real complexity.
- #144: replace whole-file GitHub publication with a patch/diff-oriented
  workflow.
- Continue keeping `main.js` as orchestration and move reusable logic into
  focused modules only when it reduces real complexity.
- Keep setup effects centralized in `garage-setup.js`.
- Keep livery and cockpit theme data centralized in `driver-themes.js`.
- Keep car presentation details in `car-model.js`, `race-car-view.js`,
  `showroom.js` and garage-specific preview code.
- Update this LLM Wiki and `F1-RACER-WIKI.md` when architecture or
  user-facing decisions change — in both repos once the split lands.

## Manual Verification Notes

The user's current preferred verification loop is gameplay by hand. Automated
browser smoke tests should only be run when explicitly requested or when a
change is too risky to validate structurally.
