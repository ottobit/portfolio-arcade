# F1 Racer Architecture

## Runtime

`games/f1-racer/race.html` loads the race experience directly in the browser.
There is no bundler requirement.

The current race runtime is coordinated by `main.js`, with focused helpers:

- `race-input.js`: keyboard, touch pedals and analog steering input.
- `steering.js`: pure steering shaping and smoothing math.
- `player-physics.js`: player movement integration and grip behavior.
- `race-ai.js`: AI car controller and tactical movement.
- `race-hud.js`: HUD rendering and status formatting.
- `race-camera.js`: chase/cockpit camera behavior.
- `race-progress.js`: lap counting and race classification.
- `race-systems.js`: race systems such as DRS, tyres, damage and caution.
- `race-car-view.js`: visual race car mounting and updates.
- `race-commands.js`: command bindings and race UI actions.

## Shared Car Model

`car-model.js` builds the procedural open-wheel car used by both race and
garage. It keeps gameplay scale separate from visual scale and exposes wheel
groups so steering and rolling can be animated.

## Garage

`garage.html`, `garage.js`, `showroom.js`, `garage.css` and
`garage-setup.js` implement the setup bay. Setup data is persisted under
`f1racer-garage-v1` and read by race startup.

The garage currently previews setup families visually, but color selection still
needs to become a real player livery source.

## Championship and Drivers

`championship.js` owns championship state, scoring and named drivers.
`driver-selection.js` maps the selected friend/driver to the player display
name. The first implementation changes player identity presentation, but the AI
grid composition should still be refined to avoid duplicate friend names.

## Constraints

- Keep the game static-site friendly.
- Avoid adding a build system unless a future feature clearly requires it.
- Keep structural checks cheap by default.
- Do not alter the top HUD panel without a specific user request.