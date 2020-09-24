var cacheName = 'hit238-sprint-3';
var filesToCache = [
  '/hit238-sprint-3',
  '/hit238-sprint-3/index.html',
  '/hit238-sprint-3/styles/explore.css',
  '/hit238-sprint-3/scripts/explore.js',
  '/hit238-sprint-3/scripts/dest-requests.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
