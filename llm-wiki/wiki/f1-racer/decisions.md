# F1 Racer Decisions

## Development Flow

All changes should go through issue, branch, pull request and merge. The current
default verification mode is structural-only: `git diff --check`, syntax checks
and other cheap targeted checks. The user validates gameplay manually unless
extra runtime/browser testing is explicitly requested.

## Visual Direction

The race and garage should feel more spectacular than the original prototype,
using Three.js lighting, procedural detail and motion where possible while
remaining browser-friendly.

The top race HUD is liked by the user and should be preserved.

## Controls

Touch controls must be sized and spaced for real thumbs. Steering should remain
analog and visually readable, and front wheel visuals must follow steering in a
mechanically plausible way.

## Home and Circuit Selection

Circuit selection uses one large map-led carousel instead of equally weighted
cards. Swipe, visible arrows, keyboard arrows and dot controls all update the
same selected circuit. The launch action stays inside the active slide and all
mobile controls keep thumb-sized targets.

Only `Scendi in pista` inside the active circuit slide starts a race. The rest
of the card is presentation and swipe surface, avoiding competing launch
buttons and accidental navigation while browsing circuits.

Swipe capture applies only to touch/pen input that starts outside the race CTA.
Mouse input uses the carousel arrows and must never enter pointer capture, so
desktop activation of `Scendi in pista` remains a normal link click.

The home prioritizes actions over reference data. Garage and circuit selection
are the two primary commands directly below the hero, with Garage visually
dominant. Difficulty and driver live in one session-setup panel, and standings
follow the circuit carousel instead of interrupting the path into a race.

Inside session setup, difficulty is a three-segment choice with short intent
labels. Driver selection is a numbered 3-column touch grid on ordinary phones
and falls back to 2 columns on very narrow screens. Targets remain at least
54 px high and the selected state uses more than color alone.

## Collision Fairness

Player and AI cars have equal mass in car-to-car contact. Relative velocity is
resolved along the contact normal, both cars receive lateral/yaw disturbance,
and damage is applied symmetrically above a minimum impact speed. Contact
effects have a short cooldown to avoid repeated damage while cars separate.

## Garage UX

The car preview must stay visible while the player scrolls through selectable
parts. Choosing a part should immediately show a meaningful preview on the car.

Garage livery selection is real state, not a temporary preview. The five team
color pairs are persisted in `f1racer-garage-v1` and applied to the player car
at race startup.

The selector belongs at the top of the scrollable setup panel. On mobile this
keeps the control discoverable and gives every option a thumb-sized target
without taking space away from the fixed car preview.

## Driver Names

The custom friend names currently assigned across teams are:

| Team | Drivers |
| --- | --- |
| Fenice | Dani Muscle |
| Nettuno | Vivian Wendy, Peppy Bau |
| Solare | Cookie, Rocker Pino |
| Smeraldo | Alice AaA, May |
| Artica | Clopy, Lola |

Player driver selection exists as a first slice. A follow-up should prevent the
selected player identity from also appearing as an AI rival in the same race.

Each selectable friend/driver has a cockpit theme with primary, secondary, glow
and short motto values in `driver-themes.js`. Cockpit decoration should stay
data-driven and readable rather than becoming hard-coded camera logic.
