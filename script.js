document.addEventListener("DOMContentLoaded", function () {

    const cockroach = document.getElementById("cockroach");
    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    // 🪳 Move cockroach to Subscribe button
    setTimeout(() => {

        const btnRect = subscribeBtn.getBoundingClientRect();

        cockroach.style.left = btnRect.left + "px";
        cockroach.style.bottom = "120px";

        // Add shake effect
        subscribeBtn.classList.add("shake");

    }, 500);


    subscribeBtn.addEventListener("click", function () {

        verification.innerHTML = "Verifying subscription...";

        setTimeout(() => {

            verification.innerHTML = "Subscription Verified ✔";

            confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 }
            });

            subscribeBtn.classList.remove("shake");
            cockroach.style.display = "none";

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.classList.remove("hidden");
            }, 1500);

        }, 2000);

    });

});