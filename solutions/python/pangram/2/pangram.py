def is_pangram(sentence):
    number_alphabet_letter = 0
    for letter in range(97, 123):
        if chr(letter) in sentence.lower():
            number_alphabet_letter += 1
    if number_alphabet_letter == 26:
        return True
    else:
        return False