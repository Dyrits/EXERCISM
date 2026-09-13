import random
import string

class Robot:
    def __init__(self):
        self.name = self.generate_name()

    def generate_name(self):
        return random.choice(string.ascii_letters).upper() + random.choice(string.ascii_letters).upper() \
            + str(random.randrange(1, 9)) + str(random.randrange(1, 9)) + str(random.randrange(1, 9))

    def reset(self):
        old_name = self.name
        new_name = self.generate_name()
        while old_name == new_name:
            new_name = self.generate_name()
        self.name = new_name