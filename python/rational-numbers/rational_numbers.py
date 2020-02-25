from __future__ import division
from math import gcd, fabs


class Rational:
    def __init__(self, numer, denom):
        divisor = gcd(numer, denom)
        if denom < 0:
            numer = numer * -1
            denom = denom * -1
        self.numer = int(numer / divisor)
        self.denom = int(denom / divisor)

    def __eq__(self, other):
        return self.numer == other.numer and self.denom == other.denom

    def __repr__(self):
        return '{}/{}'.format(self.numer, self.denom)

    def __add__(self, other):
        # (a1 * b2 + a2 * b1) / (b1 * b2)
        numer = self.numer * other.denom + self.denom * other.numer
        denom = self.denom * other.denom
        return Rational(numer, denom)
            

    def __sub__(self, other):
        # (a1 * b2 - a2 * b1) / (b1 * b2)
        numer = self.numer * other.denom - self.denom * other.numer
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __mul__(self, other):
        # (a1 * a2) / (b1 * b2)
        numer = self.numer * other.numer
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __truediv__(self, other):
        # (a1 * b2) / (a2 * b1)
        numer = self.numer * other.denom
        denom = self.denom * other.numer
        return Rational(numer, denom)

    def __abs__(self):
        # |a|/|b|
        numer = fabs(self.numer)
        denom = fabs(self.denom)
        divisor = gcd(int(numer), int(denom))
        return Rational(int(numer / divisor), int(denom / divisor))

    def __pow__(self, power):
        if power % 1 == 0:
            if power > 0:
                # (a^n)/(b^n)
                numer = self.numer ** power
                denom = self.denom ** power
            elif power < 0:
                # (b^m)/(a^m), where m = |n|
                numer = self.denom ** fabs(power)
                denom = self.numer ** fabs(power)
            else:
                numer = 1
                denom = 1
        else:
            # (a^x)/(b^x)
            numer = self.numer ** power
            denom = self.denom ** power
        return Rational(numer, denom)

    def __rpow__(self, base):
        # x^(a/b) = root(x^a, b), where root(p, q) is the qth root of p
        if self.numer == 0:
            exponent = 0
        else:
            exponent = float(self.numer / self.denom)
        return base ** exponent
