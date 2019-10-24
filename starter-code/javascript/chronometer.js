class Chronometer {
  constructor() {
    this.currentTime = 100000;
    this.intervalId = 0;
  }

  startClick() {
    const currentThis = this;
    this.intervalId = setInterval(() => {
      currentThis.currentTime++;
      printTime();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    let seconds = Math.floor((this.currentTime % 6000) / 100);
    if (seconds > 0) {
      return seconds;
    } else {
      return 0;
    }
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return String(value);
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.currentTime;
  }
  getMilliseconds() {
    return this.currentTime % 100;
  }
}
