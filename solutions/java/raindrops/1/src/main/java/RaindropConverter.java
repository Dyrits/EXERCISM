import java.util.LinkedHashMap;
import java.util.Map;

class RaindropConverter {
    static Map<Integer, String> drops = new LinkedHashMap<Integer, String>(){{
        put(3, "Pling");
        put(5, "Plang");
        put(7, "Plong");
    }};

    String convert(int number) {
        StringBuilder string = new StringBuilder();
        for(Map.Entry<Integer, String> drop : drops.entrySet()) {
            if (number % drop.getKey() == 0) { string.append(drop.getValue()); }
        }
        return (string.length() == 0) ? String.valueOf(number) : string.toString();
    }
}
