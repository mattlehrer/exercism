//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
}

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    const rolls = [roll(), roll(), roll(), roll()];
    let min = 6;
    const total = rolls.reduce((sum, curr) => {
      if (curr < min) min = curr;
      return sum + curr
    });
    return total - min;
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
  }

  get strength() {
    return this.strengthValue;
  }
  set strength(value) {
    this.strengthValue = value;
  }

  get dexterity() {
    return this.dexterityValue;
  }
  set dexterity(value) {
    this.dexterityValue = value;
  }

  get constitution() {
    return this.constitutionValue;
   }
  set constitution(value) {
    this.constitutionValue = value;
  }
  
  get intelligence() {
    return this.intelligenceValue;
  }
  set intelligence(value) {
    this.intelligenceValue = value;
  }

  get wisdom() {
    return this.wisdomValue;
  }
  set wisdom(value) {
    this.wisdomValue = value;
  }

  get charisma() {
    return this.charismaValue;
  }
  set charisma(value) {
    this.charismaValue = value;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
