def is_armstrong_number(number):
  digits = len(str(number))
  total = 0
  for char in str(number):
    total += int(char) ** digits
  return total == number
