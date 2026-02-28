document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");
    const bgMusic = document.getElementById("bgMusic");
    const slots = document.getElementById("slots");
    const musicToggle = document.getElementById("musicToggle");

    let totalSlots = 50;

    // 🔥 Fake slot decrease
    setInterval(() => {
        if (totalSlots > 12) {
            totalSlots--;
            slots.textContent = totalSlots;
        }
    }, 5000);

    subscribeBtn.addEventListener("click", function () {

        bgMusic.volume = 0;
        bgMusic.play().catch(() => {});

        // Smooth volume fade in
        let fade = setInterval(() => {
            if (bgMusic.volume < 1) {
                bgMusic.volume += 0.1;
            } else {
                clearInterval(fade);
            }
        }, 200);

        verification.innerHTML = "Verifying subscription...";

        setTimeout(() => {

            verification.innerHTML = "Subscription Verified ✔";

            confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.classList.remove("hidden");
            }, 1500);

        }, 2000);
    });

    // 🔊 Music toggle
    musicToggle.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = "🔊";
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = "🔇";
        }
    });

});