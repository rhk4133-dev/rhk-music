function subscribe(){
    alert("Thank you for subscribing!");
    document.getElementById("registerBtn").style.display="inline-block";
    document.getElementById("statusBtn").style.display="inline-block";
}

function showStatus(){
    document.getElementById("statusSection").style.display="block";
}

/* COUNTDOWN SYSTEM */
var countDownDate = new Date("March 6, 2026 23:59:59").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("countdown").innerHTML =
    "⏳ Closes In: " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if(distance < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "REGISTRATION CLOSED";
    }
},1000);