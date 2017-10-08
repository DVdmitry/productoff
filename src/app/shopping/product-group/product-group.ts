import { Product } from '../product';

export class ProductGroup {
  constructor(public id: number, public name: string, public src: string,
              public productList: Product []) {}
}
