# Music for Dual Dimensions

Drop your music files in this folder. Use these exact names. Any file that is missing is simply skipped, so you can add them one at a time.

| File | What it is | Required? |
|---|---|---|
| `light.mp3` | The main game loop, **Light** mood | Yes |
| `shadow.mp3` | The same loop, **Shadow** mood | Yes |
| `menu.mp3` | Title / level-select loop | Recommended |
| `win.mp3` | Level-complete jingle, 2-4 seconds, does not loop | Optional |

Also supply `.ogg` versions with the same names if you can (`light.ogg`, `shadow.ogg`, ...). The game picks `.ogg` when the device supports it, which gives the cleanest looping, and falls back to `.mp3`.

## `light` and `shadow` must be a matched pair

The game plays both at the same time and crossfades between them when the player shifts dimension. So they must be:
- **the same length, to the exact sample** (export both from the same project with the same loop points)
- **the same tempo, key and chord progression**, but with a different mood

**Light:** warm, bright, airy. Major key, soft plucks, piano, bells or mallets, gentle pads.
**Shadow:** the same musical idea, darker. Minor or modal feel, lower register, muted or detuned tones, more reverb, a slow pulse.

## Technical specs

- **Loops:** 30-60 seconds, a whole number of bars (e.g. 16 bars at 100 BPM = 38.4 s)
- **Seamless:** the end must flow back into the start. Let the reverb tail wrap around to the beginning. Trim leading and trailing silence.
- **Style:** ambient, calm, mid-tempo puzzle music that stays interesting after 30 minutes. No loud lead melody, no harsh highs, no heavy drums. Think "relaxed thinking".
- **Mix:** leave headroom (peaks below -1 dB) and keep it fairly quiet and even, roughly -18 LUFS. The game plays it at 70% volume.
- **Format:** stereo, 44.1 kHz, MP3 at 128-192 kbps (or OGG Vorbis quality 5-6). Keep each file under about 1.5 MB.
- **`win`:** short and happy, ends cleanly, no long silence.

## Licensing

Use music you made yourself, or music whose license allows **commercial use in an app**. No copyrighted songs. If you used an AI music tool, check that your plan gives you commercial rights. Put a credit line in the main README if the license requires one.

