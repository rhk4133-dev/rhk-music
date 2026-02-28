document.addEventListener("DOMContentLoaded", function () {

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");
    const bgMusic = document.getElementById("bgMusic");
    const slots = document.getElementById("slots");
    const players = document.getElementById("players");
    const countdown = document.getElementById("countdown");
    const musicToggle = document.getElementById("musicToggle");

    let totalSlots = 50;
    let totalPlayers = 0;
    let clicked = false;

    // 🔥 Smart Slot Drop System
    setInterval(() => {

        if (totalSlots > 10) {

            let dropChance = Math.random();

            if (dropChance > 0.6) {
                let drop = Math.floor(Math.random() * 3);
                totalSlots -= drop;
                totalPlayers += drop * 4;

                slots.textContent = totalSlots;
                players.textContent = totalPlayers;

                // Warning Glow when low slots
                if (totalSlots <= 15) {
                    slots.style.color = "#ff4d4d";
                    slots.style.textShadow = "0 0 15px red";
                }
            }
        }

    }, 3000);


    // ⏳ Countdown Timer
    const eventDate = new Date("March 5, 2026 18:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdown.textContent = days + "d " + hours + "h " + minutes + "m";
    }, 1000);


    // 👁 Tab Activity Detection
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            verification.innerHTML = "Welcome back, Player 🎮";
            setTimeout(() => verification.innerHTML = "", 2000);
        }
    });


    // 🔐 Subscribe Logic
    subscribeBtn.addEventListener("click", function () {

        if (clicked) return;
        clicked = true;

        subscribeBtn.style.opacity = "0.6";
        subscribeBtn.style.pointerEvents = "none";

        bgMusic.volume = 0;
        bgMusic.play().catch(() => {});

        let fade = setInterval(() => {
            if (bgMusic.volume < 1) {
                bgMusic.volume += 0.1;
            } else {
                clearInterval(fade);
            }
        }, 200);

        let dots = 0;
        verification.innerHTML = "Verifying subscription";

        let loading = setInterval(() => {
            dots = (dots + 1) % 4;
            verification.innerHTML = "Verifying subscription" + ".".repeat(dots);
        }, 400);

        setTimeout(() => {

            clearInterval(loading);

            verification.innerHTML = "Subscription Verified ✔";

            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                subscribeSection.style.display = "none";
                registerSection.classList.remove("hidden");
            }, 1500);

        }, 2500);

    });


    // 🔊 Music Toggle
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