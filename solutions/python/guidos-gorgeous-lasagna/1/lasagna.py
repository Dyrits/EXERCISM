EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes).

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers):
    """Calculate the bake time remaining.

    :param number_of_layers: int - number of layers.
    :return: int - preparation time (in minutes).

    Function that takes the number of layers added to the lasagna as an argument
    and returns the preparation time based on the `PREPARATION_TIME`.
    """
    return PREPARATION_TIME * number_of_layers


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the bake time remaining.

    :param number_of_layers: int - number of layers.
    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - elapsed cooking time (in minutes)

    Function that takes the number of layers added to the lasagna and the
    actual minutes the lasagna has been in the oven as arguments and returns
    the total number of minutes spent cooking.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
