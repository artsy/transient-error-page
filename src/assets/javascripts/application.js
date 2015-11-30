import ProgressBar from 'progressbar.js';
import Countdown from './countdown';

let countdown = new Countdown;
let stage = document.querySelectorAll('.js-countdown-stage')[0];

if (countdown.shouldStart()) { // Start the countdown

  let el = document.querySelectorAll('.js-countdown-timer')[0];

  let circle = new ProgressBar.Circle(el, {
    duration: countdown.duration,
    color: '#000',
    trailColor: '#ccc',
    easing: 'linear',
    strokeWidth: 3
  });

  let tick = () => {
    el.setAttribute('data-count', countdown.length);
    if (countdown.isDone()) {
      clearInterval(ticker);
      return location.reload();
    }
    countdown.tick();
  };

  circle.animate(1);

  tick();
  let ticker = setInterval(tick, countdown.interval);

} else { // Give up

  let button = document.querySelectorAll('.js-countdown-button')[0];
  let message = document.querySelectorAll('.js-countdown-message')[0];

  stage.outerHTML = `
    <h2 class='error-page-subheadline'>
      We’re working on it, please try back later or contact
      <a href='mailto:support@artsy.net'>support@artsy.net</a>
    </h2>
  `;
  message.textContent = 'Sorry, we can’t process your request at this moment.';
  button.innerHTML = 'Try again';

};
