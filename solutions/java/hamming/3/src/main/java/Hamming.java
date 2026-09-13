public class Hamming {
    String leftDNAStrand;
    String rightDNAStrand;
    int hammingDistance;

    public Hamming(String leftStrand, String rightStrand) {
        leftDNAStrand = leftStrand;
        rightDNAStrand = rightStrand;
        hammingDistance = calculateHammingDistance(leftDNAStrand, rightDNAStrand);
    }

    public static int calculateHammingDistance(String leftStrand, String rightStrand) {
        checkStrandLengths(leftStrand, rightStrand);
        int calculatedHammingDistance = 0;
        for (int index = 0; index < leftStrand.length(); index++) {
            if (leftStrand.charAt(index) != rightStrand.charAt(index)) {
                calculatedHammingDistance += 1;
            }
        }
        return calculatedHammingDistance;
    }

    private static void checkStrandLengths(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) {
            if (leftStrand.isEmpty()) { throw new IllegalArgumentException("left strand must not be empty."); }
            if (rightStrand.isEmpty()) { throw new IllegalArgumentException("right strand must not be empty."); }
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
    }

    public int getHammingDistance() {
        return hammingDistance;
    }
}
