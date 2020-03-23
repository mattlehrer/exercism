from math import floor, ceil

def factors(n, min_factor, max_factor):
    if n == 1:
        return [[1, 1]]
    return [[i, int(n/i)] for i in range(min_factor, floor(n**0.5) + 1) if not n % i and n/i <= max_factor]


def products(min_factor, max_factor):
    return {i*j for i in range(min_factor, max_factor + 1) for j in range(min_factor, max_factor + 1)}


def is_palindrome(n):
    str_n = str(n)
    return all(str_n[i] == str_n[-1 - i] for i in range(ceil(len(str_n))))


def palindromes(numbers):
    return {n for n in numbers if is_palindrome(n)}


def largest(max_factor, min_factor=0):
    if max_factor < min_factor:
        raise ValueError('Invalid')
    pals = palindromes(products(min_factor, max_factor))
    if pals:
        value = max(pals)
        return value, factors(value, min_factor, max_factor)
    return None, []
    # looking for efficient method but this doesn't find max
    # for i in range(max_factor, min_factor - 1, -1):
    #     for j in range(max_factor, i - 1, -1):
    #         value = i * j
    #         if is_palindrome(value):
    #             return value, factors(value, min_factor, max_factor)
    # return None, []


def smallest(max_factor, min_factor=0):
    if max_factor <= min_factor:
        raise ValueError('Invalid')
    for i in range(min_factor, max_factor + 1):
        for j in range(min_factor, i + 1):
            value = i * j
            if is_palindrome(value):
                return value, factors(value, min_factor, max_factor)
    return None, []
