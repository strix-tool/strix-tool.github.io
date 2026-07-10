// SVG-UI-Mockups für Apps, die noch keine echten Screenshots haben.
// In einem einfachen .js-Modul gehalten, damit die `<svg>`-Strings den .astro-Compiler nicht verwirren.

function meter(y, label, pct, accent, val) {
  const w = Math.round(150 * pct);
  return `
    <text x="26" y="${y + 5}" fill="#9fb0d0" font-size="13" font-family="system-ui">${label}</text>
    <rect x="78" y="${y - 6}" width="150" height="9" rx="4.5" fill="#232c44"/>
    <rect x="78" y="${y - 6}" width="${w}" height="9" rx="4.5" fill="${accent}"/>
    <text x="242" y="${y + 5}" fill="#dce4f6" font-size="12.5" font-family="system-ui" font-weight="600">${val}</text>`;
}

const OPEN = '<svg viewBox="0 0 720 470" xmlns="http://www.w3.org/2000/svg" width="100%" preserveAspectRatio="xMidYMid meet">';
const CLOSE = '</' + 'svg>';

export function mockup(slug, accent) {
  const bg = `<rect width="720" height="470" fill="#0b0f1c"/>
    <rect width="720" height="470" fill="url(#gr)"/>
    <defs><radialGradient id="gr" cx="0.5" cy="0" r="1"><stop offset="0" stop-color="${accent}" stop-opacity="0.16"/><stop offset="0.6" stop-color="#0b0f1c" stop-opacity="0"/></radialGradient></defs>`;

  if (slug === 'strix-pulse-monitor') {
    return `${OPEN}${bg}
      <g transform="translate(205,95)">
        <rect width="310" height="290" rx="20" fill="#111726" stroke="#26314b"/>
        <circle cx="30" cy="34" r="5" fill="${accent}"/>
        <text x="46" y="39" fill="#e7ecf8" font-size="18" font-weight="700" font-family="system-ui">PULSE</text>
        <text x="270" y="39" fill="#6f7ea0" font-size="16" font-family="system-ui">•</text>
        ${meter(90, 'CPU', 0.42, accent, '42%')}
        ${meter(130, 'GPU', 0.68, accent, '68%')}
        ${meter(170, 'RAM', 0.55, accent, '8.7 GB')}
        ${meter(210, 'DISK', 0.30, accent, '30%')}
        <text x="26" y="255" fill="#9fb0d0" font-size="13" font-family="system-ui">NET</text>
        <polyline points="78,258 108,244 138,262 168,238 198,250 228,232 258,246 288,240" fill="none" stroke="${accent}" stroke-width="2.4" stroke-linejoin="round"/>
        <text x="78" y="278" fill="#7fe7cf" font-size="12" font-family="system-ui">DL 4.2 MB/s   UL 0.8 MB/s</text>
      </g>${CLOSE}`;
  }

  if (slug === 'strix-sentinel') {
    const rows = [
      ['HKCU Run', 'OneDrive', ''], ['systemd', 'ssh.service', ''],
      ['Autostart', 'update-agent', 'NEW'], ['Task', 'BackupJob', ''],
    ].map((r, i) => `
      <text x="150" y="${132 + i * 34}" fill="#8fa0c2" font-size="12.5" font-family="system-ui">${r[0]}</text>
      <text x="250" y="${132 + i * 34}" fill="#dce4f6" font-size="13" font-family="system-ui">${r[1]}</text>
      ${r[2] ? `<rect x="600" y="${120 + i * 34}" width="44" height="18" rx="5" fill="#3a1420" stroke="#ef4444"/><text x="608" y="${133 + i * 34}" fill="#ff7a86" font-size="11" font-family="system-ui" font-weight="700">${r[2]}</text>` : ''}`).join('');
    const nav = ['Startup', 'Processes', 'Mic & Cam', 'Logins', 'Network'].map((s, i) => `
      <rect x="52" y="${118 + i * 40}" width="82" height="30" rx="8" fill="${i === 0 ? accent + '26' : 'transparent'}"/>
      <text x="66" y="${138 + i * 40}" fill="${i === 0 ? '#dce4f6' : '#8493b4'}" font-size="12.5" font-family="system-ui">${s}</text>`).join('');
    return `${OPEN}${bg}
      <rect x="40" y="40" width="640" height="390" rx="16" fill="#0f1526" stroke="#26314b"/>
      <text x="66" y="80" fill="#e7ecf8" font-size="17" font-weight="700" letter-spacing="3" font-family="system-ui">SENTINEL</text>
      <circle cx="600" cy="74" r="4.5" fill="#ef4444"/><text x="610" y="79" fill="#ff7a86" font-size="12" font-family="system-ui">CAM</text>
      <line x1="40" y1="98" x2="680" y2="98" stroke="#222c44"/>
      ${nav}
      <line x1="140" y1="108" x2="140" y2="410" stroke="#222c44"/>
      ${rows}${CLOSE}`;
  }

  if (slug === 'strix-inspector') {
    const cards = [['CPU', 'Ryzen 7 · 8C/16T', '4.2 GHz'], ['Memory', '2 x 8 GB DDR4', '3200 MT/s'], ['GPU', 'NVIDIA RTX', '8 GB'], ['Disk', 'NVMe SSD', '1 TB']]
      .map((c, i) => {
        const x = 60 + (i % 2) * 305, y = 120 + Math.floor(i / 2) * 120;
        return `<rect x="${x}" y="${y}" width="280" height="100" rx="14" fill="#111a2e" stroke="#25314c"/>
          <text x="${x + 20}" y="${y + 30}" fill="#8fa0c2" font-size="12.5" font-family="system-ui">${c[0]}</text>
          <text x="${x + 20}" y="${y + 58}" fill="#e7ecf8" font-size="16" font-weight="600" font-family="system-ui">${c[1]}</text>
          <text x="${x + 20}" y="${y + 82}" fill="${accent}" font-size="13" font-family="system-ui">${c[2]}</text>`;
      }).join('');
    return `${OPEN}${bg}
      <rect x="30" y="40" width="660" height="390" rx="16" fill="#0d1424" stroke="#25314c"/>
      <text x="60" y="82" fill="#e7ecf8" font-size="18" font-weight="700" font-family="system-ui">Strix Inspector — Dashboard</text>
      <circle cx="640" cy="76" r="5" fill="${accent}"/>
      <line x1="30" y1="98" x2="690" y2="98" stroke="#20293f"/>
      ${cards}${CLOSE}`;
  }

  if (slug === 'strix-disk-cleaner') {
    const rows = [['/dev/sda', '512 GB', 'SSD', 'erasable', '#37d39a'],
      ['/dev/nvme0n1', '1 TB', 'SSD', 'PROTECTED', '#ff6b7d'],
      ['/dev/sdb', '2 TB', 'HDD', 'erasable', '#37d39a'],
      ['/dev/loop0', '256 MB', 'loop', 'erasable', '#37d39a']]
      .map((r, i) => `<text x="84" y="${180 + i * 30}" fill="#c7d2ea" font-size="12.5" font-family="ui-monospace,monospace">${r[0].padEnd(16)}  ${r[1].padEnd(5)}  ${r[2].padEnd(5)}</text>
        <text x="470" y="${180 + i * 30}" fill="${r[4]}" font-size="12.5" font-weight="700" font-family="ui-monospace,monospace">${r[3]}</text>`).join('');
    return `${OPEN}${bg}
      <rect x="60" y="50" width="600" height="370" rx="14" fill="#0a0e1a" stroke="#25314c"/>
      <rect x="60" y="50" width="600" height="34" rx="14" fill="#141a2b"/>
      <text x="82" y="72" fill="#9fb0d0" font-size="12.5" font-family="ui-monospace,monospace">strixwipe — secure disk eraser</text>
      <text x="84" y="118" fill="#7fe7cf" font-size="13" font-family="ui-monospace,monospace">$ strixwipe list</text>
      <text x="84" y="150" fill="#5f6f92" font-size="12.5" font-family="ui-monospace,monospace">DEVICE            SIZE   TYPE   STATUS</text>
      ${rows}
      <rect x="84" y="315" width="530" height="46" rx="9" fill="#2a1220" stroke="#ef444455"/>
      <text x="100" y="343" fill="#ff9aa4" font-size="12.5" font-family="ui-monospace,monospace">The system / mounted disks are hidden — never erasable.</text>
      ${CLOSE}`;
  }
  if (slug === 'strix-vantage') {
    const rows = [
      ['$ vantage localhost:3000 --profile stealth', accent],
      ['[+] subfinder     3 subdomains found', '#9fb0d0'],
      ['[+] httpx         1 live host (primary)', '#9fb0d0'],
      ['[+] naabu>nmap    3000/tcp open  http', '#9fb0d0'],
      ['[!] nuclei        2 medium   5 info', '#ffd166'],
      ['[+] katana        42 endpoints (/rest, /api)', '#9fb0d0'],
      ['[!] secrets       3 findings (JWT, email)', '#ff9aa4'],
      ['[ok] report       recon_localhost_2026.txt', accent],
    ].map((r, i) => `<text x="84" y="${150 + i * 30}" fill="${r[1]}" font-size="12.5" font-family="ui-monospace,monospace">${r[0]}</text>`).join('');
    return `${OPEN}${bg}
      <rect x="60" y="50" width="600" height="370" rx="14" fill="#0a0e1a" stroke="#25314c"/>
      <rect x="60" y="50" width="600" height="34" rx="14" fill="#141a2b"/>
      <circle cx="80" cy="67" r="4" fill="#ff5c72"/><circle cx="96" cy="67" r="4" fill="#ffb020"/><circle cx="112" cy="67" r="4" fill="#37d39a"/>
      <text x="132" y="72" fill="#9fb0d0" font-size="12.5" font-family="ui-monospace,monospace">vantage — recon automation pipeline</text>
      <text x="84" y="118" fill="${accent}" font-size="13" font-family="ui-monospace,monospace">VANTAGE v2.2  ·  WAF-safe  ·  authorized targets only</text>
      ${rows}${CLOSE}`;
  }
  if (slug === 'strix-archer') {
    const rows = [
      ['$ strix_archer.py -u jackduggan -e jack@shining.lab', accent],
      ['[>] Identity OSINT', '#c9b8ff'],
      ['[+] username      found on 6 / 20 platforms', '#9fb0d0'],
      ['[*] github        commit email: jack@shining.lab', '#ffd166'],
      ['[+] gravatar      "Jack Duggan" · linked accounts', '#9fb0d0'],
      ['[*] breach        XposedOrNot: 2 breaches', '#ff9aa4'],
      ['[+] password      HIBP k-anonymity check (safe)', '#9fb0d0'],
      ['[ok] report       strix_jackduggan_2026.txt / .html', accent],
    ].map((r, i) => `<text x="84" y="${150 + i * 30}" fill="${r[1]}" font-size="12.5" font-family="ui-monospace,monospace">${r[0]}</text>`).join('');
    return `${OPEN}${bg}
      <rect x="60" y="50" width="600" height="370" rx="14" fill="#0a0e1a" stroke="#25314c"/>
      <rect x="60" y="50" width="600" height="34" rx="14" fill="#141a2b"/>
      <circle cx="80" cy="67" r="4" fill="#ff5c72"/><circle cx="96" cy="67" r="4" fill="#ffb020"/><circle cx="112" cy="67" r="4" fill="#37d39a"/>
      <text x="132" y="72" fill="#9fb0d0" font-size="12.5" font-family="ui-monospace,monospace">strix archer — OSINT for authorized lab targets</text>
      <text x="84" y="118" fill="${accent}" font-size="13" font-family="ui-monospace,monospace">STRIX ARCHER  »»———►  ◎   authorized targets only</text>
      ${rows}${CLOSE}`;
  }
  if (slug === 'strix-sinkhole') {
    const rows = [
      ['$ sudo strixsink enable', accent],
      ['[·] hosts file : /etc/hosts   (block enabled)', '#9fb0d0'],
      ['  + doubleclick.net', '#7fe7cf'],
      ['  + google-analytics.com', '#7fe7cf'],
      ['  + vortex.data.microsoft.com', '#7fe7cf'],
      ['  ~ windowsupdate.com   kept: critical, never blocked', '#ffd166'],
      ['  ~ localhost            kept: your entries untouched', '#ffd166'],
      ['[ok] 174 blackholed · backup saved · revert in 1 click', accent],
    ].map((r, i) => `<text x="84" y="${150 + i * 30}" fill="${r[1]}" font-size="12.5" font-family="ui-monospace,monospace">${r[0]}</text>`).join('');
    return `${OPEN}${bg}
      <rect x="60" y="50" width="600" height="370" rx="14" fill="#0a0e1a" stroke="#25314c"/>
      <rect x="60" y="50" width="600" height="34" rx="14" fill="#141a2b"/>
      <circle cx="80" cy="67" r="4" fill="#ff5c72"/><circle cx="96" cy="67" r="4" fill="#ffb020"/><circle cx="112" cy="67" r="4" fill="#37d39a"/>
      <text x="132" y="72" fill="#9fb0d0" font-size="12.5" font-family="ui-monospace,monospace">strixsink — offline hosts-file tracker/ad blocker</text>
      <text x="84" y="118" fill="${accent}" font-size="13" font-family="ui-monospace,monospace">STRIX SINKHOLE  ◎ → 0.0.0.0   offline · reversible</text>
      ${rows}${CLOSE}`;
  }
  if (slug === 'strix-talon') {
    const rows = [
      ['APP              REMOTE            PORT  STATE', '#5f6f92'],
      ['chrome.exe       142.250.187.4     443   ESTABLISHED', '#9fb0d0'],
      ['● Update.exe     45.33.9.12        8080  ESTABLISHED   new', '#ffd166'],
      ['spotify.exe      35.186.224.25     443   ESTABLISHED', '#9fb0d0'],
      ['svchost.exe      20.190.160.14     443   TIME_WAIT', '#9fb0d0'],
      ['[block] Update.exe → all outbound denied (StrixTalon)', '#ff9aa4'],
      ['[listen] 0.0.0.0:135  EXPOSED · 127.0.0.1:5432 local', '#7fe7cf'],
      ['[kill-switch] OFF · loopback always reachable', accent],
    ].map((r, i) => `<text x="84" y="${150 + i * 30}" fill="${r[1]}" font-size="12.5" font-family="ui-monospace,monospace">${r[0]}</text>`).join('');
    return `${OPEN}${bg}
      <rect x="60" y="50" width="600" height="370" rx="14" fill="#0a0e1a" stroke="#25314c"/>
      <rect x="60" y="50" width="600" height="34" rx="14" fill="#141a2b"/>
      <circle cx="80" cy="67" r="4" fill="#ff5c72"/><circle cx="96" cy="67" r="4" fill="#ffb020"/><circle cx="112" cy="67" r="4" fill="#37d39a"/>
      <text x="132" y="72" fill="#9fb0d0" font-size="12.5" font-family="ui-monospace,monospace">strix talon — per-app outbound firewall & monitor</text>
      <text x="84" y="118" fill="${accent}" font-size="13" font-family="ui-monospace,monospace">STRIX TALON  ◆  live egress · OS firewall · no driver</text>
      ${rows}${CLOSE}`;
  }
  return `${OPEN}${bg}${CLOSE}`;
}
