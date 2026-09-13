export const steps = (number, recursion=0) => {
  if (number < 1) { throw "Only positive numbers are allowed"; }
  return number === 1 ? recursion : steps(number % 2 ? number * 3 + 1 : number / 2, recursion + 1);
};
