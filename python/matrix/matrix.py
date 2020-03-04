class Matrix:
    def __init__(self, matrix_string):
        r_strings = list(map(lambda a: a.split(' '), matrix_string.split('\n')))
        self.m = []
        for r in r_strings:
            self.m.append(list(map(int, r)))

    def row(self, index):
        return self.m[index-1]

    def column(self, index):
        c = []
        for r in self.m:
            c.append(r[index-1])
        return c
