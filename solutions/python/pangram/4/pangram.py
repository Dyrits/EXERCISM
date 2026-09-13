def is_pangram(sentence):
    number_letter = [letter for letter in range(97, 123) if chr(letter) in sentence.lower()] 
    return len(set(number_letter)) == 26