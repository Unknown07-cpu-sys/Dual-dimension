# Publishing Dual Dimensions to Google Play and the App Store

The game is plain web tech (HTML + JavaScript). [Capacitor](https://capacitorjs.com) wraps it into real Android and iOS apps. The same code powers the website, the installable web app (PWA), and both store apps.

## What is already done

- Installable and offline-capable (`manifest.webmanifest`, `sw.js`)
- Landscape, fullscreen, safe-area aware (notches), auto-pause when the app is backgrounded, Android back button handling, vibration feedback
- App icons, a Play Store feature graphic and a 1024px store icon (`store-assets/`)
- A privacy policy page (`privacy.html`) and store listing text (below)
- A GitHub Actions workflow that builds the Android app in the cloud (`.github/workflows/android.yml`)

## What only you can do

- Create developer accounts: **Google Play** (one-time fee, about $25) and **Apple Developer Program** (about $99/year). I can't sign up for these or pay for them.
- Take real screenshots of the game on a phone and upload them.
- Press "submit" in the store consoles.

## Step 0: Put the files in your repo

1. Upload all files from the zip to your repo (Chrome or Edge work best for dragging folders).
2. If the `.github` folder doesn't upload, click **Add file → Create new file**, type `.github/workflows/android.yml` as the name (typing the slashes creates the folders), and paste in the contents of that file.
3. Make sure GitHub Pages still serves the game at your play link.

## Android (Google Play)

**A. Test build, no setup needed**
1. On GitHub: **Actions → Build Android app → Run workflow**.
2. When it finishes, open the run and download the **dual-dimensions-debug-apk** artifact. Unzip it and install `app-debug.apk` on an Android phone to try it. (You may need to allow "install unknown apps".)

**B. Create a signing key (once)**
Install Java, then run:
```
keytool -genkey -v -keystore upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
Back up `upload.jks` and the passwords somewhere safe, and **never commit them to GitHub**. Then encode it: on Mac/Linux run `base64 -w0 upload.jks`, and on Windows PowerShell run `[Convert]::ToBase64String([IO.File]::ReadAllBytes("upload.jks"))`.

In your repo go to **Settings → Secrets and variables → Actions** and add:
`ANDROID_KEYSTORE_BASE64` (the long text from above), `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS` (use `upload`), `ANDROID_KEY_PASSWORD`.

**C. Build the release bundle**
Run the workflow again. This time it also produces **dual-dimensions-release-aab**, the file Google Play wants.

**D. Play Console**
1. Create the app, then fill in the store listing (text below), upload the icon and feature graphic from `store-assets/`, and add phone screenshots.
2. Privacy policy URL: `https://unknown07-cpu-sys.github.io/Dual-dimension/privacy.html`
3. Data safety: **no data collected, no data shared**. Ads: **none**.
4. Upload the `.aab` to a testing track first. New personal developer accounts must run a **closed test with a minimum number of testers for a minimum period** before production access. Check the Play Console for the current numbers.
5. Google Play currently requires new apps to target Android 16 (API 36). The workflow installs the latest Capacitor, which should handle this. Check the Play Console's warnings when you upload.

## iOS (App Store)

Apple requires a **Mac with the current Xcode**. There is no way around this.

1. On the Mac: install Node.js, then run `npm install`, `npm run build`, `npx cap add ios`, `npx cap sync ios`, `npx cap open ios`.
2. In Xcode: select your Apple Developer team, set the bundle ID, and set orientation to Landscape only.
3. Generate icons: put `store-assets/icon-1024.png` at `assets/icon-only.png`, then run `npx @capacitor/assets generate`.
4. Product → Archive → Distribute App → App Store Connect.
5. In App Store Connect: add screenshots, the privacy policy URL, and "App Privacy: Data Not Collected". Submit for review.

**Heads-up:** Apple rejects apps that feel like a website in a wrapper (guideline 4.2). A polished offline game with haptics, a full level progression and no browser UI normally passes, but more levels and polish make approval more likely.

## Store listing text

**Title:** Dual Dimensions: Shift Puzzle

**Short description (80 chars):** Shift between Light and Shadow to solve puzzles. Offline and ad-free.

**Full description:**
Two dimensions. One hero. Everything changes when you shift.

Dual Dimensions is a puzzle-platformer where platforms, walls and spikes exist in only one of two worlds, Light or Shadow. Collect every shard, find the portal and master the timing of your shifts.

- 10 handcrafted levels that build from simple to mind-bending
- Shift in mid-air to land on platforms that only exist in the other world
- Walls and spikes that change between dimensions
- Earn up to 3 stars per level by beating the par time
- Plays offline. No ads, no in-app purchases, no tracking
- Designed and coded entirely by AI

**Category:** Games > Puzzle (or Platformer)
**Age rating:** everyone (abstract, no violence besides touching spikes, no user-generated content)
**Keywords (App Store):** puzzle,platformer,dimension,shift,logic,offline,brain,indie

## Before you launch

- Play every level on a real phone and report anything unfair.
- Add more levels: a store game with 10 short levels is thin. Worlds 2 and 3 with new mechanics are the next step.
