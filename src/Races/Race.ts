export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }
  // private set name_1(value: string) {
  //   this._name = value;
  // }

  get dexterity(): number {
    return this._dexterity;
  }
  // private set dexterity(value: number) {
  //   this._dexterity = value;
  // }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }  

  abstract get maxLifePoints(): number;
}
