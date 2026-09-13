public class Hamming {
    String leftDNAStrand;
    String rightDNAStrand;

    public Hamming(String leftStrand, String rightStrand) {
        leftDNAStrand = leftStrand;
        rightDNAStrand = rightStrand;
        // Checking lengths:
        int leftDNALength = leftDNAStrand.length();
        int rightDNALength = rightDNAStrand.length();
        if (leftDNALength != rightDNALength) {
            if (leftDNALength == 0) { throw new IllegalArgumentException("left strand must not be empty."); }
            if (rightDNALength == 0) { throw new IllegalArgumentException("right strand must not be empty."); }
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
    }

    public int getHammingDistance() {
        int hammingDistance = 0;
        for(int index = 0; index < leftDNAStrand.length(); index++) {
            if (leftDNAStrand.charAt(index) != rightDNAStrand.charAt(index)) {
                hammingDistance += 1;
            }
        }
        return hammingDistance;
    }
}
