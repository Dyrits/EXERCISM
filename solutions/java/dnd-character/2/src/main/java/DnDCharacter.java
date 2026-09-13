import java.util.Random;

class DnDCharacter {
    static Random dice = new Random();
    private int strength, dexterity, constitution, intelligence, wisdom, charisma, hitpoints;

    public DnDCharacter() {
        this.strength = this.ability();
        this.dexterity = this.ability();
        this.constitution = this.ability();
        this.intelligence = this.ability();
        this.wisdom = this.ability();
        this.charisma = this.ability();
        this.hitpoints = 10 + this.modifier(getConstitution());
    }

    int ability() {
        int score = 0;
        int rollResult;
        int smallestRoll = 6;
        for (int roll = 0; roll < 4; roll ++) {
            rollResult = dice.nextInt(6) + 1;
            smallestRoll = Math.min(rollResult, smallestRoll);
            score += rollResult;
        }
        return score - smallestRoll;
    }

    int modifier(int input) {
        return (input - 10) < 0 ? (int) -(Math.ceil(Math.abs(input - 10) / 2.0)) : (input - 10) / 2;
    }

    int getStrength() { return this.strength; }

    int getDexterity() { return this.dexterity; }

    int getConstitution() { return this.constitution; }

    int getIntelligence() { return this.intelligence; }

    int getWisdom() { return this.wisdom; }

    int getCharisma() { return this.charisma; }

    int getHitpoints() { return this.hitpoints; }

}
