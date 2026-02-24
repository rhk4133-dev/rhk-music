const youtubeChannel = 'https://youtube.com/@divineesport-q9f?si=SdeeFXXjebKsIl-T';

window.addEventListener('DOMContentLoaded', function() {
    const subscribeCard = document.getElementById('subscribeCard');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const registerCard = document.getElementById('registerCard');
    const registerBtn = registerCard.querySelector('.registerBtn');

    // Check if already subscribed before
    if (localStorage.getItem('subscribed') === 'true') {
        subscribeCard.style.display = 'none';
        registerBtn.classList.add('visible');
        registerCard.style.display = 'block';
    }

    subscribeBtn.addEventListener('click', function() {
        // Open YouTube channel in a new tab
        const newTab = window.open(youtubeChannel, '_blank');

        if (newTab) {
            // Successfully opened new tab
            localStorage.setItem('subscribed', 'true');

            // Hide subscribe card
            subscribeCard.style.display = 'none';

            // Show register card with fade-in
            registerCard.style.display = 'block';
            registerBtn.classList.add('visible');
        } else {
            alert('Please allow pop-ups to open YouTube channel.');
        }
    });
});