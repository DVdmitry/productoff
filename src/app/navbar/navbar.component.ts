import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale-service';
import { NaviLinks } from './navi-links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  title = 'Продукт-off';
  links: NaviLinks[];
  constructor(private saleService: SaleService) {}
  ngOnInit(): void {
    this.saleService.getLinks().then( links => this.links = links);
  }
}
