def steps(number):
    if number < 1:
        raise ValueError('Invalid')
    if number == 1:
        return 0
    return 1 + (steps(3*number + 1) if number % 2 else steps(number / 2))
