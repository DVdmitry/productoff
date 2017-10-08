import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Product} from '../../product';

import {SaleService} from '../../../sale-service';

import 'rxjs/add/operator/switchMap';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  templateUrl: './product-group-detail.component.html'
})

export class ProductGroupDetailComponent implements OnInit {
  productGroup: any;
  cartProducts: Product[] = [];
  tableHeader: string [] = ['Наименование', 'Магазин', 'Ед.изм.',
    'Обычная цена', 'Цена по акции', 'Экономия, руб.', 'Экономия, %', 'Справочно: стоимость в другом магазине'];

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private saleService: SaleService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.switchMap((params: ParamMap) =>
      this.saleService.getProductGroup(+params.get('id'))).subscribe(productGroup => {
      this.productGroup = productGroup;
      this.productGroup.productList.forEach(function (item) {
        item.saveMoney = (item.regularPrice - item.salePrice).toFixed(2);
        item.savePercent = (item.saveMoney * 100 / item.regularPrice).toFixed(2);
      });
    });
  }

  toCart(item: Product): void {
    this.cartProducts.forEach( (product, index) => {
      if (product.id === item.id) {
        this.cartProducts.splice(index, 1);
      }
      });
    this.cartProducts.push(item);
  };
}
