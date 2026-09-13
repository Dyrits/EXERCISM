//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (leftStrand, rightStrand) => {
  verifyLength(leftStrand, rightStrand)
  return [...leftStrand].filter((cell, index) => cell !== rightStrand[index]).length;
};

const verifyLength = (leftStrand, rightStrand) => {
  if (leftStrand.length !== rightStrand.length) {
    if (!leftStrand) { throw new Error("left strand must not be empty"); }
    if (!rightStrand) { throw new Error("right strand must not be empty"); }
    throw new Error("left and right strands must be of equal length");
  }
}
