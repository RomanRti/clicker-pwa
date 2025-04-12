self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('message', event => {
  if (event.data === 'click') {
    let today = new Date().toISOString().split('T')[0];
    let key = `clicks-${today}`;
    self.registration.storage = self.registration.storage || {};
    self.registration.storage[key] = (self.registration.storage[key] || 0) + 1;

    event.waitUntil(
      (async () => {
        const allClients = await clients.matchAll({ includeUncontrolled: true });
        for (const client of allClients) {
          client.postMessage({ type: 'click-update', count: self.registration.storage[key], date: today });
        }
      })()
    );

    self.registration.getNotifications().then(existing => {
      for (const notif of existing) notif.close();
    });
    self.registration.showNotification("Clicker", {
      body: `Кликов сегодня: ${self.registration.storage[key]}`,
      icon: "/clicker/icon-192.png"
    });
  }
});
