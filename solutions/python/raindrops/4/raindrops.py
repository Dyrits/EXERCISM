def convert(number):
    result = str()
    result += '' if number % 3 else 'Pling'
    result += '' if number % 5 else 'Plang'
    result += '' if number % 7 else 'Plong'
    return result or str(number)