"""
This exercise stub and the test suite contain several enumerated constants.

Since Python 2 does not have the enum module, the idiomatic way to write
enumerated constants has traditionally been a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""


# Score categories.
# Change the values as you see fit.
YACHT = lambda d: 50 if len(set(d)) == 1 else 0
ONES = lambda d: d.count(1)
TWOS = lambda d: 2 * d.count(2)
THREES = lambda d: 3 * d.count(3)
FOURS = lambda d: 4 * d.count(4)
FIVES = lambda d: 5 * d.count(5)
SIXES = lambda d: 6 * d.count(6)
FULL_HOUSE = lambda d: sum(d) if len(set(d)) == 2 and (d.count(d[0]) == 2 or d.count(d[0]) == 3) else 0
FOUR_OF_A_KIND = lambda d: 4 * d[0] if d.count(d[0]) >= 4 else 0 + 4 * d[1] if d.count(d[1]) >= 4 and d[0] != d[1] else 0
LITTLE_STRAIGHT = lambda d: 30 if len(set(d)) == 5 and 6 not in d else 0
BIG_STRAIGHT = lambda d: 30 if len(set(d)) == 5 and 1 not in d else 0
CHOICE = lambda d: sum(d)


def score(dice, category):
  return category(dice)
