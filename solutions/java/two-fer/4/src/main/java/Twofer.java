public class Twofer {
    public String twofer(String name) {
        return "One for " + (name == null ? "you" : name) + ", one for me.";
    }

    public String twofer() {
        return "One for you, one for me.";
    }
}
