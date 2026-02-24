document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const registerBtn = document.querySelector(".registerBtn");
    const verification = document.getElementById("verification");
    const statusSection = document.getElementById("statusSection");

    const totalSlots = document.getElementById("totalSlots");
    const filledSlots = document.getElementById("filledSlots");
    const slotsLeft = document.getElementById("slotsLeft");

    // 🔊 Sound
    const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");

    // 🔥 Calculate Slots Left Automatically
    slotsLeft.innerText = totalSlots.innerText - filledSlots.innerText;

    // 🔥 If already subscribed
    if (localStorage.getItem("subscribed") === "true") {
        unlockSections();
    }

    subscribeBtn.addEventListener("click", function () {
        clickSound.play();
        localStorage.setItem("subscribed", "true");
    });

    // Detect return to page
    window.addEventListener("focus", function () {
        if (localStorage.getItem("subscribed") === "true") {

            verification.style.display = "block";
            verification.innerHTML = "Subscription Verified ✅";

            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                unlockSections();
            }, 1500);
        }
    });

    function unlockSections() {
        subscribeSection.style.display = "none";
        registerSection.style.display = "block";
        registerBtn.classList.add("show");
        statusSection.style.display = "block";
    }

    // ⏳ EDIT COUNTDOWN DATE HERE
    const endTime = new Date("March 6, 2026 23:59:59").getTime();

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "REGISTRATION CLOSED";
        }
    }, 1000);

});