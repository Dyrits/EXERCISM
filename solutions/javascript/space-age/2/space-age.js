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

const SECONDS_IN_A_YEAR = 31_557_600;

const earthAge = seconds => seconds / SECONDS_IN_A_YEAR;

const spaceAge = (planet, seconds) => earthAge(seconds) / ORBITAL_PERIODS[planet];

const round = (number, decimals = 2) => parseFloat(number.toFixed(decimals));

export const age = (planet, seconds) => round(spaceAge(planet, seconds));