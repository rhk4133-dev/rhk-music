const channelLink = "https://youtube.com/@divineesport-q9f?si=otP4qXVZKPzSm4iF";
const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSfgdPjGZI7yXtoB3JhlwgROcZP1Yyg-brh3_EePQ5aOhsBN7w/viewform";
const livePage = "live.html";

function subscribeChannel() {
    window.open(channelLink, "_blank");
    localStorage.setItem("subscribed", "true");

    document.getElementById("subscribeSection").style.display = "none";
    document.getElementById("registerSection").classList.remove("hidden");
}

function registerNow() {
    window.open(registerLink, "_blank");
}

function watchLive() {
    window.location.href = livePage;
}

window.onload = function(){
    if(localStorage.getItem("subscribed") === "true"){
        document.getElementById("subscribeSection").style.display = "none";
        document.getElementById("registerSection").classList.remove("hidden");
    }
};