import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _characterFighter: Fighter;
  _monster: (Fighter | SimpleFighter)[];

  constructor(characterFighter: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(characterFighter);
    this._characterFighter = characterFighter;
    this._monster = monster;
  }

  // fight(): number {
  //   while (this._characters1.lifePoints > 0
  //       && this._characters2.lifePoints > 0) {
  //     this._characters1.attack(this._characters2);
  //     this._characters2.attack(this._characters1);
  //   }
  //   return super.fight();
  // }
}
