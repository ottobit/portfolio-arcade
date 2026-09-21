# LLM Wiki Maintenance Log

## 2026-09-20

- Ingested Andrej Karpathy's LLM Wiki pattern as a source note.
- Added local agent instructions, wiki index and first F1 Racer pages.
- Linked the LLM Wiki to existing repository docs instead of duplicating the full
  technical handoff.
- Recorded the F1 Racer livery/cockpit theme integration: shared driver theme
  data, persisted garage livery, race player livery and cockpit theme overlay.
- Moved the race-livery selector into the scrollable garage setup panel for
  mobile discoverability, enlarged its touch targets and versioned the garage
  stylesheet to invalidate stale mobile caches.

## 2026-09-21

- Replaced the circuit card grid with a map-led, swipeable carousel that shares
  source geometry with the race and preserves accessible alternate controls.
- Extracted bilateral car-contact response into `race-collisions.js`; player and
  AI now share impulse, swerve, damage and impact feedback rules.
- Reordered the F1 home around its primary actions: promoted Garage beside the
  race shortcut, grouped driver/difficulty as session setup, and moved standings
  below circuit selection.
- Reworked mobile session setup into explicit A/B choices: a three-segment
  difficulty control and a responsive numbered driver grid with large touch
  targets and stronger selected state.
- Added a dedicated race-launch link outside the swipe viewport so iOS pointer
  capture cannot swallow the only navigation tap into the selected circuit.
- Removed that duplicate launch link after UX review. `Scendi in pista` is now
  the only race link, isolated from the rest of the non-clickable slide.
- Excluded desktop mouse input and CTA-originated taps from carousel pointer
  capture, restoring reliable `Scendi in pista` navigation on desktop too.
