document.addEventListener("DOMContentLoaded", function(){

    /* PARTICLES BACKGROUND */

    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
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
            move: { enable: true, speed: 2 }
        },
        retina_detect: true
    });


    /* SUBSCRIPTION VERIFICATION */

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    // Check if already verified
    if(localStorage.getItem("divine_verified") === "true"){
        subscribeSection.style.display = "none";
        registerSection.classList.remove("hidden");
    }

    subscribeBtn.addEventListener("click", function(){

        verification.innerHTML = "Opening YouTube...";
        verification.style.color = "yellow";

        setTimeout(function(){

            verification.innerHTML = "Verifying subscription...";
            
            setTimeout(function(){

                verification.innerHTML = "Subscription Verified ✔";
                verification.style.color = "#22c55e";

                localStorage.setItem("divine_verified", "true");

                confetti({
                    particleCount:100,
                    spread:80,
                    origin:{ y:0.6 }
                });

                setTimeout(function(){
                    subscribeSection.style.display="none";
                    registerSection.classList.remove("hidden");
                },1500);

            },1500);

        },1500);

    });

});