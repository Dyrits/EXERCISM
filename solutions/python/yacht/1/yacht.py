YACHT = lambda dice: 50 if dice[0] == dice[1] == dice[2] == dice[3] == dice[4] else 0
ONES = lambda dice: dice.count(1) * 1
TWOS = lambda dice: dice.count(2) * 2
THREES = lambda dice:  dice.count(3) * 3
FOURS = lambda dice: dice.count(4) * 4
FIVES = lambda dice: dice.count(5) * 5
SIXES = lambda dice: dice.count(6) * 6

def FULL_HOUSE(dice):
    dice.sort()
    if dice[0] == dice[1] == dice[2] == dice[3] == dice[4]:
        return 0
    elif (dice[0] == dice[1] == dice[2] and dice[3] == dice[4]) or (dice[0] == dice[1] and dice[2] == dice[3] == dice[4]):
        return sum(dice)
    else:
        return 0

def FOUR_OF_A_KIND(dice):
    dice.sort()
    if dice[0] == dice[1] == dice[2] == dice[3]:
        return sum(dice) - dice [4]
    elif dice[1] == dice[2] == dice[3] == dice[4]:
        return sum(dice) - dice[0]
    else:
        return 0

LITTLE_STRAIGHT = lambda dice: 30 if sorted(dice) == [1, 2, 3, 4, 5] else 0
BIG_STRAIGHT = lambda dice: 30 if sorted(dice) == [2, 3, 4, 5, 6] else 0
CHOICE = lambda dice: sum(dice)

def score(dice, category):
    return(category(dice))
