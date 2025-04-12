if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(reg => {
      console.log('Service Worker зарегистрирован:', reg);
      if (reg.active) {
        reg.active.postMessage('click');
      }
    });
  });
}

document.getElementById('clicker-button').addEventListener('click', () => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage('click');
  }
});
