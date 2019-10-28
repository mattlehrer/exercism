/*
  Mercury: orbital period 0.2408467 Earth years
  Venus: orbital period 0.61519726 Earth years
  Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
  Mars: orbital period 1.8808158 Earth years
  Jupiter: orbital period 11.862615 Earth years
  Saturn: orbital period 29.447498 Earth years
  Uranus: orbital period 84.016846 Earth years
  Neptune: orbital period 164.79132 Earth years
*/

const EARTH_YEAR_IN_SECONDS = 31557600;

const EARTH_YEAR_CONVERSION = {
  'mercury': 0.2408467 * EARTH_YEAR_IN_SECONDS,
  'venus': 0.61519726 * EARTH_YEAR_IN_SECONDS,
  'earth': 1.0 * EARTH_YEAR_IN_SECONDS,
  'mars': 1.8808158 * EARTH_YEAR_IN_SECONDS,
  'jupiter': 11.862615 * EARTH_YEAR_IN_SECONDS,
  'saturn': 29.447498 * EARTH_YEAR_IN_SECONDS,
  'uranus': 84.016846 * EARTH_YEAR_IN_SECONDS,
  'neptune': 164.79132 * EARTH_YEAR_IN_SECONDS
};

export const age = (planet, ageInSeconds) => {
  const ageInYears = ageInSeconds / EARTH_YEAR_CONVERSION[planet];
  return Number(ageInYears.toFixed(2));
};
