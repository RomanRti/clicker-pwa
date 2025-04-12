self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => clients.claim());

self.addEventListener('message', event => {
  if (event.data.type === 'notify') {
    const count = event.data.count;
    self.registration.showNotification("Clicker", {
      body: `Кликов сегодня: ${count}`,
      icon: "/clicker/icon-192.png"
    });
  }
});
