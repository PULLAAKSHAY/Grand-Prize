let timerInterval; // Declare timerInterval in a scope accessible to both functions

function startTimer(targetDate) {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const timerDisplay = document.getElementById("timer"); // Get the timer element

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.textContent = String(days).padStart(2, "0");
      hoursElement.textContent = String(hours).padStart(2, "0");
      minutesElement.textContent = String(minutes).padStart(2, "0");
      secondsElement.textContent = String(seconds).padStart(2, "0");
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Winners Announced!"; // Update the timer element directly
      document.getElementById("winner1").textContent = "Winner Name 1";
      document.getElementById("winner2").textContent = "Winner Name 2";
      document.getElementById("winner3").textContent = "Winner Name 3";
    }
  }

  updateTimer(); // Initial call to set the timer immediately
  timerInterval = setInterval(updateTimer, 1000);
}

// Set the target date and time for the winner reveal (Year, Month (0-11), Day, Hour, Minute, Second)
// Set this to a future date and time! For example, August 28th, 2024, at 10:00 AM
const revealTime = new Date(2025, 0, 28, 10, 0, 0);
startTimer(revealTime);
