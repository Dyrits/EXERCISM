const ORBITAL_PERIODS = {
    "earth": 1,
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
}

const getEarthYears = (seconds) => seconds / 31557600;

const roundNumber = (number, decimals = 2) => parseFloat(number.toFixed(decimals));

export const age = (planet, seconds) => roundNumber(getEarthYears(seconds) / ORBITAL_PERIODS[planet]);


