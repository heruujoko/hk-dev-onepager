const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync(`${__dirname}/onepager.html`, 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'IDs must be unique');
for (const [, id] of html.matchAll(/aria-labelledby="([^"]+)"/g)) {
  assert(ids.includes(id), `Missing heading: ${id}`);
}
for (const text of ['Usulan pendanaan', 'Persetujuan yang diminta', 'Penggunaan dana', 'Anggaran: belum ditetapkan', 'Durasi: belum ditetapkan', 'Dasar evaluasi investasi', 'Hanya-baca', 'prefers-reduced-motion', 'A4 landscape', 'csv-card', 'laporan_penjualan']) {
  assert(html.includes(text), `Missing proposal requirement: ${text}`);
}
assert(!html.includes('Hens Kristal'), 'Brand must be Henskristal');
assert(!/<script|<button|<form|https?:\/\//i.test(html), 'Presentation must be static and self-contained');
console.log('PASS: funding proposal content, heading references, brand, CSV embedded mockup, reduced motion, landscape print and standalone HTML.');
