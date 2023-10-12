```javascript
import { severaAPI } from './api/severa.js';

let userSettings = {};
let stopwatchInterval = null;

chrome.storage.sync.get('userSettings', (data) => {
  if (data.userSettings) {
    userSettings = data.userSettings;
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'START_STOPWATCH':
      startStopwatch();
      break;
    case 'STOP_STOPWATCH':
      stopStopwatch();
      break;
    case 'UPDATE_SETTINGS':
      updateSettings(request.settings);
      break;
  }
});

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      userSettings.timeLogged += 1;
      chrome.storage.sync.set({ userSettings });
    }, 1000);
  }
}

function stopStopwatch() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    severaAPI.logHours(userSettings.projectId, userSettings.timeLogged)
      .then(() => {
        userSettings.timeLogged = 0;
        chrome.storage.sync.set({ userSettings });
      });
  }
}

function updateSettings(settings) {
  userSettings = settings;
  chrome.storage.sync.set({ userSettings });
}
```