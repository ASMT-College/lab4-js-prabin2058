function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Update the digital clock display
    const digitalTime = document.getElementById("digital-time");
    digitalTime.innerHTML = formattedTime;
}

// Initial call to set the time immediately
updateClock();
// Update the clock every 100ms
setInterval(updateClock, 100);