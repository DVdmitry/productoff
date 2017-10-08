import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../sale-service';
import { ProductGroup } from './product-group';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  productGroups: ProductGroup[];
  selectedProductGroup: ProductGroup;
  constructor(private saleService: SaleService) {}
  ngOnInit(): void {
    this.saleService.getGroupData().then(group => this.productGroups = group);
  }
  onHover(item): void {
    this.selectedProductGroup = item;
  }
}
