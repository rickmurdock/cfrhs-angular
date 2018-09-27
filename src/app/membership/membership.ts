export class Membership {
  public constructor(init?: Partial<Membership>){
    Object.assign(this, init);
  }
  level: string;
  description: string;
  cost: string;
  paypalValue: string;
}