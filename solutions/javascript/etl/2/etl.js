export const transform = (old) => {
  return Object.entries(old).reduce(function (scores, [point, letters]) {
    letters.forEach(letter => {
      scores[String(letter).toLowerCase()] = Number(point);
    })
    return scores;
  }, {});
};
