export class Order {
  constructor(
    public id: string,
    public name: string,
    public imageUri: string,
    public price: number,
    public discount: number,
    public destinationCoords: [number, number],
    public status: 'pending' | 'in-process' | 'delivery' | 'delivered',
  ) {}
}
