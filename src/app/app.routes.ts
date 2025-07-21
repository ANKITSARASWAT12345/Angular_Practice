import { Routes ,RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';

import { Home } from './components/home/home';

import {  ProductListComponent } from './components/product-list/product-list';

import { ProductDetail } from './components/product-detail/product-detail';

import { Cart } from './components/cart/cart';

import { CheckoutComponent } from './components/checkout/checkout';

export const routes: Routes = [

    {path:'', component:Home},
    {path:'products', component:ProductListComponent},
    {path:'product/:id',component:ProductDetail},
    {path:'cart',component:Cart},
    {path:'checkout',component:CheckoutComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}


