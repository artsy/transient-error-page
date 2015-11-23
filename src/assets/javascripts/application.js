import ProgressBar from 'progressbar.js';
import Cookies from 'cookies-js';

let attempts = parseInt(Cookies.get('attempts') || 0) + 1;
let limit = 3;
let interval = 1000;
let length = Math.pow(3, attempts);
let duration = interval * length;

Cookies.set('attempts', attempts, { expires: 600 }); // Reset after 10 minutes

let stage = document.querySelectorAll('.js-countdown-stage')[0];

if (limit >= attempts) { // Start the countdown

  let el = document.querySelectorAll('.js-countdown-timer')[0];

  let circle = new ProgressBar.Circle(el, {
    duration: duration,
    color: '#000',
    trailColor: '#ccc',
    easing: 'linear',
    strokeWidth: 3
  });

  let tick = () => {
    el.setAttribute('data-count', length);
    if (length === 0) {
      clearInterval(ticker);
      return location.reload();
    }
    length = length - 1;
  };

  circle.animate(1);

  tick();
  let ticker = setInterval(tick, interval);

} else { // Give up

  let button = document.querySelectorAll('.js-countdown-button')[0];
  let message = document.querySelectorAll('.js-countdown-message')[0];

  stage.parentNode.removeChild(stage);
  message.textContent = 'Trouble loading page.';
  button.innerHTML = 'Try again';

};
