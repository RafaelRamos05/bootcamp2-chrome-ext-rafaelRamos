const DEFAULT_INTERVAL_MIN = 30;
let remainingSeconds = DEFAULT_INTERVAL_MIN * 60;

// Evita duplicar se já existir
if (!document.getElementById("water-reminder-widget")) {
  // Cria container
  const widget = document.createElement("div");
  widget.id = "water-reminder-widget";
  widget.innerHTML = `
    <div id="water-timer">30:00</div>
  `;
  document.body.appendChild(widget);

  // Atualiza cronômetro
  function updateTimer() {
    const min = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
    const sec = String(remainingSeconds % 60).padStart(2, "0");
    document.getElementById("water-timer").textContent = `${min}:${sec}`;

    if (remainingSeconds > 0) {
      remainingSeconds--;
    } else {
      remainingSeconds = DEFAULT_INTERVAL_MIN * 60;
    }
  }

  setInterval(updateTimer, 1000);
  updateTimer();
}
