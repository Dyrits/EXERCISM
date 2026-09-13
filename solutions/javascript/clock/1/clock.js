export class Clock {
  constructor(hours = 0, minutes = 0) {
    this._hours = hours;
    this._minutes = minutes;
    this.adjustTime(minutes);
  }

  toString() {
    return `${this._hours < 10 ? "0" + this._hours : this._hours}:${this._minutes < 10 ? "0" + this._minutes : this._minutes}`
  }

  plus(minutes) {
    this._minutes += minutes;
    this.adjustTime(this._minutes);
    return this;
  }

  minus(minutes) {
    this._minutes -= minutes;
    this.adjustTime(this._minutes);
    return this;
  }

  adjustTime(minutes) {
    this._minutes = this._minutes % 60 && this._minutes < 0 ? this._minutes % 60 + 60 : this._minutes % 60;
    this._hours += Math.floor(minutes / 60);
    this._hours = this._hours % 24 && this._hours < 0 ? this._hours % 24 + 24 : this._hours % 24;
  }

  equals(other) {
    return this.toString() === other.toString();
  }
}