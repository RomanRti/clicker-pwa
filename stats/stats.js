function updateClickCount() {
  const today = new Date().toISOString().split("T")[0];
  const key = `clicks-${today}`;
  const count = parseInt(localStorage.getItem(key) || "0");
  document.getElementById("click-count").textContent = `Кликов сегодня: ${count}`;
}

window.addEventListener('load', updateClickCount);
