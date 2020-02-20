def classify(number):
  if number <= 0:
    raise ValueError('Not a natural number')
  factors = []
  if number > 1:
    factors.append(1)
  i = 2
  while i <= number / 2:
    if number % i == 0:
      factors.append(i)
    i += 1
  total = sum(factors)
  print(number, factors, sum(factors))
  if total == number:
    return 'perfect'
  elif total < number:
    return 'deficient'
  else:
    return 'abundant'
