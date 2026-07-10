// Konfiguration für Direkt-Downloads. Verwendet die permanenten
// `releases/latest/download/<file>`-URLs von GitHub Releases, die die Datei direkt an den
// Benutzer streamen — ohne zwischengeschaltete GitHub-Seite. Die Release-CI muss Assets mit
// exakt diesen Namen veröffentlichen (siehe die .github/workflows/release.yml jedes Repos). Bis das
// erste Release getaggt ist, verweisen diese auf die Releases-Seite.
import { repoUrl, releasesUrl } from './apps.js';

export const VERSION = '1.0.0';
export const assetUrl = (slug, file) =>
  `${repoUrl(slug)}/releases/latest/download/${file}`;
export const checksums = (slug) => assetUrl(slug, 'SHA256SUMS');
export { releasesUrl };

// Pro App: was für jedes OS angeboten wird.
export const downloads = {
  'strix-metavault': {
    windows: { file: 'Strix-MetaVault-Setup.exe', kind: 'installer' },
    linux: { file: `strix-metavault_${VERSION}_all.deb`, kind: 'deb' },
  },
  'strix-pulse-monitor': {
    windows: { file: 'Strix-Pulse-Monitor-Setup.exe', kind: 'installer' },
    linux: { file: `strix-pulse-monitor_${VERSION}_all.deb`, kind: 'deb' },
  },
  'strix-sentinel': {
    windows: { file: 'Strix-Sentinel-Windows.zip', kind: 'portable' },
    linux: { file: `strix-sentinel_${VERSION}_all.deb`, kind: 'deb' },
  },
  'strix-inspector': {
    windows: { file: 'Strix-Inspector-Setup.exe', kind: 'installer' },
    linux: { file: `strix-inspector_${VERSION}_amd64.deb`, kind: 'deb' },
  },
  'strix-disk-cleaner': {
    windows: { file: `Strix-Disk-Cleaner-Setup.exe`, kind: 'installer' },
    linux: { file: `strix-disk-cleaner_${VERSION}_all.deb`, kind: 'deb' },
  },
  'strix-vantage': {
    // Nur Linux/Kali, verteilt als einzelnes Python-Skript (kein Windows-Build).
    linux: { file: 'vantage.py', kind: 'script' },
  },
  'strix-archer': {
    linux: { file: 'strix_archer.py', kind: 'script' },
  },
  'strix-sinkhole': {
    windows: { file: 'Strix-Sinkhole-Setup.exe', kind: 'installer' },
    linux: { file: `strix-sinkhole_${VERSION}_all.deb`, kind: 'deb' },
  },
  'strix-talon': {
    windows: { file: 'Strix-Talon-Setup.exe', kind: 'installer' },
    linux: { file: `strix-talon_${VERSION}_all.deb`, kind: 'deb' },
  },
};

export const kindLabel = {
  installer: 'Setup wizard',
  deb: 'Debian / Ubuntu package',
  portable: 'Portable ZIP',
  script: 'Python script (Kali/Linux)',
};
