if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(reg => {
      console.log('Service Worker зарегистрирован:', reg);
    });
  });
}

function updateClickCount() {
  const clickCount = localStorage.getItem('clickCount') || 0;
  document.getElementById('click-count').textContent = `Количество кликов: ${clickCount}`;
}

window.addEventListener('load', updateClickCount);
