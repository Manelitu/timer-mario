function Timer() {
    const timer = document.querySelector(".timer");
    const startAudio = new Audio("audio/start.wav");
    const stopAudio = new Audio("audio/stop.wav");
    const pauseAudio = new Audio("audio/pause.wav");
    let seconds = 0;
    let timerInterval;

    function secondsTime(sec) {
        const date = new Date(sec * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            timer.innerHTML = secondsTime(seconds);
        }, 1000);
    }

    document.addEventListener('click', e => {

        const element = e.target;
        if (element.classList.contains('start')) {
            timer.classList.add('started');
            timer.classList.remove('paused');
            clearInterval(timerInterval);
            startTimer();
            startAudio.play();
        }

        if (element.classList.contains('pause')) {
            timer.classList.add('paused');
            timer.classList.remove('started');
            clearInterval(timerInterval);
            pauseAudio.play();

        }

        if (element.classList.contains('stop')) {
            timer.classList.remove('paused');
            timer.classList.remove('started');
            clearInterval(timerInterval);
            seconds = 0;
            timer.innerHTML = '00:00:00';
            stopAudio.play();
        }
    });
}

const timer = new Timer();