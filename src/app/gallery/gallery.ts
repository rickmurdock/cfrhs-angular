export class Gallery {
  public constructor(init?: Partial<Gallery>){
    Object.assign(this, init);
  }
  imageName: string;
  caption: string;
  type: string;
}