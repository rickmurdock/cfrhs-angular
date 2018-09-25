export class Board {
  public constructor(init?: Partial<Board>) {
    Object.assign(this, init);
  }
  position: string;
  name: string;
  email: string;
  board: boolean;
}