def square(number):
    if not 1 <= number <= 64:
        raise ValueError('Out of range')
    return 2 ** (number - 1)


def total():
    # return sum(2**(n - 1) for n in range(1, 65))
    return 2**64 - 1
