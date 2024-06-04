let ms = 0, s = 0, m = 0, h = 0;
let timer;

const display = document.querySelector(".timer-display");
const laps = document.querySelector(".laps");

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    ms++;
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }
    if (m === 60) {
        m = 0;
        h++;
    }
    if (h === 13) {
        h = 1;
    }
    display.innerHTML = getTimer();
}

function getTimer() {
    return `${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s} : ${ms < 10 ? "0" + ms : ms}`;
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
}

function restart() {
    if (timer) {
        reset();
        start();
    }
}

function lap() {
    if (timer) {
        let li = document.createElement("li");
        li.innerHTML = getTimer();
        laps.appendChild(li);
    }
}

function resetLap() {
    laps.innerHTML = "";
}

// Attach event listeners to buttons (if they exist)
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".pause").addEventListener("click", pause);
document.querySelector(".reset").addEventListener("click", reset);
document.querySelector(".restart").addEventListener("click", restart);
document.querySelector(".lap").addEventListener("click", lap);
document.querySelector(".reset-lap").addEventListener("click", resetLap);
