const clock = document.querySelector(".clock");

let sec = 0, min = 0, hour = 0, intervalID;

const startStopWatch = () => {

    intervalID = setInterval(() => {
        if (sec < 59) {
            sec++;
        } else if (min >= 59) {
            hour++;
            min = 0;
        } else {
            sec = 0;
            min++;
        }

        const seconds = sec.toString().padStart(2, "0");
        const minutes = min.toString().padStart(2, "0");
        const hours = hour.toString().padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
};

const stopStopWatch = () => {
  clearInterval(intervalID);
};