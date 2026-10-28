# Changelog

## 1.1.1
- Music: crossfades are now explicit and exact (only one stem audible at a time), respawning snaps straight to the Light stem, and the Light/Shadow loops are locked to the same length so they can't drift
- Touch controls: larger labeled JUMP and SHIFT buttons, nearest-button detection, and the buttons hide if a keyboard is used
- "Rotate your phone" prompt in portrait, automatic pause when rotated, and fullscreen + landscape lock on the first tap where supported
- Level 2 hint now mentions the SHIFT button

## 1.1.0
- Music is now played from audio files in `audio/`: a Light/Shadow pair that crossfades when you shift, a menu loop and a win jingle
- Removed the built-in synthesized drone; music is on by default once files exist

## 1.0.0
- Store-ready: installable offline web app (PWA) plus Capacitor setup for Android and iOS
- Landscape fullscreen, notch-safe layout, auto-pause when backgrounded, tap to resume, Android back button support
- Vibration feedback with a Vibration toggle (V or the level menu)
- New app icon, store icon, feature graphic and privacy policy
- Cloud Android build workflow and a full publishing guide (PUBLISHING.md)

## 0.3.1
- Quieter, softer sound effects; no sound on jumps
- Ambient music is now off by default and optional (N key or menu toggle)
- Sound and music toggles added to the level menu

## 0.3.0
- Reorganized the code into clear sections (level data separate from the engine)
- Title screen with level select, saved progress, best times and star ratings
- New mechanic: dimension-locked spikes (orange = Light only, purple = Shadow only)
- Levels 7-10 added (10 total) and par times for every level
- Synthesized ambient music that follows the dimension, plus mute (M) and pause (P)
- Touch menu button; Esc returns to the level select
- Rewrote the README, added this changelog and a proper `.gitignore`

## 0.2.0
- Rewrote the game as a dimension-shifting platformer with 6 levels with touch controls and saved progress

## 0.1.0
- Original Phaser prototype (two characters in parallel grids)
