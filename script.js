function startTimer(targetDate) {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

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
      document.getElementById("timer").textContent = "Winners Announced!";
      // Here you would potentially update the winner names dynamically (see note below)
      document.getElementById("winner1").textContent = "Winner Name 1"; // Replace with actual winner
      document.getElementById("winner2").textContent = "Winner Name 2"; // Replace with actual winner
      document.getElementById("winner3").textContent = "Winner Name 3"; // Replace with actual winner
    }
  }

  updateTimer(); // Initial call to set the timer immediately
  const timerInterval = setInterval(updateTimer, 1000);
}

// Set the target date and time for the winner reveal (Year, Month (0-11), Day, Hour, Minute, Second)
const revealTime = new Date(2024, 10, 20, 15, 0, 0); // Example: November 20, 2024, 3:00 PM
startTimer(revealTime);
