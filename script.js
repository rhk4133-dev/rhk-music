tsParticles.load("tsparticles", {
    particles: {
        number:{value:60},
        color:{value:["#ff0000","#ff8800","#ffaa00"]},
        shape:{type:"circle"},
        size:{value:3},
        move:{
            enable:true,
            speed:2,
            direction:"top",
            outModes:{default:"out"}
        }
    }
});

// Subscribe
function subscribeChannel(){
    window.open("https://youtube.com/@divineesport-q9f?si=otP4qXVZKPzSm4iF", "_blank");
    localStorage.setItem("subscribed","true");
    document.getElementById("subscribeSection").style.display="none";
    document.getElementById("registerSection").classList.remove("hidden");
}

// Watch Live
function watchLive(){
    window.location.href = "live.html";
}

// Tournament Status
window.onload = function(){
    const status = localStorage.getItem("status") || "Coming Soon";
    document.getElementById("tournamentStatus").innerText = status;

    if(localStorage.getItem("subscribed") === "true"){
        document.getElementById("subscribeSection").style.display="none";
        document.getElementById("registerSection").classList.remove("hidden");
    }
};