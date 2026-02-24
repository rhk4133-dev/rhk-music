// Default values
if (!localStorage.getItem("liveLink")) {
    localStorage.setItem("liveLink", "https://www.youtube.com/embed/dQw4w9WgXcQ");
    localStorage.setItem("slots", "25 / 48");
    localStorage.setItem("registration", "Open");
    localStorage.setItem("selected", "18");
    localStorage.setItem("rejected", "5");
    localStorage.setItem("dateTime", "2026-02-28T18:00");
}

// Load Live Page
if (document.getElementById("liveFrame")) {
    document.getElementById("liveFrame").src =
        localStorage.getItem("liveLink");
}

// Load Status
if (document.getElementById("slots")) {
    document.getElementById("slots").innerText =
        localStorage.getItem("slots");

    document.getElementById("registration").innerText =
        localStorage.getItem("registration");

    document.getElementById("selected").innerText =
        localStorage.getItem("selected");

    document.getElementById("rejected").innerText =
        localStorage.getItem("rejected");
}

// Countdown
if (document.getElementById("countdown")) {

    var target = new Date(localStorage.getItem("dateTime")).getTime();

    setInterval(function() {
        var now = new Date().getTime();
        var distance = target - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "🔥 LIVE NOW";
        }
    }, 1000);
}