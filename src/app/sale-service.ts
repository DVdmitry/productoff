import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NaviLinks } from './navbar/navi-links';
import { Pict } from './main-pict/pict';
import { ProductGroup } from './shopping/product-group/product-group';
import {Product} from './shopping/product';
import { CART} from './shopping/cart/cart';

@Injectable()
export class SaleService {
  private productsUrl = 'api/productGroups';
  private linksUrl = 'api/naviLinks';
  private pictUrl = 'api/mainPicts';
  private cartUrl  = 'api/cart';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor (private http: Http) {}
  getLinks(): Promise<NaviLinks []> {
    return this.http.get(this.linksUrl)
      .toPromise()
      .then(response => response.json() as NaviLinks[])
      .catch(this.handleError);
  }
  getPicts(): Promise<Pict[]> {
    return this.http.get(this.pictUrl)
      .toPromise()
      .then(picts => picts.json() as Pict []);
  }

  getGroupData(): Promise<ProductGroup[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => {
        return response.json() as ProductGroup[];
      })
      .catch(this.handleError);
  }

  getProductGroup(id: number): Promise<ProductGroup> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ProductGroup);
    // return this.getGroupData().then(groups => groups.find(group => group.id === id));
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
  getCart(): Promise<Product[]> {
      return Promise.resolve(CART);
    }
  updateCart(customersCart: Product []): void {
    customersCart.forEach(item =>
      CART.push(item)
    );
  }
}
