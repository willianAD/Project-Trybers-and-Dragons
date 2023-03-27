import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _characters1: Fighter;
  _characters2: Fighter;

  constructor(characters1: Fighter, characters2: Fighter) {
    super(characters1);
    this._characters1 = characters1;
    this._characters2 = characters2;
    super.fight();
  }

  fight(): number {
    if (this._characters1.lifePoints > 0 || this._characters2.lifePoints > 0) {
      this._characters1.attack(this._characters2);
      this._characters2.attack(this._characters1);
    }
    return this._characters1.lifePoints === -1 ? -1 : 1;
  }
}
