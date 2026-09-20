# F1 Racer Roadmap

## Open Product Work

- Choose which custom friend/driver to impersonate without duplicating that
  name in the AI grid.
- Extend cockpit themes beyond the first color/badge layer if more personality
  is desired per friend.

## Technical Follow-Ups

- Continue keeping `main.js` as orchestration and move reusable logic into
  focused modules only when it reduces real complexity.
- Keep setup effects centralized in `garage-setup.js`.
- Keep livery and cockpit theme data centralized in `driver-themes.js`.
- Keep car presentation details in `car-model.js`, `race-car-view.js`,
  `showroom.js` and garage-specific preview code.
- Update this LLM Wiki and `games/f1-racer/F1-RACER-WIKI.md` when architecture
  or user-facing decisions change.

## Manual Verification Notes

The user's current preferred verification loop is gameplay by hand. Automated
browser smoke tests should only be run when explicitly requested or when a
change is too risky to validate structurally.