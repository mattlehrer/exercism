def latest(scores):
    return scores[-1]


def personal_best(scores):
    return max(scores)


def personal_top_three(scores):
    n = 3 if len(scores) >= 3 else len(scores)
    return sorted(scores, reverse=True)[:n]
