import { Component, OnInit } from '@angular/core';
import { NgbdCarouselBasic} from '../carousel-main/carousel-basic';
import { SaleService } from '../sale-service';
import { Pict} from './pict';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'main-pict',
  templateUrl: './main-pict.component.html'
})
export class MainPictComponent implements OnInit {
  mainPicts: Pict[];
  constructor(private saleService: SaleService, private config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit(): void {
    this.getPicts();
  }

  getPicts(): void {
    this.saleService.getPicts().then( data => this.mainPicts = data);
  }
}

