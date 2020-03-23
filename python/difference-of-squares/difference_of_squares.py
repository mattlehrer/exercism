def square_of_sum(number):
    return int(number * (number + 1) / 2) ** 2


def sum_of_squares(number):
    output = 0
    for i in range(1, number + 1):
        output += i ** 2
    return output


def difference_of_squares(number):
    return square_of_sum(number) - sum_of_squares(number)
