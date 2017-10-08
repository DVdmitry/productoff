import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../product';
import { SaleService} from '../../sale-service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnChanges, OnInit {
  @Input() selectedProducts: Product[];
  totalWholeSave = 0;
  totalSave = 0;
  saveButton: number[] = [];
  customersCart: Product[] = [];
  constructor (private saleService: SaleService) {}
  ngOnInit (): void {
    this.saleService.getCart().then( cart => {
    if (cart.length > 0) {
        cart.forEach(item => {
          console.log(this.customersCart);
          this.customersCart.push(item);
        }
        );
      }});
      };
  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
    };
  setTotalPrice(): void {
    this.selectedProducts.forEach( item => {
      item.totalPrice = +(item.quantity * item.salePrice).toFixed(2);
    });
  }
  setTotalDiscount(): void {
    this.totalSave = 0;
    this.saleService.getCart().then(cart => {
      cart.forEach(item => {
        item.totalDiscount = +(item.quantity * item.saveMoney).toFixed(2);
        this.totalSave += +(item.totalDiscount).toFixed(2);
      });
    }).then(() => this.totalWholeSave = +this.totalSave.toFixed(2));
  }

  clearRow(item): void {
    this.selectedProducts.forEach( (product, index) => {
      if (product.id === item.id) {
        this.selectedProducts.splice(index, 1);
      }
    });
  }
  saveCustomerCart(): void {
     this.saleService.getCart()
       .then((customersCart) => {
         customersCart = null;
         customersCart = [];
     this.selectedProducts.forEach((item, index) =>
         customersCart.push(item)
       );
     this.saleService.updateCart(customersCart);
     }
  );
  };
  getSavingButton(): void {
    this.saveButton.push(1);
  }
}
