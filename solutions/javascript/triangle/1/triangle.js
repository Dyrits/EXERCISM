//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(sizeA, sizeB, sizeC) {
    this.sizeA = sizeA;
    this.sizeB = sizeB;
    this.sizeC = sizeC;
  }

  checkEquality() {
    return Math.max(this.sizeA, this.sizeB, this.sizeC) < this.sizeA + this.sizeB + this.sizeC - Math.max(this.sizeA, this.sizeB, this.sizeC)
  }

  isEquilateral() {
    return this.checkEquality() && (this.sizeA === this.sizeB && this.sizeB === this.sizeC);
  }

  isIsosceles() {
    return this.checkEquality() && (this.sizeA === this.sizeB || this.sizeA === this.sizeC || this.sizeB === this.sizeC);
  }

  isScalene() {
    return this.checkEquality() && !this.isIsosceles();
  }
}
