let timerElement = document.getElementById("timer")
let startElement = document.getElementById("start")
let resetElement = document.getElementById("reset")
let stopElement = document.getElementById("stop")

let seconds = 0
let interval = null

function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;


    timerElement.textContent = `${hrs} : ${mins} : ${secs}`
}
startElement.onclick = function() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}
stopElement.onclick = function() {
    clearInterval(interval)
    interval = null
}
resetElement.onclick = function() {
    seconds = 0
    timerElement.textContent = "00 : 00 : 00"
}