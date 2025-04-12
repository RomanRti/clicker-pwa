// Проверяем поддержку service worker в браузере
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Регистрируем service worker
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker зарегистрирован: ', registration);

        // После регистрации, сразу отправляем сообщение для увеличения кликов
        if (registration.active) {
          registration.active.postMessage('click');
        }
      })
      .catch(error => {
        console.log('Ошибка регистрации Service Worker: ', error);
      });
  });
}

// Отслеживаем клики на кнопке (например, на кнопке с id="clicker-button")
document.getElementById('clicker-button').addEventListener('click', () => {
  if (navigator.serviceWorker.controller) {
    // Отправляем сообщение сервисному воркеру при клике на кнопку
    navigator.serviceWorker.controller.postMessage('click');
  }
});
