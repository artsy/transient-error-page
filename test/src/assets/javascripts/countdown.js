import sinon from 'sinon';
import Countdown from '../../../../src/assets/javascripts/countdown';

describe('Countdown', () => {
  beforeEach(() => {
    sinon.stub(Countdown.prototype, 'getAttempts', function() {
      return this.attempts || 0;
    });

    sinon.stub(Countdown.prototype, 'setAttempts', function(x) {
      this.attempts = x;
    });
  });

  afterEach(() => {
    Countdown.prototype.getAttempts.restore();
    Countdown.prototype.setAttempts.restore();
  });

  describe('#constructor', () => {
    it('sets up the countdown state', () => {
      let countdown = new Countdown;

      countdown.attempts.should.equal(1);
      countdown.limit.should.equal(3);
      countdown.interval.should.equal(1000);
      countdown.length.should.equal(3);
      countdown.duration.should.equal(3000);
    });
  });

  describe('#tick', () => {
    it('decrements the countdown', () => {
      let countdown = new Countdown;

      countdown.tick().should.equal(2);
    });
  });

  describe('#shouldStart', () => {
    it('returns true if the countdown should start', () => {
      Countdown.prototype.getAttempts.restore();
      sinon.stub(Countdown.prototype, 'getAttempts').returns(0);

      let countdown = new Countdown;

      countdown.limit.should.equal(3);
      countdown.shouldStart().should.be.true();
    });


    it('returns true if the countdown should start', () => {
      Countdown.prototype.getAttempts.restore();
      sinon.stub(Countdown.prototype, 'getAttempts').returns(4);

      let countdown = new Countdown;

      countdown.limit.should.equal(3);
      countdown.shouldStart().should.be.false();
    });
  });
});
