def is_armstrong_number(numbers):
    return sum(int(number) ** len(str(numbers)) for number in str(numbers)) == numbers