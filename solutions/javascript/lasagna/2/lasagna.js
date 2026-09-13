const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = (minutes) => EXPECTED_MINUTES_IN_OVEN - minutes;
export const preparationTimeInMinutes = (layers) => PREPARATION_MINUTES_PER_LAYER * layers;
export const totalTimeInMinutes = (layers, minutes) => preparationTimeInMinutes(layers) + minutes;
