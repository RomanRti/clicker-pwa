self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Обрабатываем сообщения от главных приложений
self.addEventListener('message', (event) => {
  if (event.data === 'click') {
    const clickCount = parseInt(localStorage.getItem('clickCount') || '0', 10);
    localStorage.setItem('clickCount', clickCount + 1);
  }
});
