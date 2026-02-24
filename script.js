document.addEventListener("DOMContentLoaded", function(){

const proofBtn = document.getElementById("proofBtn");
const subscribeSection = document.getElementById("subscribeSection");
const registerSection = document.getElementById("registerSection");

// Open Screenshot Upload Form
proofBtn.addEventListener("click", function(){

window.open("https://forms.gle/YOUR_SCREENSHOT_UPLOAD_FORM","_blank");

});

// Check if user returned with verified link
const params = new URLSearchParams(window.location.search);

if(params.get("verified") === "true"){
subscribeSection.style.display="none";
registerSection.style.display="block";
}

});