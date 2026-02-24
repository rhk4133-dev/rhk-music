// Links for both YouTube channels
const channel1 = 'https://youtube.com/@divineesport-q9f?si=twJteqWfwudbAPyf';
const channel2 = 'https://youtube.com/@divineesport-q9f?si=twJteqWfwudbAPyf'; // second channel if different

window.addEventListener('DOMContentLoaded', function() {
    const registerCard = document.getElementById('registerCard');
    const subscribeBtn = document.getElementById('subscribeBtn');

    // If already clicked before, show register button
    if (localStorage.getItem('subscribed') === 'true') {
        registerCard.style.display = 'block';
        document.getElementById('subscribeCard').style.display = 'none';
    }

    subscribeBtn.addEventListener('click', function() {
        // Open both channels in new tabs
        window.open(channel1, '_blank');
        window.open(channel2, '_blank');

        // Mark as subscribed
        localStorage.setItem('subscribed', 'true');

        // Show register card and hide subscribe card
        registerCard.style.display = 'block';
        document.getElementById('subscribeCard').style.display = 'none';
    });
});