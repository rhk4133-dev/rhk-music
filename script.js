const youtubeChannel = 'https://youtube.com/@divineesport-q9f?si=twJteqWfwudbAPyf';

window.addEventListener('DOMContentLoaded', function() {
    const registerCard = document.getElementById('registerCard');
    const subscribeCard = document.getElementById('subscribeCard');
    const subscribeBtn = document.getElementById('subscribeBtn');

    // If already subscribed before, show register card directly
    if (localStorage.getItem('subscribed') === 'true') {
        registerCard.style.display = 'block';
        subscribeCard.style.display = 'none';
    }

    subscribeBtn.addEventListener('click', function() {
        // Open YouTube channel in a new tab
        window.open(youtubeChannel, '_blank');

        // Mark as subscribed in localStorage
        localStorage.setItem('subscribed', 'true');

        // Hide subscribe card, show register card
        subscribeCard.style.display = 'none';
        registerCard.style.display = 'block';
    });
});