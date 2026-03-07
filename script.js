// Intro animation control

setTimeout(function(){

document.getElementById("intro").style.display="none";

},5000);


// Match image switch

function showMatch(match){

let img=document.getElementById("matchImage");

img.src="match"+match+".png";

}