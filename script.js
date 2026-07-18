const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setTime() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000);
setTime();