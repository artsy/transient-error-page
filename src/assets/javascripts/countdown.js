import Cookies from 'cookies-js';

export default class Countdown {
  constructor(limit = 3) {
    this.setAttempts(this.getAttempts() + 1);
    this.limit = limit;
    this.interval = 1000;
    this.length = Math.pow(limit, this.getAttempts());
    this.duration = this.interval * this.length;
  }

  shouldStart() {
    return this.limit >= this.getAttempts();
  }

  getAttempts() {
    return parseInt(Cookies.get('attempts') || 0)
  }

  setAttempts(attempts) {
    this.attempts = Cookies.set('attempts', attempts, { expires: 600 }); // Reset after 10 minutes
    return attempts;
  }

  isDone() {
    return this.length === 0;
  }

  tick() {
    this.length = this.length - 1;
    return this.length;
  }
};
