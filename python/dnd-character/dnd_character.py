from random import randint

class Character:
  def __init__(self):
    self.strength = self.ability()
    self.dexterity = self.ability()
    self.constitution = self.ability()
    self.intelligence = self.ability()
    self.wisdom = self.ability()
    self.charisma = self.ability()
    self.hitpoints = 10 + modifier(self.constitution)

  def ability(self):
    rolls = sorted([randint(1,6) for i in range(4)], reverse=True)
    rolls.pop()
    return sum(rolls)

def modifier(c):
  # subtract 10 from your character's constitution, divide by 2 and round down
  return (c - 10) // 2