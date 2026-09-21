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
- `race-collisions.js`: bilateral car contact impulse, separation and damage.
- `race-car-view.js`: visual race car mounting and updates.
- `race-commands.js`: command bindings and race UI actions.

## Shared Car Model

`car-model.js` builds the procedural open-wheel car used by both race and
garage. It keeps gameplay scale separate from visual scale and exposes wheel
groups so steering and rolling can be animated.

`driver-roster.js` owns the canonical ten identities. `driver-themes.js` owns
shared livery and cockpit theme data. `car-model.js`
tags paint materials by role, so race and garage can apply the same primary and
secondary colors without rebuilding separate car definitions.

## Garage

`garage.html`, `garage.js`, `showroom.js`, `garage.css` and
`garage-setup.js` implement the setup bay. Setup data is persisted under
`f1racer-garage-v1` and read by race startup.

The garage previews setup families visually and persists the selected livery.
The race reads that livery for the player car while AI cars keep their team
color pairs.

The detailed showroom car is built with `showDriver: false`. Its exposed
cockpit interior includes a seat, headrest, harness, bolsters, dashboard,
display and steering wheel; the lightweight race cars still include a driver.

## Championship and Drivers

`championship.js` owns championship state and scoring. `driver-selection.js`
maps the selected identity to the player display name. Race startup removes
that identity from `DRIVER_ROSTER` and creates the nine AI cars from the
remainder, guaranteeing ten unique names on the grid.

`race-camera.js` builds a lightweight cockpit overlay from the selected driver's
theme when cockpit camera mode is active.

## Circuit Selection

`menu.js` renders a single active circuit at a time using an inline map derived
from the same control points consumed by the race. `index.html` and `style.css`
provide the swipeable carousel viewport, arrow controls, keyboard navigation,
large launch target and mobile layout.

## Constraints

- Keep the game static-site friendly.
- Avoid adding a build system unless a future feature clearly requires it.
- Keep structural checks cheap by default.
- Do not alter the top HUD panel without a specific user request.
