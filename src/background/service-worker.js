// Service worker: agenda alarmes e cria notificações
const DEFAULT_INTERVAL_MIN = 30; // 30 minutos padrão
const ALARM_NAME = 'water-reminder-alarm';


chrome.runtime.onInstalled.addListener(async () => {
console.log('Water Reminder instalado.');
const { enabled = true, interval = DEFAULT_INTERVAL_MIN } = await chrome.storage.local.get(['enabled', 'interval']);
chrome.storage.local.set({ enabled, interval });
if (enabled) scheduleAlarm(interval);
});


chrome.alarms.onAlarm.addListener(async (alarm) => {
if (alarm && alarm.name === ALARM_NAME) {
const { enabled = true } = await chrome.storage.local.get('enabled');
if (enabled) showNotification();
}
});


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
if (msg && msg.type === 'SCHEDULE') {
scheduleAlarm(msg.interval);
sendResponse({ ok: true });
}
if (msg && msg.type === 'NOTIFY_NOW') {
showNotification();
sendResponse({ ok: true });
}
});


function scheduleAlarm(intervalMin = DEFAULT_INTERVAL_MIN) {
console.log(`Agendando alarm a cada ${intervalMin} min`);
// Remove alarm antigo
chrome.alarms.clear(ALARM_NAME, () => {
chrome.alarms.create(ALARM_NAME, { periodInMinutes: intervalMin });
});
}


function showNotification() {
const options = {
type: 'basic',
iconUrl: 'icons/icon128.png',
title: '💧 Hora de beber água',
message: 'Tome um copo de água agora — mantenha-se hidratado!'
};
chrome.notifications.create('', options, (id) => {
// id pode ser usado para rastrear interação
console.log('Notificação criada', id);
});
}