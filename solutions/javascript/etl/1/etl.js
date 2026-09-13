export const transform = (object) => {
  return Object.entries(object).reduce(function (accumulator, [point, letters]) {
    letters.forEach(letter => {
      accumulator[String(letter).toLowerCase()] = Number(point);
    })
    return accumulator;
  }, {});
};
