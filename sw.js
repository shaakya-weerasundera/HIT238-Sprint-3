var cacheName = 'HIT238-Sprint-3';
var filesToCache = [
  '/HIT238-Sprint-3',
  '/HIT238-Sprint-3/index.html',
  '/HIT238-Sprint-3/styles/explore.css',
  '/HIT238-Sprint-3/scripts/explore.js',
  '/HIT238-Sprint-3/scripts/dest-requests.js',
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
