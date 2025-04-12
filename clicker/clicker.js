function incrementClick() {
  const today = new Date().toISOString().split("T")[0];
  const key = `clicks-${today}`;
  const count = parseInt(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, count);

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'notify', count });
  }
}

window.addEventListener('load', incrementClick);
document.getElementById('clicker-button').addEventListener('click', incrementClick);
