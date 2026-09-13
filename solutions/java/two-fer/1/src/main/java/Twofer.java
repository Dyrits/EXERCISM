public class Twofer {
    public String twofer(String name) {
        if (name == null) { return "One for you, one for me."; }
        return String.format("One for %s, one for me.", name);
    }

    public String twofer() {
        return "One for you, one for me.";
    }
}
