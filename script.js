document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const verification = document.getElementById("verification");
    const afterSubscribe = document.getElementById("afterSubscribe");

    const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");

    subscribeBtn.addEventListener("click", function () {

        clickSound.play();

        verification.style.display = "block";

        setTimeout(() => {
            verification.innerHTML = "Subscription Verified ✅";

            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                document.getElementById("subscribeSection").style.display = "none";
                afterSubscribe.style.display = "block";
            }, 1500);

        }, 2000);
    });

    // Countdown Timer
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