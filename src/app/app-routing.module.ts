import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { MainPictComponent} from './main-pict/main-pict.component';
import {ProductGroupDetailComponent} from './shopping/product-group/product-group-detail/product-group-detail.component';

const routes: Routes = [
   {path: 'about', component: MainPictComponent},
   {path: '', redirectTo: '/about', pathMatch: 'full'},
   {path: 'shopping', component: ShoppingComponent},
   {path: 'detail/:id', component: ProductGroupDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

