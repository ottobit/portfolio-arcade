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

## Garage UX

The car preview must stay visible while the player scrolls through selectable
parts. Choosing a part should immediately show a meaningful preview on the car.

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