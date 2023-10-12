```javascript
import { severaAPI } from './api/severa.js';

let userSettings = {};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('loginForm').addEventListener('submit', login);

function restoreOptions() {
  chrome.storage.sync.get('userSettings', (data) => {
    if (data.userSettings) {
      userSettings = data.userSettings;
      document.getElementById('username').value = userSettings.username || '';
      document.getElementById('password').value = userSettings.password || '';
    }
  });
}

function saveOptions() {
  userSettings.username = document.getElementById('username').value;
  userSettings.password = document.getElementById('password').value;

  chrome.storage.sync.set({ userSettings }, () => {
    console.log('User settings saved');
  });
}

function login(e) {
  e.preventDefault();

  severaAPI.login(userSettings.username, userSettings.password)
    .then(() => {
      console.log('Logged in successfully');
      updateSettings();
    })
    .catch((error) => {
      console.error('Failed to login', error);
    });
}

function updateSettings() {
  chrome.runtime.sendMessage({ type: 'UPDATE_SETTINGS', data: userSettings });
}
```