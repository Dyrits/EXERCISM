YACHT = lambda dice: 50 if [i for i in dice if dice.count(i) == 5] else 0
ONES = lambda dice: dice.count(1) * 1
TWOS = lambda dice: dice.count(2) * 2
THREES = lambda dice:  dice.count(3) * 3
FOURS = lambda dice: dice.count(4) * 4
FIVES = lambda dice: dice.count(5) * 5
SIXES = lambda dice: dice.count(6) * 6
FULL_HOUSE = lambda dice: sum(dice) if [i for i in dice if dice.count(i) == 3] and [j for j in dice if dice.count(j) == 2] else 0
FOUR_OF_A_KIND = lambda dice: sum([i for i in dice if dice.count(i) > 3][:4])
LITTLE_STRAIGHT = lambda dice: 30 if sorted(dice) == [1, 2, 3, 4, 5] else 0
BIG_STRAIGHT = lambda dice: 30 if sorted(dice) == [2, 3, 4, 5, 6] else 0
CHOICE = lambda dice: sum(dice)

def score(dice, category):
    return(category(dice))
