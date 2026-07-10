const iconPaths = {
  sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 18v4"/><path d="M15 20h4"/>',
  languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.01 17.461 2 12 2z"/>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  "git-compare": '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  highlighter: '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/><path d="M14.5 4.5 16 3l4 4-1.5 1.5"/><path d="m21 15-1-1"/>',
  "list-checks": '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
  dna: '<path d="m2 15 2.79-4.73a2.89 2.89 0 0 1 4.94-1.06l1.59 1.591"/><path d="M8 21l4.58-7.757a2.89 2.89 0 0 1 4.94-1.06l1.59 1.591"/><path d="M2 15h8.79a2 2 0 0 0 1.76-1.03l.54-.98"/><path d="m2 9 2.79 4.73a2.89 2.89 0 0 0 4.94 1.06l1.59-1.591"/><path d="m8 3 4.58 7.757a2.89 2.89 0 0 0 4.94 1.06l1.59-1.591"/><path d="M22 9h-8.79a2 2 0 0 1-1.76 1.03l-.54.98"/>',
  feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  "file-code": '<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><path d="M14 2v6h6"/><path d="m9 18 3-3-3-3"/><path d="m5 12-3 3 3 3"/>',
  "pen-tool": '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.5 8.6"/><path d="M22 22l-5.5-5.5"/>',
  layout: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  hammer: '<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l5.385 5.385"/>',
  "gamepad-2": '<path d="M6 11h4"/><path d="M8 9v4"/><path d="M15 12h.01"/><path d="M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
  newspaper: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>',
  "file-text": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  presentation: '<path d="M4 2v20l4-4 4 4V2"/><path d="m18 6 3 4-3 4"/><path d="m15 6-3 4 3 4"/>',
  "monitor-play": '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="m12 7-4 3 4 3z"/><path d="M8 21h8"/><path d="M12 17v4"/>',
  "image": '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  "wand-2": '<path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="m17.8 11.8 1.4 1.4"/><path d="m15 6.2-1.4-1.4"/><path d="m17.8 6.2 1.4-1.4"/><path d="m15 11.8-1.4 1.4"/><path d="m2 18 6-6"/><circle cx="19" cy="19" r="3"/>',
  "film": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7.5h4"/><path d="M17 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 16.5h4"/>',
  "sparkle": '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
  "bar-chart-3": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "clapperboard": '<path d="M20.2 6 3 11l-.8-1.5 17.2-5 .8 1.5Z"/><path d="M6.5 13.5 15 3.5"/><path d="M22 17c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V9c0-2.8 2.2-5 5-5h10c2.8 0 5 2.2 5 5z"/>',
  "heart-pulse": '<path d="M19.5 12.572l-7.5 7.428l-7.5-7.428A5 5 0 1 1 12 5.006a5 5 0 1 1 7.5 7.572"/>',
  "joystick": '<path d="M11 11V3a2 2 0 1 0-2-2"/><path d="M13 11V3a2 2 0 1 1 2-2"/><path d="M20 13a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"/><path d="M8 21h8"/>',
  "accessibility": '<circle cx="16" cy="4" r="2"/><path d="m6 8 4 2 2 2 4 2"/><path d="M6 22l3-8"/>',
  "mouse-pointer-click": '<path d="M9 9l5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="M6 12 4 14"/>',
  "layers": '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  "file-check": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
  "refresh-cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="m12 22 4-13-3-6"/><path d="M12 22 8 9l3-6"/><path d="m2 9 10 13 10-13"/>',
  table: '<path d="M12 3v18"/><path d="M3 7.5h18"/><path d="M21 7.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9"/><path d="M3 12h18"/><path d="M3 16.5h18"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  cpu: '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
  type: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v4"/><path d="m5 16 4-2.5"/><path d="m19 16-4-2.5"/>',
  "monitor-smartphone": '<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v2"/><path d="M10 13v2"/><path d="M14 19h9"/><path d="M14 13h9"/><rect width="6" height="10" x="18" y="8" rx="2"/>',
  video: '<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>',
  fingerprint: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.42 10c.1.29.33 1.16.4 1.75"/><path d="M9 13.12c0 2.38 0 6.38-1 8.88"/><path d="M6.29 21.02c.12-.6.43-2.3.5-3.02"/>',
  "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>',
  "swatch-book": '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="m8 7 3 3"/><path d="m13 7-3 3"/>',
  "puzzle": '<circle cx="6" cy="6" r="3"/><path d="M9 12h3"/><path d="M15 8h3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>',
  "file-cog": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><circle cx="12" cy="14" r="3"/><path d="M12 11v1"/><path d="M12 16v1"/>',
  "test-tubes": '<path d="M8 3v7"/><path d="M16 3v7"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/><path d="m9 16 1 2"/><path d="m17 16 1 2"/><path d="M8 10h8"/>',
  "radar": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "map": '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  "workflow": '<rect width="4" height="4" x="2" y="2" rx="1"/><rect width="4" height="4" x="14" y="2" rx="1"/><rect width="4" height="4" x="8" y="12" rx="1"/><path d="M6 4h8"/><path d="m10 6 2 6"/><path d="m12 18-2 6"/><path d="m12 18 2 6"/>',
  "scissors": '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  "music": '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  "mic": '<path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19a7 7 0 0 0 7-7v-2"/><path d="M5 10v2a7 7 0 0 0 7 7"/><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>',
  "camera": '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  "trending-up": '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  "database": '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  "scale": '<path d="m16 16 3-8 3 8c-.87.2-1.8.2-3 .2s-2.13-.02-3-.2Z"/><path d="m2 16 3-8 3 8c-.87.2-1.8.2-3 .2s-2.13-.02-3-.2Z"/><path d="M7 21h10"/>',
  "activity": '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  "bot": '<path d="M12 8V4H8"/><path d="M8 20v-4h4"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  "landmark": '<path d="M3 22h18"/><path d="M6 18v-7l6-4 6 4v7"/><path d="M6 11h12"/>',
  "eraser": '<path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>',
  "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  "bar-chart": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>'
};

function getIconSvg(name, size) {
  size = size || 20;
  var path = iconPaths[name];
  if (!path) {
    // 处理 emoji 或未知 icon：直接返回文本
    if (name && name.length <= 4) return '<span style="font-size:' + size + 'px;line-height:1">' + name + '</span>';
    path = iconPaths['sparkles'];
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text, query) {
  if (!query || !query.trim()) return text;
  var regex = new RegExp('(' + escapeRegex(query) + ')', 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ===== 5 Star Rating (可视化) =====
function renderStars(stars) {
  var filled = '&#9733;';
  var empty = '&#9734;';
  var s = Math.max(0, Math.min(5, Math.round(stars || 0)));
  return '<span class="card-stars-inline" title="' + s + '星推荐">' + filled.repeat(s) + empty.repeat(5 - s) + '</span>';
}

function renderSkillCard(skill, query) {
  var iconSvg = getIconSvg(skill.icon);
  var cnName = highlightText(skill.cnName || '', query);
  var enName = highlightText(skill.enName || '', query);
  var summary = highlightText(skill.summary || '', query);
  var description = highlightText(skill.description || '', query);
  var starsHtml = renderStars(skill.stars || 5);
  var linkSvg = getIconSvg('external-link', 14);
  var linkHtml = skill.url
    ? '<a href="' + skill.url + '" class="card-link" target="_blank" rel="noopener noreferrer" title="查看仓库" onclick="event.stopPropagation();">' + linkSvg + '</a>'
    : '';

  return '<article class="skill-card" data-skill-id="' + (skill.id || '') + '">' +
    '<div class="card-header">' +
      '<div class="card-icon" aria-hidden="true">' + iconSvg + '</div>' +
      '<div class="card-title-group">' +
        '<div class="card-title-row">' +
          '<h3 class="card-cn-name">' + cnName + '</h3>' +
          linkHtml +
        '</div>' +
        '<p class="card-en-name">' + enName + ' ' + starsHtml + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="card-body">' +
      '<p class="card-summary">' + summary + '</p>' +
      '<div class="card-divider" aria-hidden="true"></div>' +
      '<p class="card-description">' + description + '</p>' +
    '</div>' +
  '</article>';
}

// ===== 分页配置 =====
var PAGE_SIZE = 50;

function renderSubcategory(sub, query) {
  var sortedSkills = sub.skills.slice().sort(function(a, b) { return (b.stars || 3) - (a.stars || 3); });
  var total = sortedSkills.length;
  var initialSkills = sortedSkills.slice(0, PAGE_SIZE);
  var hasMore = total > PAGE_SIZE;
  var skillsHtml = initialSkills.map(function(s) { return renderSkillCard(s, query); }).join('');

  var loadMoreBtn = '';
  if (hasMore) {
    loadMoreBtn = '<button class="load-more-btn" data-subcategory-id="' + sub.id +
      '" data-category-id="' + (sub.parentCatId || '') +
      '" data-offset="' + PAGE_SIZE + '">' +
      '显示更多 (' + (total - PAGE_SIZE) + ' 个剩余)</button>';
  }

  return '<div class="subcategory" data-subcategory-id="' + sub.id + '">' +
    '<div class="subcategory-header">' +
      '<span class="subcategory-dot"></span>' +
      '<h3 class="subcategory-title">' + sub.name +
        ' <span class="subcategory-count">(' + total + ')</span>' +
      '</h3>' +
    '</div>' +
    '<div class="card-grid" data-subcategory-grid="' + sub.id + '">' +
      skillsHtml +
    '</div>' +
    loadMoreBtn +
  '</div>';
}

function renderCategory(cat, query) {
  var subsHtml = cat.subcategories.map(function(sub) { return renderSubcategory(sub, query); }).join('');
  return '<section class="category" data-category-id="' + cat.id + '">' +
    subsHtml +
  '</section>';
}

// ===== "加载更多"按钮绑定 =====
function bindLoadMoreButtons() {
  document.querySelectorAll('.load-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var subId = this.dataset.subcategoryId;
      var catId = this.dataset.categoryId;
      var offset = parseInt(this.dataset.offset, 10);
      var grid = document.querySelector('[data-subcategory-grid="' + subId + '"]');
      if (!grid) return;

      // 找到对应 subcategory 的完整 skills
      var sub = findSubcategory(catId, subId);
      if (!sub) return;

      var sortedSkills = sub.skills.slice().sort(function(a, b) { return (b.stars || 3) - (a.stars || 3); });
      var nextBatch = sortedSkills.slice(offset, offset + PAGE_SIZE);
      var html = nextBatch.map(function(s) { return renderSkillCard(s, ''); }).join('');
      grid.insertAdjacentHTML('beforeend', html);

      var newOffset = offset + PAGE_SIZE;
      if (newOffset >= sortedSkills.length) {
        this.remove();
      } else {
        this.dataset.offset = String(newOffset);
        this.textContent = '显示更多 (' + (sortedSkills.length - newOffset) + ' 个剩余)';
      }
    });
  });
}

function findSubcategory(catId, subId) {
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].id === catId) {
      for (var j = 0; j < categories[i].subcategories.length; j++) {
        if (categories[i].subcategories[j].id === subId) {
          return categories[i].subcategories[j];
        }
      }
    }
  }
  return null;
}

// ===== Sidebar Rendering =====
var currentFilter = { categoryId: null, subcategoryId: null };

function renderSidebar() {
  var menu = document.getElementById('sidebarMenu');
  if (!menu) return;

  var html = '';
  categories.forEach(function(cat) {
    var totalSkills = cat.subcategories.reduce(
      function(sum, sub) { return sum + sub.skills.length; }, 0
    );

    html += '<li class="sidebar-category">' +
      '<button class="sidebar-category-btn" data-category-id="' + cat.id + '">' +
        '<span>' + cat.name + '</span>' +
        '<span class="sidebar-category-count">' + totalSkills + '</span>' +
      '</button>';

    if (cat.subcategories.length > 1) {
      html += '<ul class="sidebar-subcategories">';
      cat.subcategories.forEach(function(sub) {
        html += '<li class="sidebar-subcategory-item">' +
          '<button class="sidebar-subcategory-btn" data-subcategory-id="' + sub.id + '" data-parent-category="' + cat.id + '">' +
            '<span>' + sub.name + '</span>' +
            '<span class="sidebar-subcategory-count">' + sub.skills.length + '</span>' +
          '</button>' +
        '</li>';
      });
      html += '</ul>';
    }

    html += '</li>';
  });

  menu.innerHTML = html;

  // Bind click events
  menu.querySelectorAll('.sidebar-category-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      handleCategoryFilter(this.dataset.categoryId);
    });
  });

  menu.querySelectorAll('.sidebar-subcategory-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      handleSubcategoryFilter(this.dataset.parentCategory, this.dataset.subcategoryId);
    });
  });
}

function handleCategoryFilter(categoryId) {
  if (currentFilter.categoryId === categoryId && !currentFilter.subcategoryId) {
    currentFilter = { categoryId: null, subcategoryId: null };
  } else {
    currentFilter = { categoryId: categoryId, subcategoryId: null };
  }
  updateSidebarActiveState();
  renderApp(document.getElementById('searchInput').value);
}

function handleSubcategoryFilter(categoryId, subcategoryId) {
  if (currentFilter.subcategoryId === subcategoryId) {
    currentFilter = { categoryId: categoryId, subcategoryId: null };
  } else {
    currentFilter = { categoryId: categoryId, subcategoryId: subcategoryId };
  }
  updateSidebarActiveState();
  renderApp(document.getElementById('searchInput').value);
}

function handleResetFilter() {
  currentFilter = { categoryId: null, subcategoryId: null };
  updateSidebarActiveState();
  renderApp(document.getElementById('searchInput').value);
}

function updateSidebarActiveState() {
  document.querySelectorAll('.sidebar-category-btn').forEach(function(btn) {
    btn.classList.toggle('active',
      btn.dataset.categoryId === currentFilter.categoryId && !currentFilter.subcategoryId
    );
  });
  document.querySelectorAll('.sidebar-subcategory-btn').forEach(function(btn) {
    btn.classList.toggle('active',
      btn.dataset.subcategoryId === currentFilter.subcategoryId
    );
  });
  var resetBtn = document.getElementById('sidebarReset');
  if (resetBtn) {
    resetBtn.classList.toggle('active', currentFilter.categoryId === null);
  }
}

// ===== Search & Filtering =====
function getMatchPriority(skill, query) {
  if (!query) return 0;
  var q = query.toLowerCase();
  var en = (skill.enName || '').toLowerCase();
  var cn = (skill.cnName || '').toLowerCase();
  var summary = (skill.summary || '').toLowerCase();
  var desc = (skill.description || '').toLowerCase();

  if (en.includes(q)) return 4;
  if (cn.includes(q)) return 3;
  if (summary.includes(q)) return 2;
  if (desc.includes(q)) return 1;
  return 0;
}

function countTotalSkills() {
  return window.allSkills ? window.allSkills.length :
    categories.reduce(function(total, cat) {
      return total + cat.subcategories.reduce(function(subTotal, sub) { return subTotal + sub.skills.length; }, 0);
    }, 0);
}

function updateSearchStats(filteredCount, totalCount, hasQuery) {
  var countEl = document.getElementById('statsCount');
  if (!countEl) return;
  if (hasQuery) {
    countEl.textContent = '找到 ' + filteredCount + ' / ' + totalCount + ' 个 Skill';
  } else {
    countEl.textContent = '共 ' + totalCount + ' 个 Skill';
  }
}

function renderApp(query) {
  var mainContent = document.getElementById('mainContent');
  var emptyState = document.getElementById('emptyState');

  if (!mainContent) return;

  var normalizedQuery = query ? query.trim().toLowerCase() : '';
  var totalCount = countTotalSkills();

  // ===== 搜索模式：使用扁平数组 O(n) 一次遍历 =====
  if (normalizedQuery && window.allSkills) {
    var matchedSkills = window.allSkills.filter(function(sk) {
      return getMatchPriority(sk, normalizedQuery) > 0;
    }).sort(function(a, b) {
      var pa = getMatchPriority(a, normalizedQuery);
      var pb = getMatchPriority(b, normalizedQuery);
      if (pb !== pa) return pb - pa;
      return (b.stars || 3) - (a.stars || 3);
    });

    // 按分类分组
    var groupedBySub = new Map();
    matchedSkills.forEach(function(sk) {
      var key = sk.c + '-' + sk.s;
      if (!groupedBySub.has(key)) groupedBySub.set(key, []);
      groupedBySub.get(key).push(sk);
    });

    // 构建 HTML
    var catMap = window.categoryMap;
    var html = '';
    groupedBySub.forEach(function(skills, key) {
      var info = catMap ? catMap.get(key) : null;
      if (!info) return;
      html += '<div class="subcategory">' +
        '<div class="subcategory-header">' +
          '<span class="subcategory-dot"></span>' +
          '<h3 class="subcategory-title">' + info.catName + ' / ' + info.subName +
            ' <span class="subcategory-count">(' + skills.length + ')</span>' +
          '</h3>' +
        '</div>' +
        '<div class="card-grid">' +
          skills.map(function(s) { return renderSkillCard(s, normalizedQuery); }).join('') +
        '</div>' +
      '</div>';
    });

    updateSearchStats(matchedSkills.length, totalCount, true);
    if (matchedSkills.length === 0) {
      mainContent.innerHTML = '';
      emptyState.classList.add('active');
    } else {
      emptyState.classList.remove('active');
      mainContent.innerHTML = html;
    }
    return;
  }

  // ===== 非搜索模式：按分类渲染（带分页）=====
  // Step 1: Category/subcategory filtering
  var filteredByCategory = categories;
  if (currentFilter.categoryId) {
    filteredByCategory = categories.filter(function(cat) { return cat.id === currentFilter.categoryId; });
  }

  // Step 2: Build HTML with pagination
  var filteredCategories = filteredByCategory.map(function(cat) {
    var filteredSubs = cat.subcategories.map(function(sub) {
      if (currentFilter.subcategoryId && sub.id !== currentFilter.subcategoryId) {
        return { id: sub.id, name: sub.name, parentCatId: sub.parentCatId, skills: [] };
      }
      return sub;
    }).filter(function(sub) { return sub.skills.length > 0; });
    return { id: cat.id, subcategories: filteredSubs };
  }).filter(function(cat) { return cat.subcategories.length > 0; });

  var filteredCount = filteredCategories.reduce(function(total, cat) {
    return total + cat.subcategories.reduce(function(subTotal, sub) { return subTotal + sub.skills.length; }, 0);
  }, 0);

  updateSearchStats(filteredCount, totalCount, false);

  if (filteredCategories.length === 0) {
    mainContent.innerHTML = '';
    emptyState.classList.add('active');
  } else {
    emptyState.classList.remove('active');
    mainContent.innerHTML = filteredCategories.map(function(cat) {
      return '<section class="category" data-category-id="' + cat.id + '">' +
        cat.subcategories.map(function(sub) { return renderSubcategory(sub, ''); }).join('') +
      '</section>';
    }).join('');

    // 绑定"加载更多"按钮
    bindLoadMoreButtons();
  }
}

// Expose for search.js
window.renderApp = renderApp;
window.handleResetFilter = handleResetFilter;
window.renderSidebar = renderSidebar;
