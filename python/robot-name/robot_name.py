import random

def rand_letter():
  return random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

def rand_num():
  return random.choice('0123456789')

def create_name():
  return f'{rand_letter()}{rand_letter()}{rand_num()}{rand_num()}{rand_num()}'

class Robot:
  existing_names = set()

  def __init__(self):
    attempt = create_name()
    while (attempt in Robot.existing_names):
      attempt = create_name()
    self.name = attempt
    Robot.existing_names.add(attempt)

  def reset(self):
    attempt = create_name()
    while (attempt in Robot.existing_names):
      attempt = create_name()
    self.name = attempt
    Robot.existing_names.add(attempt)
