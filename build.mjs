// Copies the web game into www/ (the folder Capacitor wraps into the native apps).
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of ['index.html', 'manifest.webmanifest', 'sw.js', 'privacy.html', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']) cpSync(f, 'www/' + f);
if (existsSync('audio')) cpSync('audio', 'www/audio', { recursive: true });
console.log('Built www/');
