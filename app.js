let triggered = false;
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', () => triggered = false);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  if (!triggered) {
    triggered = true;
    audio.currentTime = 0;
    key.classList.add('playing')
    audio.play();
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition);
    });
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

