// Проверяем поддержку service worker в браузере
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Регистрируем service worker
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker зарегистрирован: ', registration);

        // После регистрации, получаем количество кликов и отображаем его
        if (registration.active) {
          registration.active.postMessage('click');  // Сразу отправляем команду для увеличения кликов
        }
      })
      .catch(error => {
        console.log('Ошибка регистрации Service Worker: ', error);
      });
  });
}

// Функция для отображения статистики кликов
function updateClickCount() {
  const clickCount = localStorage.getItem('clickCount') || 0;
  document.getElementById('click-count').textContent = `Количество кликов: ${clickCount}`;
}

// Обновляем статистику при загрузке страницы
window.addEventListener('load', updateClickCount);
