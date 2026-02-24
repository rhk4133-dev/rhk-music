// =======================
// EDIT HERE ONLY
// =======================

// Countdown Dates
const startDate = new Date("Feb 28, 2026 00:00:00").getTime();
const endDate = new Date("Feb 06, 2026 00:00:00").getTime();

// Slot Information
const slotDateValue = "28 February 2026";
const slotTimeValue = "6:00 PM IST";
const slotStatusValue = "COMING SOON"; // OPEN / CLOSED / COMING SOON

// =======================
// Countdown Logic
// =======================

const countdownElement = document.getElementById("countdown");

if(countdownElement){
    setInterval(function(){
        const now = new Date().getTime();
        const distance = startDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML =
        days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    },1000);
}

// =======================
// Slot Display
// =======================

const slotDate = document.getElementById("slotDate");
const slotTime = document.getElementById("slotTime");
const slotStatus = document.getElementById("slotStatus");

if(slotDate) slotDate.innerText = slotDateValue;
if(slotTime) slotTime.innerText = slotTimeValue;
if(slotStatus) slotStatus.innerText = slotStatusValue;