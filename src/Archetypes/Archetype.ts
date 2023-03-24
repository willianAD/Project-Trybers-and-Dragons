import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }
  // set name(value: string) {
  //   this._name = value;
  // }

  get special(): number {
    return this._special;
  }
  // set special(value: number) {
  //   this._special = value;
  // }

  get cost(): number {
    return this._cost;
  }
  // set cost(value: number) {
  //   this._cost = value;
  // }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }  

  abstract get energyType(): EnergyType;
}
