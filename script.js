// Optional: Add more shake with music beat (basic effect)
const text = document.querySelector('.welcome-text');
const audio = document.getElementById('bg-music');

audio.addEventListener('play', () => {
  setInterval(() => {
    text.style.transform = `scale(${1 + Math.random()*0.1}) rotate(${Math.random()*4 - 2}deg)`;
  }, 300);
});