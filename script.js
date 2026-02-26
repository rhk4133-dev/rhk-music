document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    subscribeBtn.addEventListener("click", function () {

        verification.innerHTML = "Verifying subscription...";

        setTimeout(() => {

            verification.innerHTML = "Subscription Verified ✔";

            // Confetti Effect
            confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.classList.remove("hidden");
            }, 1500);

        }, 2000);

    });

});