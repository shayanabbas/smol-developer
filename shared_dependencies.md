1. **Exported Variables**: 
    - `severaAPI`: An instance of the Severa API client, exported from `api/severa.js` and imported in `popup.js`, `background.js`, and `options.js`.
    - `userSettings`: User settings object stored in Chrome Storage API, accessed in `popup.js`, `background.js`, `options.js`, and `content.js`.

2. **Data Schemas**: 
    - `UserSettings`: Schema for user settings, used in `popup.js`, `background.js`, `options.js`, and `content.js`.
    - `Project`: Schema for Severa projects, used in `api/severa.js`, `popup.js`, and `options.js`.

3. **DOM Element IDs**: 
    - `startButton`: Start stopwatch button in `popup.html`, accessed in `popup.js`.
    - `stopButton`: Stop stopwatch button in `popup.html`, accessed in `popup.js`.
    - `projectSelect`: Dropdown for selecting a project in `popup.html` and `options.html`, accessed in `popup.js` and `options.js`.
    - `loginForm`: Login form in `options.html`, accessed in `options.js`.

4. **Message Names**: 
    - `START_STOPWATCH`: Message sent from `popup.js` to `background.js` to start the stopwatch.
    - `STOP_STOPWATCH`: Message sent from `popup.js` to `background.js` to stop the stopwatch.
    - `UPDATE_SETTINGS`: Message sent from `options.js` to `background.js` and `popup.js` to update user settings.

5. **Function Names**: 
    - `startStopwatch`: Function in `popup.js` and `background.js` to start the stopwatch.
    - `stopStopwatch`: Function in `popup.js` and `background.js` to stop the stopwatch.
    - `updateSettings`: Function in `options.js`, `background.js`, and `popup.js` to update user settings.
    - `login`: Function in `api/severa.js` to login the user.
    - `getProjects`: Function in `api/severa.js` to get the projects.