// 1. Force the waiting service worker to become the active service worker.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 2. Ensure that updates to the service worker take effect immediately 
// across all open tabs/clients.
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// 3. Essential fetch listener to satisfy PWA 'Install' requirements.
// We pass the request through to the network without touching the cache.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
