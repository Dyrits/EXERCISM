def is_pangram(sentence):
    number_alphabet_letter = 0
    for letter in range(97, 123):
        if chr(letter) in sentence.lower():
            number_alphabet_letter += 1
    return number_alphabet_letter == 26