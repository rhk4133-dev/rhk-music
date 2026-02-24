document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const registerBtn = document.querySelector(".registerBtn");
    const verification = document.getElementById("verification");

    // 🔊 Button Sound
    const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");

    subscribeBtn.addEventListener("click", function () {

        clickSound.play();

        verification.style.display = "block";

        // Fake verification animation
        setTimeout(() => {
            verification.innerHTML = "Subscription Verified ✅";

            // Confetti 🎉
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.style.display = "block";
                registerBtn.classList.add("show");
            }, 1500);

        }, 2000);
    });

    // ⏳ Countdown Timer (2 Hours Example)
    const endTime = new Date().getTime() + (2 * 60 * 60 * 1000);

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