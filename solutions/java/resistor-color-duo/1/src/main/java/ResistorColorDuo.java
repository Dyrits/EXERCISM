import java.util.Arrays;

class ResistorColorDuo {

    static public final String[] COLORS = {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};

    int value(String[] colors) {
        return Arrays.asList(COLORS).indexOf(colors[0]) * 10 + Arrays.asList(COLORS).indexOf(colors[1]);
    }
}