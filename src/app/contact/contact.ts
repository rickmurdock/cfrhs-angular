export class Contact {
  public constructor(init?: Partial<Contact>) {
    Object.assign(this, init);
  }
  position: string;
  name: string;
  email: string;
  board: boolean;
}