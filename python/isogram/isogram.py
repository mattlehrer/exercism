def is_isogram(string):
  non_letters = ' -'
  num_letters = len({c.lower() for c in string if c not in non_letters})
  num_non_letters = len([c for c in string if c in non_letters])
  return num_letters + num_non_letters == len(string)
