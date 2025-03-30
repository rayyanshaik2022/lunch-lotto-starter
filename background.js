chrome.alarms.create("dailyReminder", { when: Date.now(), periodInMinutes: 1440 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dailyReminder") {
    chrome.notifications.create("lunchTime", {
      type: "basic",
      iconUrl: "assets/icon.png",
      title: "Lunch Lotto",
      message: "It's time for lunch! Open the Lunch Lotto extension to find your meal.",
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'addToHistory') {
    
    // Signal (send) the message to the popup script
    chrome.runtime.sendMessage({
      type: 'addToHistory',
      restaurant: request.restaurant
    });
  }
});
