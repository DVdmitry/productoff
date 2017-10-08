export class Product {
  constructor(public id: number, public name: string, public shop: string,
              public scale: string, public regularPrice: number,
              public salePrice: number, public competitorPrice: number,
              public quantity: number, public totalPrice: number,
              public saveMoney: number, public totalDiscount: number) {}
}
