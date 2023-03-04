export class Product {
  constructor(
    public id: string,
    public name: string,
    public imageUri: string,
    public price: number,
    public stockCount: number,
    public discount: number,
    public rate: number,
  ) {}
}
