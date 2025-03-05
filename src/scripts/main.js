AOS.init();


const dateEvent = new Date("Jan 01, 2026 00:00:00");
const timeStampEvent = dateEvent.getTime();



var intervalTime = setInterval(() => {
    const timeStampNow = new Date().getTime();
    const eventTimeLeft = timeStampEvent - timeStampNow;

    const diasMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60
    const MinutesMs = 1000 * 60;

    const daysUntilEvent = Math.floor(eventTimeLeft / diasMs);
    const hoursUntilEvent = Math.floor((eventTimeLeft % diasMs) / hoursMs);
    const minutesUntilEvent = Math.floor((eventTimeLeft % hoursMs) / MinutesMs);
    const secondsUntilEvent = Math.floor((eventTimeLeft % MinutesMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    // EVENT 00:00:00 TIMER
    if (eventTimeLeft < 0) {
        clearInterval(intervalTime)
        document.getElementById('counter').innerHTML = "...FELIZ ANO NOVO!!";
    }
}, 1000);