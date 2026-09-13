def convert(number):
    drops = [(3, 'Pling'), (5, 'Plang'), (7, 'Plong')]
    return str("".join([drop for factor, drop in drops if number % factor == 0])) or str(number)