// Chromatic
// A, A#, B, C, C#, D, D#, E, F, F#, G, G#
// A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab

// No Sharps or Flats: C major a minor
// Use Sharps: G, D, A, E, B, F# major e, b, f#, c#, g#, d# minor
// Use Flats: F, Bb, Eb, Ab, Db, Gb major d, g, c, f, bb, eb minor

const CHROMATIC_WITH_SHARPS = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const CHROMATIC_WITH_FLATS = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const NO_SHARPS_NO_FLATS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
    let adjustedTonic = tonic[0].toUpperCase() + tonic.slice(1, tonic.length);
    let scale;
    if (['C', 'a', 'G', 'D', 'A', 'E', 'B', 'F#', 'b', 'f#', 'c#', 'g#', 'd#'].includes(tonic)) scale = [...CHROMATIC_WITH_SHARPS.slice(CHROMATIC_WITH_SHARPS.indexOf(adjustedTonic), CHROMATIC_WITH_SHARPS.length), ...CHROMATIC_WITH_SHARPS.slice(0, CHROMATIC_WITH_SHARPS.indexOf(adjustedTonic))];
    else scale = [...CHROMATIC_WITH_FLATS.slice(CHROMATIC_WITH_FLATS.indexOf(adjustedTonic), CHROMATIC_WITH_FLATS.length), ...CHROMATIC_WITH_FLATS.slice(0, CHROMATIC_WITH_FLATS.indexOf(adjustedTonic))];

    this.scale = scale;
    // this.chromaticScaleWithSharps = [...CHROMATIC_WITH_SHARPS.slice(CHROMATIC_WITH_SHARPS.indexOf(tonic), CHROMATIC_WITH_SHARPS.length), ...CHROMATIC_WITH_SHARPS.slice(0, CHROMATIC_WITH_SHARPS.indexOf(tonic))];
    
    // this.chromaticScaleWithFlats = [...CHROMATIC_WITH_FLATS.slice(CHROMATIC_WITH_FLATS.indexOf(tonic), CHROMATIC_WITH_FLATS.length), ...CHROMATIC_WITH_FLATS.slice(0, CHROMATIC_WITH_FLATS.indexOf(tonic))];
  }

  chromatic() {
    return this.scale;
  }

  interval(intervals) {
    let scale = [];
    scale.push(this.scale[0]);
    let i = 0;
    [...intervals].map((l) => {
      switch (l) {
        case 'm':
          i += 1;
          if (i < this.scale.length) scale.push(this.scale[i]);
          break;
        case 'M':
          i += 2;
          if (i < this.scale.length) scale.push(this.scale[i]);
          break;
        case 'A':
          i += 3;
          if (i < this.scale.length) scale.push(this.scale[i]);
          break;
      }
    })
    return scale;
  }
}
