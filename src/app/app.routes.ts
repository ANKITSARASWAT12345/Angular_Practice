import { Routes ,RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';

import { Home } from './components/home/home';

import {  ProductListComponent } from './components/product-list/product-list';


import { Cart } from './components/cart/cart';

import { CheckoutComponent } from './components/checkout/checkout';
import { AboutUs } from './components/about-us/about-us';

import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsConditions } from './components/terms-conditions/terms-conditions';
import { ContactComponent } from './components/contact-us/contact-us';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { ProductDetailComponent } from './components/product-detail/product-detail';


export const routes: Routes = [

    {path:'', component:Home},
    {path:'login',component:Login},
    {path:'signup',component:Signup},
    {path:'about-us',component:AboutUs},
    {path:'contact',component:ContactComponent},
    {path:'privacy-policy',component:PrivacyPolicy},
    {path:'terms',component:TermsConditions},
    {path:'products', component:ProductListComponent},
    {path:'product/:id',component:ProductDetailComponent},
    {path:'cart',component:Cart},
    {path:'checkout',component:CheckoutComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}


