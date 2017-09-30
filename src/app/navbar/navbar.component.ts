import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  title = 'Собираем скидки!';
  links: string[];
  constructor(private saleService: SaleService) {}
  ngOnInit(): void {
    this.saleService.getLinks().then( links => this.links = links);
  }
}
