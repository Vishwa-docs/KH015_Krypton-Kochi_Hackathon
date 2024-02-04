const keyPressDurations = {};

function startKeyPressTimer(key) {
  keyPressDurations[key] = new Date().getTime();
}

function stopKeyPressTimer(key) {
  if (keyPressDurations[key]) {
    const duration = new Date().getTime() - keyPressDurations[key];
    console.log(`Key '${key}' was pressed for ${duration} milliseconds`);
    delete keyPressDurations[key];
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!keyPressDurations[key]) {
    startKeyPressTimer(key);
  }
});

document.addEventListener('keyup', function(event) {
  const key = event.key;
  stopKeyPressTimer(key);
});

// Dynamically adding event listeners for each key
window.addEventListener('load', function() {
  const keys = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  keys.forEach(function(key) {
    document.addEventListener('keydown', function(event) {
      if (event.key === key) {
        if (!keyPressDurations[key]) {
          startKeyPressTimer(key);
        }
      }
    });

    document.addEventListener('keyup', function(event) {
      if (event.key === key) {
        stopKeyPressTimer(key);
      }
    });
  });
});
