document.addEventListener("DOMContentLoaded", function(){

    const subscribeBtn = document.getElementById("subscribeBtn");
    const subscribeSection = document.getElementById("subscribeSection");
    const registerSection = document.getElementById("registerSection");
    const verification = document.getElementById("verification");

    subscribeBtn.addEventListener("click", function(){

        verification.innerHTML = "Verifying subscription...";

        setTimeout(() => {

            verification.innerHTML = "Subscription Verified ✅";

            confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.6 }
            });

            setTimeout(()=>{
                subscribeSection.style.display="none";
                registerSection.classList.remove("hidden");
            },1500);

        },2000);
    });

    // 🔥 Countdown (Editable Date)

    const endTime = new Date("February 28, 2026 23:59:59").getTime();

    setInterval(function(){

        const now = new Date().getTime();
        const distance = endTime - now;

        if(distance < 0){
            document.getElementById("countdown").innerHTML="REGISTRATION CLOSED";
            return;
        }

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        const seconds = Math.floor((distance % (1000*60))/1000);

        document.getElementById("countdown").innerHTML =
        days+"d "+hours+"h "+minutes+"m "+seconds+"s";

    },1000);

});