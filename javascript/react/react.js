export class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.value = fn(inputCells);
  }

  addCallback(cb) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }

  removeCallback(cb) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }
}

export class CallbackCell {
  constructor(fn) {
    throw new Error(
      'Remove this statement and implement this function'
    );
  }
}
