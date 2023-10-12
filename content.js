```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'UPDATE_SETTINGS') {
        chrome.storage.sync.get(['userSettings'], function(result) {
            if (result.userSettings) {
                userSettings = result.userSettings;
            }
        });
    }
});

let userSettings = {};

chrome.storage.sync.get(['userSettings'], function(result) {
    if (result.userSettings) {
        userSettings = result.userSettings;
    }
});
```