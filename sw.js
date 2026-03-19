self.addEventListener('install', (e) => {
  console.log('Water Time Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});