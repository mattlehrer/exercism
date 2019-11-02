const EARTH_YEAR_IN_SECONDS: number = 31557600;

class SpaceAge {
  seconds: number;

  constructor(ageInSeconds: number) {
    this.seconds = ageInSeconds;
  }

  onEarth = () => {
    return Number((this.seconds / EARTH_YEAR_IN_SECONDS).toFixed(2));
  }

  onMercury = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 0.2408467)).toFixed(2));
  }

  onVenus = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 0.61519726)).toFixed(2));
  }

  onMars = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 1.8808158)).toFixed(2));
  }

  onJupiter = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 11.862615)).toFixed(2));
  }

  onSaturn = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 29.447498)).toFixed(2));
  }

  onUranus = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 84.016846)).toFixed(2));
  }

  onNeptune = () => {
    return Number((this.seconds / (EARTH_YEAR_IN_SECONDS * 164.79132)).toFixed(2));
  }
}

export default SpaceAge
