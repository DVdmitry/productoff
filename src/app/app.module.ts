import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SaleService } from './sale-service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductGroupComponent } from './shopping/product-group/product-group.component';
import { MainPictComponent } from './main-pict/main-pict.component';
import { ProductGroupPictComponent} from './shopping/product-group-pict/product-group-pict.component';
import { ProductGroupDetailComponent} from './shopping/product-group/product-group-detail/product-group-detail.component';
import { CartComponent} from './shopping/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingComponent,
    ProductGroupComponent,
    MainPictComponent,
    ProductGroupPictComponent,
    ProductGroupDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [NgbCarouselConfig, SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
