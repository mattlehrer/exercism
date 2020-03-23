def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError('Invalid')
    dist = 0
    for i, c in enumerate(strand_a):
        if c != strand_b[i]:
            dist += 1
    return dist
