import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
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

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
