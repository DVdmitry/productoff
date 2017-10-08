import { Component, Input } from '@angular/core';
import { ProductGroup } from '../product-group/product-group';

@Component({
  selector: 'app-product-group-pict',
  templateUrl: './product-group-pict.component.html'
})
export class ProductGroupPictComponent {
  @Input() productGroupPict: ProductGroup;
}
