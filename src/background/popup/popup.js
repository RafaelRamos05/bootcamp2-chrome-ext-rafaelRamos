const elEnabled = document.getElementById('enabled');
const elInterval = document.getElementById('interval');
const btnSave = document.getElementById('save');
const btnNotify = document.getElementById('notifyNow');
const countdownEl = document.getElementById('countdown');

const DEFAULT_INTERVAL = 30;
let timerInterval;

// Inicializa UI
async function init() {
  const { enabled = true, interval = DEFAULT_INTERVAL, nextAlarm = null } =
    await chrome.storage.local.get(['enabled', 'interval', 'nextAlarm']);

  elEnabled.checked = enabled;
  elInterval.value = interval;

  if (nextAlarm) startCountdown(nextAlarm, interval);
}

// Salvar configurações
btnSave.addEventListener('click', async () => {
  const enabled = elEnabled.checked;
  let interval = parseInt(elInterval.value, 10);
  if (!interval || interval < 1) interval = DEFAULT_INTERVAL;

  // Salva também o próximo horário
  const nextAlarm = Date.now() + interval * 60 * 1000;
  await chrome.storage.local.set({ enabled, interval, nextAlarm });

  // pede ao background que reagende
  chrome.runtime.sendMessage({ type: 'SCHEDULE', interval });

  startCountdown(nextAlarm, interval);
});

// Notificar agora
btnNotify.addEventListener('click', async () => {
  chrome.runtime.sendMessage({ type: 'NOTIFY_NOW' });

  // Reinicia timer do zero
  const { interval = DEFAULT_INTERVAL } = await chrome.storage.local.get('interval');
  const nextAlarm = Date.now() + interval * 60 * 1000;
  await chrome.storage.local.set({ nextAlarm });

  startCountdown(nextAlarm, interval);
});

// Função do cronômetro
function startCountdown(nextAlarm, interval) {
  if (timerInterval) clearInterval(timerInterval);

  function update() {
    const now = Date.now();
    const diff = nextAlarm - now;

    if (diff <= 0) {
      countdownEl.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }

    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    countdownEl.textContent =
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  update();
  timerInterval = setInterval(update, 1000);
}

init();
