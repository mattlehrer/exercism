class Matrix:
    def __init__(self, matrix_string):
        r_strings = list(map(lambda a: a.split(' '), matrix_string.split('\n')))
        self.m = [list(map(int, r)) for r in r_strings]

    def row(self, index):
        return self.m[index-1]

    def column(self, index):
        return [r[index-1] for r in self.m]
