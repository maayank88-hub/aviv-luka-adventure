const CACHE = 'aviv-luka-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './aviv_standing.png',
  './aviv_walk_right.png',
  './aviv_walk_left.png',
  './luka_standing.png',
  './luka_walk_right.png',
  './luka_walk_left.png',
  './bone.png',
  './cookie.png',
  './road.png',
  './cat.png',
  './tree.png',
  './tree2.png',
  './bush.png',
  './bench.png',
  './swing.png',
  './swing2.png',
  './slide.png',
  './cloud.png',
  './logo.png',
  './splash_bg.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
