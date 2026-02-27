document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");
    const bgMusic = document.getElementById("bgMusic");

    // Play music when user clicks anywhere (browser policy safe)
    document.body.addEventListener("click", function () {
        bgMusic.play().catch(() => {});
    }, { once: true });

    // When Subscribe button clicked
    subscribeBtn.addEventListener("click", function () {

        localStorage.setItem("subscribed", "true");

    });

    // Detect when user comes back to page
    window.addEventListener("focus", function () {

        if (localStorage.getItem("subscribed") === "true") {

            verification.innerHTML = "Subscription Verified ✔";

            confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.classList.remove("hidden");
            }, 1000);

        }

    });

});

