def factors(value):
    if value == 1:
        return []
    factor_list = []
    current = value
    while not current % 2:
        factor_list.append(2)
        current = int(current/2)
    divisor = 3
    while divisor <= current:
        while not current % divisor:
            current = int(current/divisor)
            factor_list.append(divisor)
        divisor += 2
    return factor_list
