import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details';
import { Cart } from './cart/cart';

export const routes: Routes = [
    { path: '', component: ProductListComponent, title: 'Home page' },
    { path: 'products/:productId', component: ProductDetailsComponent, title: 'Product details' },
    { path: 'cart', component: Cart, title: 'Shopping Cart' }
];