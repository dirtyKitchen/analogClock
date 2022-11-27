setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minTime = d.getMinutes();
    secTime = d.getSeconds();
    hRotation = 30 * hourTime + minTime / 2;
    mRotation = 6 * minTime;
    sRotation = 6 * secTime;
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);