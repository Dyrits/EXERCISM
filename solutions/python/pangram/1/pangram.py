def is_pangram(sentence):
    letter = ord("a")
    capital_letter = ord("A")
    number_alphabet_letter = 0
    while letter < 123:
        if chr(letter) in sentence or chr(capital_letter) in sentence:
            number_alphabet_letter += 1
            letter += 1
            capital_letter += 1
        else:
            letter += 1
            capital_letter +=1
    if number_alphabet_letter == 26:
        return True
    else:
        return False