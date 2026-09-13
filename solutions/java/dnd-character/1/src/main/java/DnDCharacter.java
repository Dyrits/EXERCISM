import java.util.Random;

class DnDCharacter {
    static Random dice = new Random();
    private int strength, dexterity, constitution, intelligence, wisdom, charisma, hitpoints;

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

    int getStrength() {
        if (this.strength == 0) { this.strength = this.ability(); }
        return this.strength;
    }

    int getDexterity() {
        if (this.dexterity == 0) { this.dexterity = this.ability(); }
        return this.dexterity;
    }

    int getConstitution() {
        if (this.constitution == 0) { this.constitution = this.ability(); }
        return this.constitution;
    }

    int getIntelligence() {
        if (this.intelligence == 0) { this.intelligence = this.ability(); }
        return this.intelligence;
    }

    int getWisdom() {
        if (this.wisdom == 0) { this.wisdom = this.ability(); }
        return this.wisdom;
    }

    int getCharisma() {
        if (this.charisma == 0) { this.charisma = this.ability(); }
        return this.charisma;
    }

    int getHitpoints() {
        if (this.hitpoints == 0) { this.hitpoints = 10 + this.modifier(getConstitution()); }
        return this.hitpoints;
    }

}
