"use client";

import Navbar from "@/components/Navbar";

function Main() {
  let keyPressDurations = {};

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

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (!keyPressDurations[key]) {
      startKeyPressTimer(key);
    }
  });

  document.addEventListener("keyup", function (event) {
    const key = event.key;
    stopKeyPressTimer(key);
  });

  window.addEventListener("load", function () {
    const keys = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    keys.forEach(function (key) {
      fetch("http://localhost:5000/save-logs")
        .then((response) => response.json())
        .then((data) => console.log(data));

      document.addEventListener("keydown", function (event) {
        if (event.key === key) {
          if (!keyPressDurations[key]) {
            startKeyPressTimer(key);
          }
        }
      });

      document.addEventListener("keyup", function (event) {
        if (event.key === key) {
          stopKeyPressTimer(key);
        }
      });
    });
  });

  return (
    <>
      <Navbar page={2} />
      <h1>Key Press Logger</h1>
      <p>Type something in this document and check the console.</p>
    </>
  );
}

export default Main;
