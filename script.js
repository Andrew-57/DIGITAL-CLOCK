let is24Hour = false;
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "AM";
    if (!is24Hour) {
        if (hours >= 12) session = "PM";
        if (hours > 12) hours -= 12;
        if (hours === 0) hours = 12;
    }
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    const timeString = is24Hour ? `${h}:${m}:${s}` : `${h}:${m}:${s} ${session}`;
    document.getElementById("time").innerText = timeString;
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();
    document.getElementById("date").innerText = `${day} ${month} ${year}`;
}
setInterval(updateClock, 1000);
updateClock();
document.getElementById("toggle").addEventListener("click", () => {
    is24Hour = !is24Hour;
    document.getElementById("toggle").innerText =
        is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
});
