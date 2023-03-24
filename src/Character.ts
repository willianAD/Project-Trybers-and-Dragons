import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  _name: string;

  constructor(name: string) {
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._name = name;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
  
  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
  
  special(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength * 2);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  // set lifePoints(value: number) {
  //   this._lifePoints = value;
  // }

  get strength(): number {
    return this._strength;
  }
  // set strength(value: number) {
  //   this._strength = value;
  // }

  get defense(): number {
    return this._defense;
  }
  // set defense(value: number) {
  //   this._defense = value;
  // }

  get dexterity(): number {
    return this._dexterity;
  }
  // set dexterity(value: number) {
  //   this._dexterity = value;
  // }

  get energy(): Energy {
    return { ...this._energy };
  }
  // set energy(value: Energy) {
  //   this._energy = value;
  // }

  get race(): Race {
    return this._race;
  }
  // set race(value: Race) {
  //   this._race = value;
  // }

  get archetype(): Archetype {
    return this._archetype;
  }
  // set archetype(value: Archetype) {
  //   this._archetype = value;
  // }
}
