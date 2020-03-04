import re

def value(d):
    if d == 'X':
        return 10
    if d.isdigit():
        return int(d)
    raise ValueError('Invalid digit')

def is_valid(isbn):
    matches = re.findall(r"[\dX]+", isbn)
    clean = ''.join(matches)
    if len(clean) != 10 or 0 <= clean.find('X') < 9:
        return False
    total = 0
    for i, v in enumerate([value(d) for d in clean]):
        total += v * (10-i)
    return total % 11 == 0
