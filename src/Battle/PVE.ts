import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _characterFighter: Fighter;
  _monster: (Fighter | SimpleFighter)[];

  constructor(characterFighter: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(characterFighter);
    this._characterFighter = characterFighter;
    this._monster = monster;
    super.fight();
  }

  fight(): number {
    this._monster.forEach((e) => {
      while (this._characterFighter.lifePoints > 0
        && e.lifePoints > 0) {
        this._characterFighter.attack(e);
        e.attack(this._characterFighter);
      }
    });
    return super.fight();
  }
}
