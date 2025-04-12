self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('clicker')) {
    event.respondWith(new Response('OK', { status: 200 }));
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
});
