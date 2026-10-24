// Copies the web game into www/ (the folder Capacitor wraps into the native apps).
import { cpSync, mkdirSync, rmSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of ['index.html', 'manifest.webmanifest', 'sw.js', 'privacy.html', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']) cpSync(f, 'www/' + f);
console.log('Built www/');
