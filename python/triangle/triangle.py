def equilateral(sides):
    return len({s for s in sides}) == 1 and sides[0] != 0


def isosceles(sides):
    return len({s for s in sides}) <= 2 and all(s != 0 and sum(sides) - 2*s > 0 for s in sides)


def scalene(sides):
    return len({s for s in sides}) == 3 and all(s != 0 and sum(sides) - 2*s > 0 for s in sides)
