export class PhoneNumber {
  constructor(str) {
    const re = new RegExp(/^(?:\+?1? *\(?)([2-9]\d{2})(?:\)? *\.?)([2-9]\d{2})(?:-?\.? *)(\d{4})(?:\W*)$/);
    const matches = str.match(re);
    try {
      const trial = `${matches[1]}${matches[2]}${matches[3]}`;
      this.cleaned = trial.length === 10 ? trial : null;
    }
    catch (e) {
      this.cleaned = null;
    }
  }

  number() {
    return this.cleaned;
  }
}
