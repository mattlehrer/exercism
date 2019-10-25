//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes = 0) {
    while (minutes >= 60) {
      hour++;
      minutes -= 60;
    }
    while (minutes < 0) {
      hour -= 1;
      minutes += 60;
    }
    while (hour < 0) {
      hour += 24;
    }
    this.hour = hour % 24;
    this.minutes = minutes % 60;
  }

  toString() {
    return `${this.hour < 10 ? '0' + this.hour : this.hour}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}`
  }

  plus(minutes) {
    return new Clock(this.hour, this.minutes + minutes);
  }

  minus(minutes) {
    return new Clock(this.hour, this.minutes - minutes);
  }

  equals(clockTwo) {
    return this.hour === clockTwo.hour && this.minutes === clockTwo.minutes;
  }
}
