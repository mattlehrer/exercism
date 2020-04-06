def is_isogram(string):
    return not len({c.lower() for c in string if c not in ' -'}) + len([c for c in string if c in ' -']) - len(string)
