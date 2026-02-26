function scrollToSection() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
  event.preventDefault();
  document.getElementById("successMsg").innerText = 
    "✅ Message Sent Successfully!";
}