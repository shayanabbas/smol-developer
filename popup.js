```javascript
import { severaAPI } from './api/severa.js';

let userSettings = {};
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let projectSelect = document.getElementById('projectSelect');

chrome.storage.sync.get('userSettings', function(data) {
  userSettings = data.userSettings;
  populateProjects();
});

function populateProjects() {
  severaAPI.getProjects(userSettings.token).then(projects => {
    projects.forEach(project => {
      let option = document.createElement('option');
      option.value = project.id;
      option.text = project.name;
      projectSelect.appendChild(option);
    });
  });
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);

function startStopwatch() {
  let projectId = projectSelect.value;
  chrome.runtime.sendMessage({ type: 'START_STOPWATCH', projectId });
}

function stopStopwatch() {
  chrome.runtime.sendMessage({ type: 'STOP_STOPWATCH' });
}

chrome.runtime.onMessage.addListener(function(message) {
  if (message.type === 'UPDATE_SETTINGS') {
    userSettings = message.userSettings;
    populateProjects();
  }
});
```