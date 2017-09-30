import { Component, Input } from '@angular/core';
import { ProductGroup } from '../product-group/product-group';

@Component({
  selector: 'app-product-group-detail',
  templateUrl: './product-group-detail.component.html'
})
export class ProductGroupDetailComponent {
  @Input() productGroupDetail: ProductGroup;
}
