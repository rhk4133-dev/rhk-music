document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       🔥 PARTICLES BACKGROUND INITIALIZATION
    ========================================== */

    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 70 },
                color: { value: "#ffd700" },
                shape: { type: "circle" },
                opacity: { value: 0.3 },
                size: { value: 3 },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffd700",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    repulse: { distance: 100 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    /* =========================================
       🛡 SUBSCRIPTION VERIFICATION LOGIC
       (Frontend Version – Backend Ready)
    ========================================== */

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    // Check if already verified (local storage)
    const isVerified = localStorage.getItem("divine_verified");

    if (isVerified === "true") {
        unlockRegistration();
    }

    subscribeBtn.addEventListener("click", function () {

        verification.innerHTML = "Redirecting to YouTube...";

        // Open YouTube channel
        window.open("https://youtube.com/@divineesport-q9f", "_blank");

        // Simulated verification delay (Replace with real API later)
        setTimeout(() => {

            verification.innerHTML = "Checking subscription status...";

            setTimeout(() => {

                verification.innerHTML = "Subscription Verified ✔";
                verification.style.color = "#22c55e";

                // Save verified state
                localStorage.setItem("divine_verified", "true");

                launchConfetti();

                setTimeout(() => {
                    unlockRegistration();
                }, 1500);

            }, 1500);

        }, 1500);

    });

    /* =========================================
       🎉 CONFETTI EFFECT
    ========================================== */

    function launchConfetti() {

        if (typeof confetti === "undefined") return;

        confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 }
        });
    }

    /* =========================================
       🔓 UNLOCK REGISTRATION
    ========================================== */

    function unlockRegistration() {

        subscribeSection.style.display = "none";
        registerSection.classList.remove("hidden");

        // Smooth fade animation
        registerSection.style.opacity = 0;
        registerSection.style.transform = "translateY(20px)";

        setTimeout(() => {
            registerSection.style.transition = "all 0.5s ease";
            registerSection.style.opacity = 1;
            registerSection.style.transform = "translateY(0)";
        }, 50);
    }

});