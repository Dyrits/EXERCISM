export const steps = (number, recursion=0) => {
  if (number < 1) { throw new Error('Only positive numbers are allowed'); }
  return number === 1 ?
    recursion : number % 2 ?
      steps(number * 3 + 1, recursion + 1) : steps(number / 2, recursion + 1);
};
