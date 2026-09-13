import java.math.BigInteger;

class Grains {

    BigInteger grains = BigInteger.valueOf(2);

    BigInteger grainsOnSquare(final int square) {
        if (square > 0 && square < 65) { return grains.pow(square - 1) ; }
        else { throw new IllegalArgumentException("square must be between 1 and 64"); }
    }

    BigInteger grainsOnBoard() {
        return grains.pow(64).subtract(BigInteger.valueOf(1));
    }
}
