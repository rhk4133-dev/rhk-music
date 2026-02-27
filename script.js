document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    subscribeBtn.addEventListener("click", function () {

        verification.innerHTML = "Deploying Player...";

        setTimeout(() => {

            verification.innerHTML = "Access Granted ✔";

            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });

            subscribeBtn.classList.remove("pulse");

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.classList.remove("hidden");
            }, 1500);

        }, 2000);

    });

});